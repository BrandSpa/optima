$ ->
  class optima.views.ServiceEdit extends Backbone.View
    el: $ '#service-edit-modal'

    events:
      'click .service-save-update': 'update'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @synced)

    render: ->
      template = optima.templates.service_edit
      $(@el).find('.modal-content').html template( @model.toJSON() )
      optima.summernote(@el)
      $(@el).modal({backdrop: 'static'})

    update: (e) ->
      e.preventDefault()
      el = $(@el)
      dataForm = el.find('form').serializeJSON()
      dataForm['text'] = el.find('form [name="text"]').code()
      @model.save dataForm, wait: true

    synced: (model) ->
      if model.id
        pubsub.trigger('service:update')
        @closeModal()

    cancel:(e) ->
      e.preventDefault()
      @closeModal()