$ ->
  class optima.views.QuotationTimes extends Backbone.View
    el: $ '#quotation-times'
    
    initialize: ->
      @listenTo(@model, 'change', @render)

    render: ->
      template = optima.templates.quotation_time
      $(@el).find('.table-responsive').html( template( @model.toJSON() ) )
      $(@el).find('span.timeago').timeago()
      @