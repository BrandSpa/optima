$ ->
  class optima.views.QuotationNoSend extends Backbone.View
    el: $ '#quotation-no-send-modal'
    template: $ '#quotation-no-send-template'
    events: 
      'click a.quotation-no-send-save': 'save'

    initialize: ->
      @activity = new optima.models.Activity
      @id = @model.get('id')

    broadcastChange: (msg) ->
      socket.emit "quotation:change", @id
      @storeActivity @id, msg

    render: ->
      source = $(@template).html()
      t = Handlebars.compile(source) 
      el = $(@el)
      el.find('.modal-content').html(t(  @model.toJSON() ))
      el.modal backdrop: 'static'

    save: (e) ->
      e.preventDefault()
      cause = $('#quotation-no-send-select').val()
      note = $('#no_send_note').val()
      @model.set status: "No enviada", status_cause: cause, status_note: note
      @model.save()
      $(@el).modal('hide')
      @broadcastChange "cambio estado a no enviada"