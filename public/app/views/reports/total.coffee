$ ->
  class optima.views.ReportsTotal extends Backbone.View
    el: "#total"

    initialize: ->
      @listenTo(@model, 'change', @render)

    render: ->
      template = optima.templates.reports_total
      $(@el).html(template( @model.toJSON() ))
