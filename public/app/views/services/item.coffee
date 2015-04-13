$ ->
  class optima.views.ServiceView extends Backbone.View
    tagName: 'tr'

    events:
      'click .service-open-edit': 'openEdit'
      'click .service-delete': 'delete'

    initialize: ->
      @render()
      @listenTo(@model, 'change', @render)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      template = optima.templates.service
      $(@el).html template( @model.toJSON() )
      @

    openEdit: (e) ->
      e.preventDefault()
      edit = new optima.views.ServiceEdit model: @model
      edit.render()
    
    delete: (e) ->
      e.preventDefault()
      @model.destroy()
      @remove()