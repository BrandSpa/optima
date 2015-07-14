$ ->
  class optima.views.ReportByFindUs extends Backbone.View
    el: "#byFindUs"
    events:
      'change .by-status': 'byStatus'

    initialize: ->
      @listenTo(@model, 'change', @setData)
      @labels = [
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
      ]

    byStatus: (e) ->
      el = $(e.currentTarget).val()
      pubsub.trigger('reports:filter', el)

    setData: ->
      data = {
        @labels
        datasets: [
          fillColor: "rgba(231, 161, 31, .7)",
          strokeColor: "rgba(231, 161, 31,1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().findUS
        ]
      }

      @render(data)

    mapCount: (key) ->
      return _.object(@labels, @model.toJSON().findUSCount)[key]

    render: (data) ->
      _this = @

      $("#byFindUs")
      .find('.panel-body')
      .empty()
      .append('<canvas id="byFindUsCanvas" width="600" height="400"></canvas>')

      ctx = $("#byFindUsCanvas").get(0).getContext("2d")

      options =
        responsive: true,
        barShowStroke: false,
        tooltipCornerRadius: 0,
        scaleLabel: (label) ->
          return accounting.formatMoney(parseInt(label.value.toString()))
        tooltipTemplate: (label) ->
          return "Cantidad: " + _this.mapCount(label.label) + ' | Dinero' + ': ' + accounting.formatMoney(parseInt(label.value.toString()))

      view = new Chart(ctx).Bar(data, options)