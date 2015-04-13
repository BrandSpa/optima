$ ->
  class optima.views.CompanyCreate extends Backbone.View
    el: $ '#company-create-modal'


    events:
      'click a.company-save-store': 'store'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @added)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      
      template = optima.templates.company_create
      $(@el).find('.modal-content').html template( @model.toJSON() )
      $(@el).find('.modal-content').html template( @model.toJSON() )
      $(@el).modal({backdrop: 'static'})

    store: (e) ->
      e.preventDefault()
      dataForm = $('#company-create-form').serializeJSON()
      @model.save dataForm, wait: true
  
    added: (model) ->
      if model.id
        id = @model.get('id')
        optima.companies.add(model)
        @closeModal()
      
    cancel: (e) ->
      e.preventDefault()
      @closeModal()