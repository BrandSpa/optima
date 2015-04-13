$ ->
  class optima.views.CompanyEdit extends Backbone.View
    el: $ '#company-edit-modal'

    events:
      'click .company-save-update': 'update'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @synced)
      @listenTo(@model, 'error', @showErrors)

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