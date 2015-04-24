$ ->
  class optima.views.QuoteCompanyContact extends Backbone.View
    tagName: 'tr'
    events: 
      'click a.contact-quote' : 'quote'

    render: ->
      template = optima.templates.contact_company_quote
      $(@el).html template( @model.toJSON() )
      @

    quote: (e) ->
      e.preventDefault()
      id = @model.get('id')
      company_id = @model.get('company_id')
      pubsub.trigger('quotation:store', company_id: company_id, contact_id: id)