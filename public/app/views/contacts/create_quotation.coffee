$ ->
  class optima.views.ContactQuoteCreate extends Backbone.View
    el: $ '#contact-quote-create-modal'
    events:
      'click a.contact-create-store': 'store'
      'click a.contacts-see': 'CompanyContacts'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @added)
      @listenTo(@model, 'error', @showErrors)

    render: (company_id) ->
      template = optima.templates.contact_quote
      company = company_id: company_id
      $(@el).find('.modal-content').html template( company )
      $(@el).modal({backdrop: 'static'})

    store: (evt) ->
      _evt = evt;
      _evt.preventDefault()
      dataForm = $('#contact-create-form').serializeJSON()
      @model.save dataForm, wait: true

    added: ->
      id = @model.get('id')
      company_id = @model.get('company_id')
      pubsub.trigger('quotation:store', company_id: company_id, contact_id: id)
       
    close: ->
      @remove()
      $('.modal-backdrop').remove()

    cancel: (e) ->
      e.preventDefault()
      @close()

    CompanyContacts: (e) ->
      e.preventDefault()
      company_id = $('#contact-create-form').find("input[name='company_id']").val()
      collection = new optima.collections.Contacts
      collection.fetch reset: true, data: company_id: company_id
      view = new optima.views.QuoteCompanyContacts collection: collection
      view.render()