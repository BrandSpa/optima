$ ->
  class optima.views.QuotationCompanyContacts extends Backbone.View
    el: $ "#quotation-company-contacts-modal"
    template: $ '#quotation-company-contact-template'
    events: 
      'click .modal-close': 'close'
      'click a.quotation-contact-change': 'changeContact'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @quotation_id = optima.pathArray[2]

    render: ->
      source = $(@template).html()
      template = Handlebars.compile(source)
      $(@el).find('.select').html template( @collection.toJSON() )
      $(@el).modal({backdrop: 'static'})

    changeContact: (e) ->
      e.preventDefault()
      contact_id =  $('#select-company-contact').val()
      pubsub.trigger('quotation:contact', contact_id)
      @closeModal()

    close: (e) ->
      e.preventDefault()
      @closeModal()
