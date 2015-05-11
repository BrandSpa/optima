Backbone.View::closeModal = ->
    @remove()
    $('.modal-backdrop').remove()
    $('body').removeClass 'modal-open'

Backbone.View::showErrors = (model, response) ->
  errors = JSON.parse(response.responseText)

  _.each errors, (message, row) ->
    console.log(message)
    alertify.error(message)
        
  Backbone.View::storeActivity = (quotation_id, message) ->
    pubsub.trigger "activity:store", quotation_id: quotation_id, message: message
