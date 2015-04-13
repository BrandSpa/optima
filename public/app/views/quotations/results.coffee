$ ->
  class optima.views.QuotationsResultsView extends Backbone.View
    el: $ "#quotations-results"
    template: $ "#quotations-results-template"

    initialize: ->
      @listenTo(@model, 'change', @render)

    render: ->
      source = @template.html()
      template = Handlebars.compile(source)
      $(@el).html template(@model.toJSON())
      @