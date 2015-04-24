$ ->
   class optima.views.TodosView extends Backbone.View
         
    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne)
      pubsub.on("todos:pull", @pull, @)

    pull: ->
      @collection.fetch reset: true

    render: ->
      html = []
      $tbody = $('#todos table tbody')
      
      @collection.each (model) ->
        view = new optima.views.TodoView model: model
        html.push(view.render().el)
      , @

      $tbody.html(html)

    showMoreInfo: (field) ->
      unless optima.user_id == 3
        $().addClass('hidden')

