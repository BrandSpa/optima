$ ->
  class optima.models.Quotation extends Backbone.Model
    urlRoot: '/api/v1/quotations'

  class optima.collections.Quotations extends Backbone.Collection
    model: optima.models.Quotation
    url: '/api/v1/quotations'

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
    
  class optima.views.QuotationsView extends Backbone.View
    el: $ '#quotations'

    events:
      'click .quotation-see-more' : 'seeMore'
      'submit .quotation-search' : 'search'
      'click .quotation-open-quote': 'openQuote'
      'change .filter-status': 'filterByStatus'
      'change .filter-advisor': 'filterByAdvisor'
      'change .filter-client-type': 'filterByClientType'
      
      
    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @renderOne)
      @filters = {}
      @offset = 0

    addPlugins: ->
      $('.contact-popover').popover html: true, trigger: 'hover', placement: 'left'
      $('.company-popover').popover html: true, trigger: 'hover'
      $('.timeago-popover').popover html: true, trigger: 'hover', placement: 'left'
      
      $(@el).find('span.timeago').timeago()

    renderOne: (model)->
      console.log model.toJSON()
      quotationView = new optima.views.QuotationView model: model
      @$el.find('tbody').prepend quotationView.render().el
      @addPlugins()

    render: (collection) ->
      html = []
      if collection && collection.models
        coll = collection
      else
        coll = @collection

      coll.each (model) ->
        quotationView = new optima.views.QuotationView model: model
        html.push quotationView.render().el
      , @
      @$el.find('tbody').html html

      @$el.find('.table-responsive').slimScroll()

      @addPlugins()

    seeMore: (e) ->
      that = @
      e.preventDefault()
      el = e.currentTarget
      more = (@offset + 10)
      @collection.fetch add: true, remove: false, data: offset: more 
      .done (models) ->

        if _.isEmpty(that.filters)
          that.render()
          that.scrollToBottom()
        else
          that.filter()
          
      @offset = more

    search: (e) ->
      e.preventDefault()
      query = $('.quotation-query').val()
      @collection.fetch data: query: query

    openQuote: (e) ->
      e.preventDefault()
      model = new optima.models.Company
      optima.companyQuoteCreate = new optima.views.CompanyQuoteCreate model: model
      optima.companyQuoteCreate.render()

    filter: (filter) ->
      console.log @filters
      if filter
        @filters = _.extend(@filters, filter)
      models = @collection.where @filters
      collection = new optima.collections.Quotations models
      @render(collection)
      @scrollToBottom()
     

    scrollToBottom: ->
      container =  @$el.find('.table-responsive')
      h = container.prop('scrollHeight') + 'px'
      container.slimScroll scrollTo : h

    filterByStatus: (e) ->
      el = $(e.currentTarget)
      status = status: el.val()
      @filter(status)     

    filterByAdvisor: (e) ->
      el = $(e.currentTarget)
      status = advisor: el.val()
      @filter(status)

    filterByClientType: (e) ->
      el = $(e.currentTarget)
      status = client_type: el.val()
      @filter(status)


  class optima.collections.QuotationsResults extends Backbone.Model
    urlRoot: '/api/v1/results'

  class optima.views.QuotationsResultsView extends Backbone.View
    el: $ "#quotations-results"
    template: $ "#quotations-results-template"

    initialize: ->
      @listenTo(@model, 'change', @render)

    render: ->
      source = @template.html()
      template = Handlebars.compile(source)
      $(@el).html template(@model.toJSON())
      @

  class optima.views.QuotationCreate extends Backbone.View
    
    initialize: ->
      @listenTo(@model, 'sync', @stored)
      pubsub.on('quotation:store', @store, @)

    store: (data) ->
      @model.save data

    stored: (model) ->
      pubsub.trigger('socket:notification', model)
      socket.emit('quotations', model)
      window.location = "/quotations/#{model.id}"
