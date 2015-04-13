$ ->
  class optima.views.QuotationServiceView extends Backbone.View
    template: $ '#quotation-service-template'
    tagName: 'tr'
    events: 
      'click .quotation-service-detach': 'detach'
      'click .service-open-edit': 'openEdit'

    initialize: ->
      @listenTo(@model, 'change', @render)
      pubsub.on('service:update', @notifyUpdate, @)
      @quotation_id = optima.pathArray[2]

    notifyUpdate: ->
      socket.emit "quotation-service", @quotation_id
      @storeActivity @quotation_id, "edito un servicio"
      
    render: ->
      template = optima.templates.quotation_service
      $(@el).html template( @model.toJSON() )
      @

    openEdit: (e) ->
      e.preventDefault()
      edit = new optima.views.ServiceEdit model: @model
      edit.render()

    detach: (e) ->
      e.preventDefault()
      
      id = @model.get('id')
      $.ajax
        method: 'DELETE'
        url: "/api/v1/services/#{id}"
        data: quotation_id: @quotation_id
      socket.emit "quotation-service", @quotation_id
      @storeActivity @quotation_id, "elimino un servicio"
      @remove()