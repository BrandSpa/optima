$ ->
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