$ ->
  class optima.views.QuotationView extends Backbone.View
    tagName: 'tr'
    events: 
      'click .quotation-open-edit': 'openquotationEdit'
      'click .quotation-open-contacts': 'openContacts'
      'click .quotation-company-
      lect': 'companySelect'
      'click .quotation-contact-select': 'contactSelect'

    render: ->
      t = optima.templates.quotation
      $(@el).html t(@model.toJSON())
      @

    openEdit: (e) ->
      e.preventDefault()
      edit = new optima.QuotationEdit model: @model
      edit.render()

    openContacts: (e) ->
      e.preventDefault()
      optima.quotationContacts.render(@model)

    companySelect: (e)->
      e.preventDefault()
      company = @model.get('company')
      $.post '/companies/session/'+company.id
        .done ->
          window.location.href = "/contacts/create"

    contactSelect: (e)->
      e.preventDefault()
      company = @model.get('company')
      contact = @model.get('contact')
      $.post '/companies/session/'+company.id
      $.post '/contacts/session/'+contact.id
        .done ->
          window.location.href = "/products/create"