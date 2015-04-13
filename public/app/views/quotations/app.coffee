$ ->
  class optima.views.QuotationAppView extends Backbone.View
    el: $ '#quotation'

    initialize: ->
      @listenTo(@model, 'change', @getContact)
      
    getContact: ->
      contact_id = @model.get('contact_id')
      optima.contact = new optima.models.Contact id: contact_id
      optima.contact.fetch()
      optima.quotationContact = new optima.views.QuotationContact model: optima.contact