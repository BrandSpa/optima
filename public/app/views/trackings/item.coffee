$ ->
  class optima.views.QuotationTracking extends Backbone.View
    events:
      'click .tracking-open-edit': 'openEdit'
      'click .todo-open-create': 'openTodoCreate'
      'click .tracking-delete': 'delete'

    initialize: ->
      @render()
      @listenTo(@model, 'change', @render)
      @listenTo(@model, 'error', @showErrors)
      pubsub.on('todoTracking:stored', @getTodos, @)
      pubsub.on("todos:pull", @getTodos, @)

    render: ->
      template = optima.templates.tracking
      @$el.html template( @model.toJSON() )
      @

    getTodos: ->
      id = @model.get('id')
      todos = new optima.collections.Todos
      todosView = new optima.views.TrackingTodos collection: todos, el: @$el
      todos.fetch reset: true, data: where: "tracking_id = #{id}"

    openTodoCreate: (e) ->
      e.preventDefault()
      users = new optima.collections.Users
      view = new optima.views.TodoCreateView model: new optima.models.Todo
      id = @model.get('id')

      users.fetch()
        .done (users) ->
          view.render(users, id)