$ ->
  class optima.views.QuotationActivityView extends Backbone.View
    tagName: 'tr'

    render: ->
      template = optima.templates.activity_quotation
      $(@el).html template( @model.toJSON() )
      $(@el).find('span.timeago').timeago()
      @