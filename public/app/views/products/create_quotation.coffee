$ ->
  class optima.views.QuotationProductCreate extends Backbone.View
    el: $ '#product-create-modal'

    events:
      'click .quotation-product-save': 'store'
      'change .select-product-name': 'hideConfig'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @stored)
      @listenTo(@model, 'error', @showErrors)

    render: (quotation_id) ->
      data = {quotation_id: quotation_id}
      template = optima.templates.product_create
      $(@el).find('.modal-content').html template( data )
      $(@el).modal({backdrop: 'static'})

    serializeData: (dataForm) ->
      lapse = dataForm['lapse']
      quantity = dataForm['quantity']
      price = dataForm['price']
      dataForm['total'] = (lapse*quantity*price)
      dataForm

    store: (e) ->
      e.preventDefault()
      dataForm = $('.product-create-form').serializeJSON()
      data = @serializeData(dataForm)
      @model.save data, wait: true

    stored: (model) ->
      if model.id
        optima.quotationProducts.add(model)
        quotation_id = model.get('quotation_id')
        product = model.get('name')
        socket.emit "quotation-product", quotation_id
        @storeActivity quotation_id, "agrego el producto #{product}"
        @close()

    hideConfig: (e)->
      val = $(e.currentTarget).val()
      container = $(@el).find('.config')
      productNames = ['Desktops', 'Laptops', 'Apple', 'Servers' ]
      if $.inArray(val, productNames) > -1
        container.fadeIn()
      else
        container.fadeOut()
      
    close: ->
     @closeModal()

    cancel: (e) ->
      e.preventDefault()
      @close()