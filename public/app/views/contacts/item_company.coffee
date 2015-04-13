$ ->
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