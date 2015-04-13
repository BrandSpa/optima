$ ->
  class optima.views.QuotationComment extends Backbone.View
    el: $ '#quotation-comment-modal'
    template: $ '#quotation-comment-template'
    events: 
      'click a.quotation-comment-save': 'save'

    initialize: ->
      @id = @model.get('id')

    broadcastChange: (msg) ->
      socket.emit "quotation:change", @id
      @storeActivity @id, msg

    render: ->
      source = $(@template).html()
      t = Handlebars.compile(source) 
      $(@el).find('.modal-content').html(t(  @model.toJSON() ))
      $(@el).modal backdrop: 'static'
      optima.summernote(@el)

    save: (e) ->
      e.preventDefault()
      comment = $('#quotation-comment-text').code()
      @model.set comment: comment
      @model.save()
      @broadcastChange "agrego un comentario"
      $(@el).modal('hide')