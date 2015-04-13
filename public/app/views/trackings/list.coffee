$ ->
  class optima.views.QuotationTrackings extends Backbone.View
    el: $ "#trackings"

    events:
      'click .tracking-open-create': 'openCreate'
      'click .effective': 'effective'
      'click .no-effective': 'noEffective'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne)
      pubsub.on("trackings:pull", @pull, @)
      @quotation_id = optima.pathArray[2]

    pull: (quotation_id) ->
      @collection.fetch reset: true, data: quotation_id: @quotation_id

    addOne: (model) ->
      view = new optima.views.QuotationTracking model: model
      $(@el).find('.last-tracking').prepend view.render().el
      view.getTodos(model.get('id'))

    render: ->
      $(@el).find('.trackings-container').empty()
      @collection.each (model) ->
        view = new optima.views.QuotationTracking model: model
        $(@el).find('.trackings-container').append view.render().el
        view.getTodos(model.get('id'))
      , @

    openCreate: (e) ->
      e.preventDefault()
      collection = new optima.collections.Contacts
      collection.fetch data: quotation_id: optima.pathArray[2]
        .done (response) ->
          view = new optima.views.TrackingCreateView model: new optima.models.Tracking
          view.render(response)

    effective: (e) ->
      e.preventDefault()
      pubsub.trigger('quotation:effective')

    noEffective: (e) ->
      e.preventDefault()
      pubsub.trigger('quotation:noEffective')