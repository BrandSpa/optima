$ ->
  
  class optima.views.CompanyView extends Backbone.View
    tagName: 'tr'
    events: 
      'click .company-open-edit': 'openEdit'
      'click .company-open-contacts': 'openContacts'
      'click .company-open-create-contact': 'openContactCreate'

    initialize: ->
      @render()
      @listenTo(@model, 'change', @render)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      template = optima.templates.company
      $(@el).html template( @model.toJSON() )
      @

    openEdit: (e) ->
      e.preventDefault()
      edit = new optima.views.CompanyEdit model: @model
      edit.render()
      console.log edit.render()

    openContacts: (e) ->
      e.preventDefault()
      optima.companyContacts.render(@model)

    openContactCreate: (e) ->
      e.preventDefault()
      view = new optima.views.ContactCreate model: new optima.models.Contact
      view.render(@model.get('id'))

  class optima.views.CompaniesView extends Backbone.View
    el: $ '#companies'
    events:
      'click .company-see-more' : 'seeMore'
      'submit .company-search' : 'search'
      'click .company-open-create': 'openCreate'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne, @)

    addOne: (model) ->
      companyView = new optima.views.CompanyView model: model
      $(@el).find('table .thead').after companyView.render().el

    render: ->
      @collection.each (model) ->
        companyView = new optima.views.CompanyView model: model
        $(@el).find('table').append companyView.render().el
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
      query = $('.company-query').val()
      @collection.fetch data: query: query

    openCreate: (e) ->
      e.preventDefault()
      view = new optima.views.CompanyCreate model: new optima.models.Company
      view.render()

  class optima.views.CompanyCreate extends Backbone.View
    el: $ '#company-create-modal'

    events:
      'click a.company-save-store': 'store'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @added)
      @listenTo(@model, 'error', @showErrors)

    render: ->

      template = optima.templates.company_create
      $(@el).find('.modal-content').html template( @model.toJSON() )
      $(@el).modal({backdrop: 'static'})


    store: (e) ->
      e.preventDefault()
      dataForm = $('#company-create-form').serializeJSON()
      @model.save dataForm, wait: true
  
    added: (model) ->
      if model.id
        id = @model.get('id')
        optima.companies.add(model)
        @closeModal()
      
    cancel: (e) ->
      e.preventDefault()
      @closeModal()

  class optima.views.CompanyEdit extends Backbone.View
    el: $ '#company-edit-modal'

    events:
      'click .company-save-update': 'update'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @synced)

    render: ->
      template = optima.templates.company_edit
      @$el.find('.modal-content').html template( @model.toJSON() )
      @$el.modal({backdrop: 'static'})

    update: (e) ->
      e.preventDefault()
      dataForm = $('.company-edit-form').serializeJSON()
      el = $(@el)
      @model.save dataForm, wait: true

    synced: (model) ->
      if model.id
        @closeModal()

    cancel:(e) ->
      e.preventDefault()
      @closeModal()

  class optima.views.CompanyContacts extends Backbone.View
    el: $ '#company-contacts-modal'
    template: $ '#company-contacts-template'

    render: (model) ->
      template = optima.templates.company_contacts
      $(@el).find('.modal-content').html template( model.toJSON() )
      $(@el).modal()

  class optima.views.CompanyQuoteCreate extends Backbone.View
    el: $ '#company-quote-create-modal'
    template: $ '#company-quote-create-template'
    events:
      'click a.company-quote-store': 'store'
      'click .modal-close': 'cancel'
      'submit #company-search-form': 'search'

    initialize: ->
      @listenTo(@model, 'sync', @added)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      source = $(@template).html()
      template = Handlebars.compile(source)
      $(@el).find('.modal-content').html template( @model.toJSON() )
      $(@el).modal({backdrop: 'static'})

    search: (e) ->
      e.preventDefault()
      query = $('.company-query').val()
      collection = new optima.collections.Companies
      collection.fetch reset: true, data: query: query
      results = new optima.views.CompanyResults collection: collection

    store: (e) ->
      e.preventDefault()
      dataForm = $('#company-create-form').serializeJSON()
      @model.save dataForm, wait: true
  
    added: (model) ->
      if model.id
        id = @model.get('id')
        @closeModal()
        view = new optima.views.ContactQuoteCreate model: new optima.models.Contact
        view.render(id)
        

    cancel: (e) ->
      e.preventDefault()
      @closeModal()

  
  class optima.views.CompanyResult extends Backbone.View
    template: $ '#company-result-template'
    tagName: 'tr'
    events: 
      'click a.company-result-quote': 'quote'

    render: ->
      source = $(@template).html()
      template = Handlebars.compile(source)
      $(@el).html template( @model.toJSON() )
      @

    quote: (e) ->
      e.preventDefault()
      id = @model.get('id')
      optima.companyQuoteCreate.closeModal()
      view = new optima.views.ContactQuoteCreate model: new optima.models.Contact
      view.render(id)
      

  class optima.views.CompanyResults extends Backbone.View
    el: $ '#company-quote-create-modal'
    
    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      $(el).find('table').html('')
      el = $(@el)
      @collection.each (model) ->
        view = new optima.views.CompanyResult model: model
        $(el).find('table').append view.render().el

    close: ->
      @remove()