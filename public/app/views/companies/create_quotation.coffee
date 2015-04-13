$ ->
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