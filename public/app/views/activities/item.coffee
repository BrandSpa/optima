$ ->
  class optima.views.ActivityView extends Backbone.View
    tagName: 'tr'

    initialize: ->
      @render()
      @listenTo(@model, 'change', @render)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      template = optima.templates.activity
      $(@el).html template( @model.toJSON() )
      @
