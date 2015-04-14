$ ->
  class optima.views.QuotationMail extends Backbone.View
    el: $ '#quotation-mail-modal'
    template: $ '#quotation-mail-template'
    events: 
      'click a.quotation-mail-save': 'save'

    initialize: ->
      @activity = new optima.models.Activity
      @id = @model.get('id')

    broadcastChange: (msg) ->
      socket.emit "quotation:change", @id
      @storeActivity @id, msg

    render: ->
      source = $(@template).html()
      t = optima.templates.quotation_mail
      $(@el).find('.modal-content').html(t(  @model.toJSON() ))
      $(@el).modal backdrop: 'static'
      optima.summernote(@el)

    save: (e) ->
      e.preventDefault()
      data = $('#quotation-mail-form').serializeJSON()
      data['mail_message'] = $(@el).find('.summernote').code()
      @model.set data
      @model.save()
      $(@el).modal('hide')
      @broadcastChange "agrego email"
      