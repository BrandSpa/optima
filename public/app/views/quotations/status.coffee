$ ->
  class optima.views.QuotationStatus extends Backbone.View
    el: $ '#quotation-options'

    initialize: ->
      @listenTo(@model, 'change', @render)
      
    render: ->
      template = optima.templates.quotation_status
      $(@el).find('.panel-heading').html(template( @model.toJSON() ))    