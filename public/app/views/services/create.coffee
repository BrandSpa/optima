$ ->
  class optima.views.ServiceCreate extends Backbone.View
    el: $ '#service-create-modal'

    events:
      'click .service-create-store' : 'store'
      'click .modal-close' : 'closeModal'

    initialize: ->
      @listenTo(@model, 'sync', @stored)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      template = optima.templates.service_create
      $(@el).find('.modal-content').html template( @model.toJSON() )
      optima.summernote(@el)
      $(@el).modal({backdrop: 'static'})
      
    store: (e) ->
      e.preventDefault()
      dataForm = $(@el).find('form').serializeJSON()
      dataForm['text'] = $(@el).find('form [name="text"]').code()
      @model.save dataForm, wait: true
    
    stored: (model) ->
      if model.id
        optima.services.add(model)
        @closeModal()