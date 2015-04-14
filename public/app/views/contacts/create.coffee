$ ->
  class optima.views.ContactCreate extends Backbone.View
    el: $ '#contact-create-modal'

    events:
      'click a.contact-create-store': 'store'
      'click a.contacts-see': 'CompanyContacts'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @added)
      @listenTo(@model, 'error', @showErrors)

    render: (company_id) ->
      template = optima.templates.contact_create
      company = company_id: company_id
      $(@el).find('.modal-content').html template( company )
      $(@el).modal({backdrop: 'static'})
      console.log @

    store: (e) ->
      e.preventDefault()
      
      $el = $(e.currentTarget)
      dataForm = $('#contact-create-form').serializeJSON()
      @model.save dataForm, beforeSend: ->
        alertify.log('guardando...')
      
    added: ->
      id = @model.get('id')
      if id
        @closeModal()

    cancel: (e) ->
      e.preventDefault()
      @closeModal()