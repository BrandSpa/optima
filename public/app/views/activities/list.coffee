$ ->
  class optima.views.ActivitiesView extends Backbone.View
    events:
      'click .service-see-more' : 'seeMore'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne, @)
      pubsub.on("activity:store", @store, @)
      pubsub.on("activity:pull", @pull, @)

    pull: (quotation_id)->
      @collection.fetch()

    addOne: (model) ->
      view = new optima.views.ActivityView model: model
      $('.activities table').prepend view.render().el
      $('.activities span.timeago').timeago()

    addPlugins: () ->
      $('.activities span.timeago').timeago()
      $('.activities .table-responsive').slimScroll
        height: '475px'

    render: ->
      html = []
      @collection.each (model) ->
        view = new optima.views.ActivityView model: model
        html.push(view.render().el)
      , @

      $('.activities table').html(html)
      @addPlugins()
      
    store: (data) ->
      @collection.create data
      quotation_id = data['quotation_id']
      socket.emit('activities', quotation_id)