$ ->
  class optima.views.QuotationCreate extends Backbone.View
    
    initialize: ->
      @listenTo(@model, 'sync', @stored)
      pubsub.on('quotation:store', @store, @)

    store: (data) ->
      @model.save data

    stored: (model) ->
      pubsub.trigger('socket:notification', model)
      socket.emit('quotations', model)
      window.location = "/quotations/#{model.id}"