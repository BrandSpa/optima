$ ->
  class optima.views.QuotationProductEdit extends Backbone.View
    el: $ '#product-create-modal'

    events:
      'click .quotation-product-update': 'update'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'change', @updated)
      id = @model.get('quotation_id')

    render: ->
      template = optima.templates.product_create
      $(@el).find('.modal-content').html template( @model.toJSON() )
      $(@el).modal({backdrop: 'static'})

    update: (e) ->
      e.preventDefault()
      form = $('.product-create-form')
      dataForm = form.serializeJSON()
      lapse = dataForm['lapse']
      quantity = dataForm['quantity']
      price = dataForm['price']
      dataForm['total'] = (lapse*quantity*price)
      @model.save dataForm, wait: true

    updated: (model) ->
      if model.id
        quotation_id = model.get('quotation_id')
        product = model.get('name')
        socket.emit "quotation-product", quotation_id
        @storeActivity quotation_id, "edito el producto #{product}"
        @closeModal()

    cancel: (e) ->
      e.preventDefault()
      @closeModal()