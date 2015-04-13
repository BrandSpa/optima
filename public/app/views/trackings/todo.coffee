$ ->
  class optima.views.TrackingTodo extends Backbone.View
    tagName: 'tr'

    render: ->
      template = optima.templates.todo_tracking
      @$el.html template( @model.toJSON() )
      @