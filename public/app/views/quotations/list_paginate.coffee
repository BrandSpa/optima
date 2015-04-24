$ ->
  class optima.views.QuotationsPaginate extends Backbone.View
    events:
      'click' : 'seeMore'

    initialize: ->
      @offset = 0

    render: ->
      template = optima.templates.quotation_paginate_btn
      $(@el).html(template)
      return @

    seeMore: (e) ->
      that = @
      e.preventDefault()
      el = e.currentTarget
      more = (@offset + 10)
      pubsub.trigger('quotations:paginate', offset: more)
      @offset = more