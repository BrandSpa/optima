$ ->
  class optima.views.QuotationServiceCreate extends Backbone.View
    el: $ '#quotation-service-create-modal'
    template: $ '#quotation-service-create-template'
    events:
      'submit #service-search-form': 'search'
      'click .modal-close': 'close'

    render: (quotation_id) ->
      data = {quotation_id: quotation_id}
      source = $(@template).html()
      template = Handlebars.compile(source)
      $(@el).find('.modal-content').html template( data )
      $(@el).modal({backdrop: 'static'})    

    search: (e) ->
      e.preventDefault()
      query = $('.service-query').val()
      collection = new optima.collections.Services
      collection.fetch reset: true, data: query: query
      results = new optima.views.ServiceResults collection: collection

    close: (e)->
      e.preventDefault()
      @closeModal()