$ ->
  class optima.views.ContactEdit extends Backbone.View
    el: $ '#contact-edit-modal'
    template: $ '#contact-edit-template'
    events:
      'click .contact-save-update': 'update'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @synced)
      @listenTo(@model, 'error', @showErrors)

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