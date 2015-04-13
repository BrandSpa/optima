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