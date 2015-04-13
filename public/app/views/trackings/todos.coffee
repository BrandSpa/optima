$ ->
  class optima.views.TrackingTodos extends Backbone.View
    
    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      @$el.find('.todos tbody').empty()
      @collection.each (model) ->
        view = new optima.views.TrackingTodo model: model
        @$el.find('.todos tbody').append view.render().el
      , @