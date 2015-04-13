$ ->
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