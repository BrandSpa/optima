$ ->
  class optima.views.QuotationsFilters extends Backbone.View
    events:
      'click .quotation-see-more' : 'seeMore'
      'submit .quotation-search' : 'filterByQuery'
      'change .filter-status': 'filterByStatus'
      'change .filter-advisor': 'filterByAdvisor'
      'change .filter-client-type': 'filterByClientType'
      'change .filter-quotation-type': 'filterByQuotationType'

    initialize: ->
      @filters = {}
      @offset = 0

    render: ->
      template = optima.templates.quotations_list_filters
      $(@el).html(template)
      return @

    filter: (filter) ->
      if filter
        @filters = _.extend(@filters, filter)
        filters = _.extend(@filters, offset: 0)
        pubsub.trigger('quotations:filter', filters)

    filterByQuery: (e) ->
      e.preventDefault()
      query = $('.quotation-query').val()
      @filter(query: query)

    filterByStatus: (e) ->
      el = $(e.currentTarget)
      @filter(status: el.val())

    filterByAdvisor: (e) ->
      el = $(e.currentTarget)
      @filter(advisor: el.val())

    filterByClientType: (e) ->
      el = $(e.currentTarget)
      @filter(client_type: el.val())

    filterByQuotationType: (e) ->
      el = $(e.currentTarget)
      @filter(quotation_type: el.val())
