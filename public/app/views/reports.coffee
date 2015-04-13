$ ->
  class optima.views.ReportsFilters extends Backbone.View
    el: $ "#reports-filters"

    events:
      'click .btn-primary': 'byType'
      'change .by-client': 'byClientType'
      'changeDate .datepicker_start': 'byDateStart'
      'changeDate .datepicker_end': 'byDateEnd'

    initialize: ->
      @filters = {}
      $(@el).find('.datepicker_start').datepicker
        format: "yyyy-mm",
        language: "es"

      $(@el).find('.datepicker_end').datepicker
        format: "yyyy-mm",
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

  class optima.views.ReportByStatus extends Backbone.View
    el: $ "#byStatus"

    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
      data = labels: ["Borrador", "Enviada", "Efectiva", "No Efectiva"],
      datasets: [

          label: "My First dataset",
          fillColor: "rgba(231, 161, 31, .7)",
          strokeColor: "rgba(231, 161, 31,1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().status
        ]

      @$el.html('<canvas id="byStatusCanvas" width="600" height="400"></canvas>')
      ctx = $("#byStatusCanvas").get(0).getContext("2d")
      view = new Chart(ctx).Bar data, responsive: true
  

  class optima.views.ReportByFindUs extends Backbone.View
    el: $ "#byFindUs"

    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
      data = labels: [
        "Asesores Comerciales", 
        "Cliente", 
        "Página Web Avante", 
        "Google Adwords", 
        "Referido", 
        "Promoción", 
        "Paginas Amarillas", 
        "Paginas Amarillas Web",
        "Teléfono",
        "Redes Sociales"
      ],
      datasets: [
          label: "My First dataset",
          fillColor: "rgba(231, 161, 31, .7)",
          strokeColor: "rgba(231, 161, 31,1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().findUS
        ]

      @$el.html('<canvas id="byFindUsCanvas" width="600" height="400"></canvas>')
      ctx = $("#byFindUsCanvas").get(0).getContext("2d")
      view = new Chart(ctx).Bar(data, {responsive: true})


  class optima.views.ReportByAdvisor extends Backbone.View
    el: $ "#byAdvisors"

    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
      data = labels: [
        "Andres Rojas", 
        "Diego Rojas"
      ],
      datasets: [
          label: "My First dataset",
          fillColor: "rgba(231, 161, 31, .7)",
          strokeColor: "rgba(231, 161, 31,1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().advisors
        ]

      @$el.html('<canvas id="byAdvisorsCanvas" width="600" height="400"></canvas>')
      ctx = $("#byAdvisorsCanvas").get(0).getContext("2d")
      view = new Chart(ctx).Bar(data, {responsive: true})
      
  class optima.views.ReportByType extends Backbone.View
    el: $ "#byClientType"

    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
      data = labels: [
        "Activo", 
        "Inactivo",
        "Nuevo"
      ],
      datasets: [
          label: "My First dataset",
          fillColor: "rgba(231, 161, 31, .7)",
          strokeColor: "rgba(231, 161, 31,1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().client_type
        ]

      @$el.html('<canvas id="byClientTypeCanvas" width="600" height="400"></canvas>')
      ctx = $("#byClientTypeCanvas").get(0).getContext("2d")
      view = new Chart(ctx).Bar(data, {responsive: true})


  class optima.views.ReportByNoEffective extends Backbone.View
    el: $ "#byNoEffective"

    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
      console.log @model.toJSON().no_effective
      data = labels: [
        "No disponible", 
        "No confiable",
        "Competencia",
        "Por cliente"
      ],
      datasets: [
          label: "My First dataset",
          fillColor: "rgba(246, 97, 87, 1)",
          strokeColor: "rgba(246, 97, 87, 1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().no_effective
        ]

      @$el.html('<canvas id="byNoEffectiveCanvas" width="600" height="400"></canvas>')
      ctx = $("#byNoEffectiveCanvas").get(0).getContext("2d")
      view = new Chart(ctx).Bar(data, {responsive: true})

  class optima.views.ReportByDiffSent extends Backbone.View
    el: $ "#byDiffSent"

    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
      console.log @model.toJSON().sent_diff
      data = labels: [
        "Dentro - Inventario", 
        "Fuera - Inventario",
        "Dentro - Pedido",
        "Fuera - Pedido"
      ],
      datasets: [
          label: "My First dataset",
          fillColor: "rgba(231, 161, 31, .7)",
          strokeColor: "rgba(231, 161, 31,1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().sent_diff
        ]

      @$el.html('<canvas id="byDiffSentCanvas" width="600" height="400"></canvas>')
      ctx = $("#byDiffSentCanvas").get(0).getContext("2d")
      view = new Chart(ctx).Bar(data, {responsive: true})
