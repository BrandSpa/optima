$ ->
  class optima.models.Activity extends Backbone.Model
    urlRoot: '/api/v1/activities'

  class optima.collections.Activities extends Backbone.Collection
    url: '/api/v1/activities'
    model: optima.models.Activity

  class optima.views.ActivityView extends Backbone.View
    tagName: 'tr'

    initialize: ->
      @render()
      @listenTo(@model, 'change', @render)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      template = optima.templates.activity
      $(@el).html template( @model.toJSON() )
      @

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
      console.log "pull quo"
      @collection.fetch()

    addOne: (model) ->
      view = new optima.views.ActivityView model: model
      $(@el).find('table').prepend view.render().el
      $(@el).find('span.timeago').timeago()

    render: ->
      table = $(@el).find('table')
      table.empty()
      @collection.each (model) ->
        view = new optima.views.ActivityView model: model
        table.append view.render().el
        $(@el).find('span.timeago').timeago()
        $(@el).find('.table-responsive').slimScroll
          height: '475px'
      , @

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
  
  class optima.views.QuotationActivityView extends Backbone.View
    tagName: 'tr'

    render: ->
      template = optima.templates.activity_quotation
      $(@el).html template( @model.toJSON() )
      $(@el).find('span.timeago').timeago()
      @

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

    store: ->