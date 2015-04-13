$ ->
  class optima.views.QuotationActivitiesView extends Backbone.View
    el: $ '#quotation-activities'
    
    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @add)
      pubsub.on("quotation-activity:pull", @pull, @)
      @quotation_id = optima.pathArray[2]

    pull: (quotation_id) ->
      @collection.fetch data: quotation_id: @quotation_id

    add: (model) ->
      view = new optima.views.QuotationActivityView model: model
      $(@el).find('table').prepend view.render().el

    renderOne: (model) ->
      view = new optima.views.QuotationActivityView model: model
      $(@el).find('table').append view.render().el

    render: ->
      $(@el).find('table').empty()
      $(@el).find('.table-responsive').slimScroll
        height: '200px'

      @collection.each (model) ->
        @renderOne(model)
      , @