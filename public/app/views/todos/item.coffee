$ ->
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