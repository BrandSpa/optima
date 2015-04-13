$ ->
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