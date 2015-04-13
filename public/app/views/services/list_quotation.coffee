$ ->
  class optima.views.QuotationServicesView extends Backbone.View
    el: $ '#quotation-services'
    events: 
      'click a.quotation-product-open-create': 'openCreate'
      'click a.quotation-service-attach': 'attach'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @add, @)
      @quotation_id = optima.pathArray[2]

      pubsub.on("services:pull", @getMore, @)

    getMore: (id) ->
      _.delay @pull(id), 3000

    pull: (id) ->
      @collection.fetch reset: true, data: quotation_id: id
 
    add: (model) ->
      view = new optima.views.QuotationServiceView model: model
      $(@el).find('table').append view.render().el

    render: ->
      table = $(@el).find('table')
      table.empty()
      @collection.each (model) ->
        view = new optima.views.QuotationServiceView model: model
        table.append view.render().el
      , @

    openCreate: (e) ->
      e.preventDefault()
      view = new optima.views.QuotationServiceCreate
      view.render()

    attach: (e) ->
      e.preventDefault()
      service_id = $('#quotation-service-list').find('select').val()
      @collection.create quotation_id: @quotation_id, service_id: service_id, {success: @notify}
      @storeActivity @quotation_id, "agrego un servicio"
      
    notify: (res)->
      socket.emit "quotation-service", res.toJSON().quotation_id