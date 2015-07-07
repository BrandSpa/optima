$ ->
  class optima.views.ReportsFilters extends Backbone.View
    el: $ "#reports-filters"

    events:
      'click .btn-primary': 'byType'
      'change .by-client': 'byClientType'
      'changeDate .datepicker_start': 'byDateStart'
      'changeDate .datepicker_end': 'byDateEnd'
      'change .by-status': 'byStatus'

    initialize: ->
      pubsub.on('reports:filter', @byStatus, @)
      now = new Date()
      month = (now.getMonth()+1)

      if month < 10
        month = ("0" + month)

      year = now.getFullYear()

      date_start = year + "-" + month + "-01"

      date_end = year + "-" + month + "-31"

      @filters = {date_start: date_start, date_end: date_end}

      $(@el).find('.datepicker_start').datepicker
        format: "yyyy-mm-dd",
        language: "es"

      $(@el).find('.datepicker_end').datepicker
        format: "yyyy-mm-dd",
        language: "es"

    filter: ->
      @model.fetch data: @filters

    byDateStart: (e) ->
      el = $(e.currentTarget).val()
      @filters = _.extend @filters, date_start: el
      @filter()

    byDateEnd: (e) ->
      el = $(e.currentTarget).val()
      @filters = _.extend @filters, date_end: el
      @filter()

    byType: (e) ->
      el = $(e.currentTarget).find('input').val()
      @filters = _.extend @filters, type: el
      @filter()

    byMonth: (e) ->
      el = $(e.currentTarget).val()
      @filters = _.extend @filters, month: el
      @filter()

    byYear: (e) ->
      el = $(e.currentTarget).val()
      @filters = _.extend @filters, year: el
      @filter()

    byYearEnd: (e) ->
      el = $(e.currentTarget).val()
      @filters = _.extend @filters, year_end: el
      @filter()

    byMonthEnd: (e) ->
      el = $(e.currentTarget).val()
      @filters = _.extend @filters, month_end: el
      @filter()

    byClientType: (e) ->
      el = $(e.currentTarget).val()
      @filters = _.extend @filters, client_type: el
      @filter()

    byStatus: (el) ->
      @filters = _.extend @filters, status: el
      @filter()
