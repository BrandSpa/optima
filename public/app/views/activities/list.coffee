$ ->
  class optima.views.ActivitiesView extends Backbone.View
    el: $ '#activities'
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
      $(@el).find('table').prepend view.render().el
      $(@el).find('span.timeago').timeago()

    addPlugins: () ->
      $(@el).find('span.timeago').timeago()
      $(@el).find('.table-responsive').slimScroll
        height: '475px'

    render: ->
      $table = $(@el).find('table')
      html = []

      @collection.each (model) ->
        view = new optima.views.ActivityView model: model
        html.push(view.render().el)
      , @

      $table.empty().append(html)
      @addPlugins()
      
    seeMore: (e) ->
      e.preventDefault()
      el = e.currentTarget
      offset = $(el).data('offset')
      more = (offset + 10)
      @collection.fetch data: offset: more
      $(el).data('offset', more)

    store: (data) ->
      @collection.create data
      quotation_id = data['quotation_id']
      socket.emit('activities', quotation_id)