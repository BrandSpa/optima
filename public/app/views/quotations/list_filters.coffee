$ ->
  class optima.views.QuotationsFilters extends Backbone.View
    el: $ '.quotations-filters'

    events:
      'click .quotation-open-quote': 'openQuote'
      'click .quotation-see-more' : 'seeMore'
      'submit .quotation-search' : 'filterByQuery'
      'change .filter-status': 'filterByStatus'
      'change .filter-advisor': 'filterByAdvisor'
      'change .filter-client-type': 'filterByClientType'
      
    initialize: ->
      @filters = {offset: 0}
      @offset = 0

    seeMore: (e) ->
      that = @
      e.preventDefault()
      el = e.currentTarget
      more = (@offset + 10)
      filters = _.extend(@filters, offset: more)
      pubsub.trigger('quotations:paginate', filters)
      @offset = more

    openQuote: (e) ->
      e.preventDefault()
      model = new optima.models.Company
      optima.companyQuoteCreate = new optima.views.CompanyQuoteCreate model: model
      optima.companyQuoteCreate.render()

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