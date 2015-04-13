$ ->
  # item
  class optima.views.ContactView extends Backbone.View
    tagName: 'tr'
    template: $ '#contact-template'
    events: 
      'click .contact-open-edit': 'openEdit'

    initialize: ->
      @render()
      @listenTo(@model, 'change', @render)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      template = optima.templates.contact
      $(@el).html template( @model.toJSON() )
      @

    openEdit: (e) ->
      e.preventDefault()
      edit = new optima.views.ContactEdit model: @model
      edit.render()

  # list
  class optima.views.ContactsView extends Backbone.View
    el: $ '#contacts'
    events:
      'click .contact-see-more' : 'seeMore'
      'submit .contact-search' : 'search'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne, @)

    addOne: (model) ->
      view = new optima.views.ContactView model: model
      $(@el).find('table .thead').after view.render().el

    render: ->
      @collection.each (model) ->
        view = new optima.views.ContactView model: model
        $(@el).find('table').append view.render().el
        $(@el).find('.table-responsive').slimScroll
          height: '400px'
      , @

    seeMore: (e) ->
      e.preventDefault()
      el = e.currentTarget
      offset = $(el).data('offset')
      more = (offset + 10)
      @collection.fetch data: offset: more
      $(el).data('offset', more)

    search: (e) ->
      e.preventDefault()
      query = $('.contact-query').val()
      @collection.fetch data: query: query

  # create_quotation 
  class optima.views.ContactQuoteCreate extends Backbone.View
    el: $ '#contact-quote-create-modal'
    template: $ '#contact-quote-create-template'
    events:
      'click a.contact-create-store': 'store'
      'click a.contacts-see': 'CompanyContacts'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @added)
      @listenTo(@model, 'error', @showErrors)

    render: (company_id) ->
      source = $(@template).html()
      template = Handlebars.compile(source)
      company = company_id: company_id
      $(@el).find('.modal-content').html template( company )
      $(@el).modal({backdrop: 'static'})

    store: (e) ->
      e.preventDefault()
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

  # create 
  class optima.views.ContactCreate extends Backbone.View
    el: $ '#contact-create-modal'
    template: $ '#contact-create-template'
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
      dataForm = $('#contact-create-form').serializeJSON()
      @model.save dataForm, wait: true
      
    added: ->
      id = @model.get('id')
      if id
        @closeModal()

    cancel: (e) ->
      e.preventDefault()
      @closeModal()

  #edit
  class optima.views.ContactEdit extends Backbone.View
    el: $ '#contact-edit-modal'
    template: $ '#contact-edit-template'
    events:
      'click .contact-save-update': 'update'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @synced)

    render: ->
      template = optima.templates.contact_edit
      $(@el).find('.modal-content').html template( @model.toJSON() )
      $(@el).modal({backdrop: 'static'})

    update: (e) ->
      e.preventDefault()
      el = $(@el)
      dataForm = el.find('form').serializeJSON()
      @model.save dataForm, wait: true

    synced: (model) ->
      if model.id
        @closeModal()

    cancel:(e) ->
      e.preventDefault()
      @closeModal()

  # item_company
  class optima.views.QuoteCompanyContact extends Backbone.View
    template: $ '#company-contact-template'
    tagName: 'tr'
    events: 
      'click a.contact-quote' : 'quote'

    render: ->
      source = $(@template).html()
      template = Handlebars.compile(source)
      $(@el).html template( @model.toJSON() )
      @

    quote: (e) ->
      e.preventDefault()
      id = @model.get('id')
      company_id = @model.get('company_id')
      pubsub.trigger('quotation:store', company_id: company_id, contact_id: id)

  # list_company
  class optima.views.QuoteCompanyContacts extends Backbone.View
    el: $ '#contact-quote-create-modal'
    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      el = $(@el)
      @collection.each (model) ->
        view = new optima.views.QuoteCompanyContact model: model
        $(el).find('table').append view.render().el

  # item_quotation
  class optima.views.QuotationContact extends Backbone.View
    el: $ '#quotation-contact'

    template: $ '#quotation-contact-template'
    
    events:
      'click a.quotation-contact-change': 'openChange'
      'click a.quotation-contact-create': 'openCreate'
      'click a.edit': 'openEdit'

    initialize: ->
      @listenTo(@model, 'change', @render)

    render: ->
      template = optima.templates.quotation_contact
      $(@el).find('.table-responsive').html( template( @model.toJSON() ) )
      @

    openEdit: (e) ->
      e.preventDefault()
      edit = new optima.views.ContactEdit model: @model
      edit.render()

    openChange: (e) ->
      e.preventDefault()
      collection = new optima.collections.Contacts
      company_id = @model.get('company_id')
      collection.fetch reset: true, data: company_id: company_id
      optima.quotationCompanyContacts = new optima.views.QuotationCompanyContacts collection: collection

    openCreate: (e) ->
      e.preventDefault()
      view =  new optima.views.ContactCreate model: new optima.models.Contact
      company_id = @model.get('company_id')
      view.render(company_id)

  #list_quotation
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
