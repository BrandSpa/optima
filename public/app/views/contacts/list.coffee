$ ->
  class optima.views.ContactsView extends Backbone.View
    el: $ '#contacts'
    events:
      'click .contact-see-more' : 'seeMore'
      'submit .contact-search' : 'search'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne, @)

    addOne: (model) ->
      view = new optima.views.ContactView model: model
      $(@el).find('table .thead').after view.render().el

    render: ->
      @collection.each (model) ->
        view = new optima.views.ContactView model: model
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

    search: (e) ->
      e.preventDefault()
      query = $('.contact-query').val()
      @collection.fetch data: query: query