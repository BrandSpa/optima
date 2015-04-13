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