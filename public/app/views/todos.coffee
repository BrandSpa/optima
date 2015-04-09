$ ->
  class optima.models.Todo extends Backbone.Model
    urlRoot: '/api/v1/todos'

  class optima.collections.Todos extends Backbone.Collection
    url: '/api/v1/todos'
    model: optima.models.Todo

  class optima.views.TodoView extends Backbone.View
    tagName: "tr"
    events: 
      'click .tracking-open-edit': 'openEdit'
      'change .todo-completed': 'completed'

    initialize: ->
      @render()
      @listenTo(@model, 'change', @render)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      template = optima.templates.todo
      $(@el).html template( @model.toJSON() )
      $(@el).find('span.timeago').timeago()
      @

    completed: ->
      @model.save completed: 1
      @storeActivity @id, "Completo una tarea"
      socket.emit('todos')
      @remove()

    mailing: ->
      $.get 'http://127.0.0.1:3000/sendmail', data: {message: 'alo'}
      .done (res) ->
        console.log res

  class optima.views.TodosView extends Backbone.View
    el: $ "#todos"
    events:
      'click .todo-open-create': 'openCreate'
      
    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne)
      pubsub.on("todos:pull", @pull, @)

    pull: ->
      @collection.fetch reset: true

    addOne: (model) ->
      view = new optima.views.TodoView model: model
      view.mailing()
      $(@el).find('.last-tracking').prepend view.render().el

    render: ->
      $(@el).find('#pending > table tbody').empty()
      @collection.each (model) ->
        view = new optima.views.TodoView model: model
        $(@el).find('table').append view.render().el
      , @

    showMoreInfo: (field) ->
      unless optima.user_id == 3
        $().addClass('hidden')

    openCreate: (e) ->
      e.preventDefault()
      users = new optima.collections.Users
      model = new optima.models.Todo
      view = new optima.views.TodoCreateView model: model
      users.fetch()
        .done (users) ->
          view.render(users)

  class optima.views.TodoCreateView extends Backbone.View
    el: $ '#todo-create-modal'
    template: $ '#todo-create-template'
    events:
      'click .todo-save-store' : 'store'
      'click .modal-close' : 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @stored)
      @listenTo(@model, 'error', @showErrors)
    

    render: (users, tracking_id) ->
      el = $(@el)
      source = $(@template).html()
      template = Handlebars.compile(source)
      data = users: users, tracking_id: tracking_id
      el.find('.modal-content').html template( data )
      el.find('.datepicker').pickadate formatSubmit: 'yyyy/mm/dd'
      el.find('.timepicker').pickatime formatSubmit: 'HH:i', hiddenName = true
      el.modal backdrop: 'static'

    serializeData: (dataForm) ->
      dataForm['quotation_id'] = optima.pathArray[2]
      dataForm['expires_date'] = dataForm['expires_date_submit']
      dataForm['expires_time'] = dataForm['expires_time_submit']
      if dataForm['tracking_id'] == ''
        delete dataForm['tracking_id']
      dataForm
           
    store: (e) ->
      e.preventDefault()
      dataForm = $(@el).find('form').serializeJSON()
      data = @serializeData(dataForm)
      @model.save data, wait: true

    storeNotifications: ->
      @storeActivity @id, "Agrego una tarea"
      notification = new optima.models.Notification
      notification.save user_id: model.get('user_id'), message: "Nueva tarea"

    notify: (model) ->
      pubsub.trigger('notification:store', "Nueva tarea")
      pubsub.trigger('todoTracking:stored', model)
      socket.emit('todos', model.id)
    
    stored: (model) ->
      if model.id && optima.todos
        optima.todos.add(model)
        @notify(model)
        @closeModal()
      else
        @notify(model)
        @closeModal()

      pubsub.trigger("todos:mail", model)

    cancel: (e) ->
      e.preventDefault()
      @closeModal()

  class optima.views.TodoMailNew extends Backbone.View
    
    initialize: ->
      pubsub.on("todos:mail", @render, @)

    render: (model) ->
      template = optima.templates.todo_new
      view = template( model.toJSON() )
      $.post optima.mail_api_url, {message: view, subject: 'Nueva Tarea Asignada', to: [{"email":  optima.user_email}]}

  class optima.views.TodoMailCompleted extends Backbone.View

