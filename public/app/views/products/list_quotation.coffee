$ ->
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