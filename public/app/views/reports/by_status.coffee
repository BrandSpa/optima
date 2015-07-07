$ ->
  class optima.views.ReportByStatus extends Backbone.View
    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
      data = labels: ["Borrador", "Enviada", "Entregada", "Seguimiento", "Efectiva", "No Efectiva", "No enviada", "Replanteada"],

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
      @render(data)

    render: (data) ->
      $("#byStatus")
      .empty()
      .append('<canvas id="byStatusCanvas" width="600" height="400"></canvas>')

      ctx = $("#byStatusCanvas").get(0).getContext("2d")

      options =
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: (label) ->
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        tooltipTemplate: (label) ->
          return label.label + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

      view = new Chart(ctx).Bar data, options
