$ ->
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