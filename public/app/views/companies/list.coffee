$ ->
  class optima.views.CompaniesView extends Backbone.View
    el: $ '#companies'
    events:
      'click .company-see-more' : 'seeMore'
      'submit .company-search' : 'search'
      'click .company-open-create': 'openCreate'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne, @)

    addOne: (model) ->
      companyView = new optima.views.CompanyView model: model
      $(@el).find('table .thead').after companyView.render().el

    render: ->
      @collection.each (model) ->
        companyView = new optima.views.CompanyView model: model
        $(@el).find('table').append companyView.render().el
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
      query = $('.company-query').val()
      @collection.fetch data: query: query

    openCreate: (e) ->
      e.preventDefault()
      view = new optima.views.CompanyCreate model: new optima.models.Company
      view.render()