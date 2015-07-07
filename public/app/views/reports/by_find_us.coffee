$ ->
  class optima.views.ReportByFindUs extends Backbone.View

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

      @render(data)

    render: (data) ->
      $("#byFindUs")
      .empty()
      .append('<canvas id="byFindUsCanvas" width="600" height="400"></canvas>')

      ctx = $("#byFindUsCanvas").get(0).getContext("2d")

      options =
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: (label) ->
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
          tooltipTemplate: (label) ->
            return label.label + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

      view = new Chart(ctx).Bar(data, options)