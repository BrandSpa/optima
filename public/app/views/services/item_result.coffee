$ ->
  class optima.views.ServiceResult extends Backbone.View
    template: $ '#service-result-template'
    tagName: 'tr'
    events:
      'click .quotation-service-attach' : 'attach'

    initialize: ->
      @listenTo(@model, 'sync', @attached)
      @quotation_id = optima.pathArray[2]

    render: ->
      source = $(@template).html()
      template = Handlebars.compile(source)
      $(@el).html template( @model.toJSON() )
      @

    attach: (e) ->
      e.preventDefault()
      service_id = @model.get('id')
      optima.quotationServices.create quotation_id: @quotation_id, service_id: service_id