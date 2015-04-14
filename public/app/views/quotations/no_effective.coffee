$ ->
  class optima.views.QuotationNoEffective extends Backbone.View
    el: $ '#quotation-no-effective-modal'
    template: $ '#quotation-no-effective-template'
    events: 
      'click a.quotation-no-effective-save': 'save'

    initialize: ->
      @activity = new optima.models.Activity
      @id = @model.get('id')

    broadcastChange: (msg) ->
      socket.emit "quotation:change", @id
      @storeActivity @id, msg

    render: ->
      source = $(@template).html()
      t = optima.templates.quotation_no_effective
      el = $(@el)
      el.find('.modal-content').html(t(  @model.toJSON() ))
      el.modal backdrop: 'static'

    save: (e) ->
      e.preventDefault()
      cause = $('#quotation-no-effective-select').val()
      note = $('#no_effective_note').val()
      @model.set status: "No efectiva", status_cause: cause, status_note: note
      @model.save()
      $(@el).modal('hide')
      @broadcastChange "cambio estado a no efectiva"