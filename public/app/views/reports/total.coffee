$ ->
  class optima.views.ReportsTotal extends Backbone.View

    initialize: ->
      @listenTo(@model, 'change', @render)

    render: ->
      template = optima.templates.reports_total
      $(@el).empty().append(template( @model.toJSON() ))
      $("#total").empty().append(@el)
