$ ->
  class optima.views.QuotationsView extends Backbone.View

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @renderOne)
      pubsub.on('quotations:filter', @filter, @)
      pubsub.on('quotations:paginate', @paginate, @)
      pubsub.on("quotation:added", @addOne, @);
      @filters = {}

    addPlugins: ->
      $('.contact-popover').popover html: true, trigger: 'hover', placement: 'left'
      $('.company-popover').popover html: true, trigger: 'hover'
      $('.timeago-popover').popover html: true, trigger: 'hover', placement: 'left'
      $('.quotations').find('span.timeago').timeago()

    addOne: (model) ->
      view = new optima.views.QuotationView model: model
      $('.quotations tbody').prepend view.render().el
      @addPlugins()

    renderOne: (model)->
      view = new optima.views.QuotationView model: model
      $('.quotations tbody').append view.render().el
      @addPlugins()

    render: (collection) ->
      html = []

      @collection.each (model) ->
        view = new optima.views.QuotationView model: model
        html.push(view.render().el)
      , @

      $('.quotations tbody').html(html)
      $('.quotations .table-responsive').slimScroll({height: '305px'})
      @addPlugins()

    filter: (filters)->
      @filters = filters
      @collection.fetch reset: true, data: filters
      console.log(@filters)

    paginate: (filters)->
      console.log(@filters)
      filters = _.extend(@filters, filters)
      @collection.fetch data: filters
      @scrollToBottom()

    scrollToBottom: ->
      container = $('.quotations .table-responsive')
      h = container.prop('scrollHeight') + 'px'
      container.slimScroll scrollTo : h
