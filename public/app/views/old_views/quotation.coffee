$ ->
  #app
  class optima.views.QuotationAppView extends Backbone.View
    el: $ '#quotation'

    initialize: ->
      @listenTo(@model, 'change', @getContact)
      
    getContact: ->
      contact_id = @model.get('contact_id')
      optima.contact = new optima.models.Contact id: contact_id
      optima.contact.fetch()
      optima.quotationContact = new optima.views.QuotationContact model: optima.contact

  #status    
  class optima.views.QuotationStatus extends Backbone.View
    el: $ '#quotation-options'

    initialize: ->
      @listenTo(@model, 'change', @render)
      
    render: ->
      template = optima.templates.quotation_status
      $(@el).find('.panel-heading').html(template( @model.toJSON() ))    

  #options
  class optima.views.QuotationOptions extends Backbone.View
    el: $ '#quotation-options'

    events:
      'change .select-type': 'changeType'
      'change .select-type-category': 'changeTypeCategory'
      'change .select-client-type': 'changeClientType'
      'change .select-advisor': 'changeAdvisor'
      'change .select-found-us': 'changeFoundUs'
      'change .select-offer': 'changeOffer'
      'click .change-delivered': 'changeDelivered'
      'click .open-comment': 'openComment'
      'click .open-no-send': 'openNoSend'
      'click .open-mail': 'openMail'
      'click .send': 'send'
      
    initialize: ->
      @listenTo(@model, 'change', @render)
      @listenTo(@model, 'sync', @updated)
      @id = @model.get('id')

      pubsub.on('quotation:effective', @changeEffective, @)
      pubsub.on('quotation:noEffective', @openNoEffective, @)
      pubsub.on('quotation:change', @pull, @)
      pubsub.on('quotation:contact', @changeContact, @)

    pull: ->
      @model.fetch()

    render: ->
      template = optima.templates.quotation_options
      $(@el).find('.panel-body').html(template( @model.toJSON() ))

      @blockEdit("Efectiva")
      @blockEdit("Replanteada")
      @blockEdit("Enviada")
      @blockEdit("Entregada")
      @

    blockEdit: (status) ->
      if @model.get('status') == status
        $('.btn-hidden').hide()

    broadcastChange: (msg) ->
      @storeActivity @id, msg
      socket.emit "quotation:change", @id
    
    changeContact: (contact_id) ->
      @model.save contact_id: contact_id
      @broadcastChange "cambio contacto"

    changeType: (e) ->
      val = $(e.currentTarget).val()
      @model.save type: val
      @broadcastChange "cambio tipo a #{val}"

    changeTypeCategory: (e) ->
      val = $(e.currentTarget).val()
      @model.save type_category: val
      @broadcastChange("cambio categoría de tipo a #{val}")

    changeClientType: (e) ->
      val = $(e.currentTarget).val()
      @model.save client_type: val
      @broadcastChange "cambio tipo de cliente a #{val}"

    changeAdvisor: (e) ->
      val = $(e.currentTarget).val()
      @model.save advisor: val
      @broadcastChange "cambio asesor a #{val}"

    changeFoundUs: (e) ->
      val = $(e.currentTarget).val()
      @model.save found_us: val
      @broadcastChange "cambio como nos encontro a #{val}"

    changeOffer: (e) ->
      val = $(e.currentTarget).val()
      @model.save offer: val
      @broadcastChange "cambio ofrecer a #{val}"

    changeEffective: ->
      @model.save status: 'Efectiva'
      @broadcastChange "cambio estado a #{val}"

    changeDelivered: (e) ->
      @model.save status: 'Entregada'
      @broadcastChange "cambio estado a entregada"

    openComment: (e) ->
      e.preventDefault()
      optima.quotationComment.render()

    openNoEffective: ->
      optima.quotationNoEffective.render()

    openNoSend: (e) ->
      e.preventDefault()
      optima.quotationNoSend.render()

    openMail: (e) ->
      e.preventDefault()
      optima.quotationMail.render()

    send: (e) ->
      e.preventDefault()
      id = @model.get('id')
      check = @checkResultsFields()
      if check
        $.post "/quotations/#{id}/sendmail"
        alertify.success('Cotización enviada.')
        @updateQuotationSent()
        @broadcastChange "cambio estado a enviada"
        optima.quotation.fetch()
      else
        alertify.error('Por favor llenar los campos necesarios antes de enviar.')

    updateQuotationSent: ->
      status = @model.get('status')
      created_sent_diff = @model.get('created_sent_diff')

      if status != "Efectiva" || status != "Seguimiento"
        console.log created_sent_diff
        if !created_sent_diff || created_sent_diff < 0
          now = moment().format()
          diff = moment(now).diff(@model.get('created_at'), 'minutes')
          @model.save status: 'Enviada', no_effective: '', sent_at: now, created_sent_diff: diff
    
    checkResultsFields: ->
      if !@model.get('type') && !@model.get('type_category') && !@model.get('client_type') && !@model.get('advisor') && !@model.get('found_us') && !@model.get('offer')
        return false
      else
        return true

  #comment
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

  #no_effective
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
      t = Handlebars.compile(source) 
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
  
  #no_send
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
  
  #mail
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
      t = Handlebars.compile(source) 
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
  
  #times
  class optima.views.QuotationTimes extends Backbone.View
    el: $ '#quotation-times'
    
    initialize: ->
      @listenTo(@model, 'change', @render)

    render: ->
      template = optima.templates.quotation_time
      $(@el).find('.table-responsive').html( template( @model.toJSON() ) )
      $(@el).find('span.timeago').timeago()
      @


    