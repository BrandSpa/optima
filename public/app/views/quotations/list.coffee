$ ->
  class optima.views.QuotationsView extends Backbone.View
    el: $ '#quotations'
      
    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @renderOne)
      pubsub.on('quotations:filter', @filter, @)
      pubsub.on('quotations:paginate', @paginate, @)
      pubsub.on("quotation:added", @addOne, @);

    addPlugins: ->
      $('.contact-popover').popover html: true, trigger: 'hover', placement: 'left'
      $('.company-popover').popover html: true, trigger: 'hover'
      $('.timeago-popover').popover html: true, trigger: 'hover', placement: 'left'
      $(@el).find('span.timeago').timeago()

    addOne: (model) ->
      console.log('addOne', model);
      view = new optima.views.QuotationView model: model
      @$el.find('tbody').prepend view.render().el
      @addPlugins()

    renderOne: (model)->
      view = new optima.views.QuotationView model: model
      @$el.find('tbody').append view.render().el
      @addPlugins()

    render: (collection) ->
      html = []

      @collection.each (model) ->
        view = new optima.views.QuotationView model: model
        html.push view.render().el
      , @
      @$el.find('tbody').html html
      @$el.find('.table-responsive').slimScroll({height: '305px'})
      @addPlugins()

    filter: (filters)->
      @collection.fetch reset: true, data: filters

    paginate: (filters)->
      @collection.fetch data: filters
      @scrollToBottom()

    scrollToBottom: ->
      container =  @$el.find('.table-responsive')
      h = container.prop('scrollHeight') + 'px'
      container.slimScroll scrollTo : h
