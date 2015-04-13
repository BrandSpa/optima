$ ->
  class optima.views.ServicesView extends Backbone.View
    el: $ '#services'
    events:
      'click .service-see-more' : 'seeMore'
      'click .service-open-create': 'openCreate'
      'submit .service-search' : 'search'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne, @)

    addOne: (model) ->
      view = new optima.views.ServiceView model: model
      $(@el).find('table .thead').after view.render().el

    render: ->
      @collection.each (model) ->
        view = new optima.views.ServiceView model: model
        $(@el).find('table').append view.render().el
        $(@el).find('.table-responsive').slimScroll
            height: '400px'
      , @

    seeMore: (e) ->
      e.preventDefault()
      el = e.currentTarget
      offset = $(el).data('offset')
      more = (offset + 10)
      @collection.fetch data: offset: more
      $(el).data('offset', more)
      
    openCreate: (e) ->
      e.preventDefault()
      view = new optima.views.ServiceCreate model: new optima.models.Service
      view.render()
      
    search: (e) ->
      e.preventDefault()
      query = $('.service-query').val()
      @collection.fetch data: query: query