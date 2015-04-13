$ ->
  class optima.views.QuotationServiceSelect extends Backbone.View
    el: $ '#quotation-service-list'

    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      template = optima.templates.service_list
      $(@el).html template( @collection.toJSON() )