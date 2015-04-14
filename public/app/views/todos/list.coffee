$ ->
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

    # addOne: (model) ->
    #   view = new optima.views.TodoView model: model
    #   view.mailing()
    #   $(@el).find('.last-tracking').prepend view.render().el

    render: ->
      html = []
      $tbody = $(@el).find('table tbody')
      
      @collection.each (model) ->
        view = new optima.views.TodoView model: model
        html.push(view.render().el)
      , @

      $tbody.empty().append html

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