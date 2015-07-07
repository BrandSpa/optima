$ ->
  class optima.views.ReportByStatus extends Backbone.View
    initialize: ->
      @listenTo(@model, 'change', @setData)
      @labels = [
        "Borrador",
        "Enviada",
        "Entregada",
        "Seguimiento",
        "Efectiva",
        "No Efectiva",
        "No enviada",
        "Replanteada"
      ]

    setData: ->
      data = {
        @labels
        datasets: [
          label: "Etiquetas",
          fillColor: "rgba(231, 161, 31, .7)",
          strokeColor: "rgba(231, 161, 31,1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().status
        ]
      }
      @render(data)

    mapCount: (key) ->
      return _.object(@labels, @model.toJSON().statusCount)[key]

    render: (data, count) ->
      $("#byStatus")
      .empty()
      .append('<canvas id="byStatusCanvas" width="600" height="400"></canvas>')

      ctx = $("#byStatusCanvas").get(0).getContext("2d")
      _this = @

      options =
        barShowStroke: false
        responsive: true,
        tooltipCornerRadius: 0,
        showTooltip: true,
        scaleLabel: (label) ->
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        tooltipTemplate: (label) ->
          return "Cantidad: " + _this.mapCount(label.label) + ' | Dinero' + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

      view = new Chart(ctx).Bar data, options
