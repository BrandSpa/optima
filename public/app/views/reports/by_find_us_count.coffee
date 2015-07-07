$ ->
  class optima.views.ReportByFindUsCount extends Backbone.View
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
        data: @model.toJSON().findUSCount
      ]

      $("#byFindUsCount").find('.panel-body')
      .empty()
      .append('<canvas id="byFindUsCountCanvas" width="600" height="400"></canvas>')
      ctx = $("#byFindUsCountCanvas").get(0).getContext("2d")

      options =
        responsive: true,
        tooltipCornerRadius: 0

      view = new Chart(ctx).Bar(data, options)