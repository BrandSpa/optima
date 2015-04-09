$ -> 
  class optima.models.QuotationProduct extends Backbone.Model
    urlRoot: '/api/v1/products'

  class optima.collections.QuotationProducts extends Backbone.Collection
    model: optima.models.QuotationProduct
    url: '/api/v1/products'

  class optima.views.QuotationProductView extends Backbone.View
    tagName: 'tr'
    events:
      'click a.delete': 'delete'
      'click a.edit': 'openEdit'
      'click a.duplicate': 'duplicate'
      'click .order': 'order'
      'click .unordered': 'unordered'

    initialize: ->
      @listenTo(@model, 'change', @render)

    render: ->
      template = optima.templates.quotation_product
      $(@el).html( template( @model.toJSON() ) )
      $(@el).data('id', @model.get('id'))
      @

    duplicate: (e) ->
      e.preventDefault()
      id = @model.get('id')
      collection = @collection
      product = $.post "/api/v1/products/#{id}/duplicate"
        .done(@addProduct)
      quotation_id = @model.get('quotation_id')
      product = @model.get('name')
      socket.emit "quotation-product", quotation_id
      @storeActivity quotation_id, "agrego el producto #{product}"

    addProduct: (res) ->
      optima.quotationProducts.add([res])

    delete: (e) ->
      e.preventDefault()
      el = $(e.currentTarget)
      quotation_id = @model.get('quotation_id')
      product = @model.get('name')
      @model.destroy()
      socket.emit "quotation-product:delete", quotation_id
      @storeActivity quotation_id, "elimino el producto #{product}"
      @remove()

    order: (e) ->
      e.preventDefault()
      @model.save ordered: true

    unordered: (e) ->
      e.preventDefault()
      @model.save ordered: false

    openEdit: (e) ->
      e.preventDefault()
      optima.quotationProductEdit = new optima.views.QuotationProductEdit model: @model
      optima.quotationProductEdit.render()

  class optima.views.QuotationProductsView extends Backbone.View
    el: $ '#quotation-products'
    events:
      'click a.quotation-product-open-create': 'openCreate'
      "sortstop": "stop"
      
    stop: (event, ui) ->
      pos = ui.item.index()
      id = $(ui.item).data('id')
      that = @

      $.map $(@el).find('tbody tr'), (el) ->
        pos = $(el).index()
        id = $(el).data('id')
        model = that.collection.get(id)
        model.save position: pos

    initialize: ->
      @listenTo(@collection, 'reset', @render, @)
      @listenTo(@collection, 'add', @addOne, @)
      pubsub.on("products:pull", @getMore, @)
      @quotation_id = optima.pathArray[2]
      table = $(@el).find('table tbody')
      $(@el).find('.sortable').sortable()
    
    getMore: (id) ->
      @collection.fetch data: quotation_id: @quotation_id

    addOne: (model) ->
      quotationView = new optima.views.QuotationProductView model: model
      $(@el).find('table .thead').after quotationView.render().el

    render: ->
      el = $(@el)
      @collection.each (model) ->
        quotationView = new optima.views.QuotationProductView model: model
        el.find('table').append quotationView.render().el

    openCreate: (e) ->
      e.preventDefault()
      quotation_id =  optima.pathArray[2]
      model = new optima.models.QuotationProduct
      view = new optima.views.QuotationProductCreate model: model
      view.render(quotation_id)

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