$ ->
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
      'click .service-approval-remove': "serviceApprovalRemove"
      'click .service-approval-add': "serviceApprovalAdd"
      
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
        $.post "/api/v1/quotations/#{id}/sendmail"
        
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
        
        if !created_sent_diff || created_sent_diff < 0
          now = moment().format()
          diff = moment(now).diff(@model.get('created_at'), 'minutes')
          @model.save status: 'Enviada', no_effective: '', sent_at: now, created_sent_diff: diff
    
    checkResultsFields: ->
      if !@model.get('type') && !@model.get('type_category') && !@model.get('client_type') && !@model.get('advisor') && !@model.get('found_us') && !@model.get('offer')
        return false
      else
        return true
   
    serviceApprovalRemove: (evt) ->
      evt.preventDefault()
      @model.save service_approval: 1

    serviceApprovalAdd: (evt) ->
      evt.preventDefault()
      @model.save service_approval: 0



