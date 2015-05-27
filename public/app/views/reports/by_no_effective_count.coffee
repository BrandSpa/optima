$ ->
  class optima.views.ReportByNoEffectiveCount extends Backbone.View
    el: $ "#byNoEffectiveCount"

    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
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
        data: @model.toJSON().no_effective_count
      ]

      @$el.html('<canvas id="byNoEffectiveCanvasCount" width="600" height="400"></canvas>')
      ctx = $("#byNoEffectiveCanvasCount").get(0).getContext("2d")
      options = 
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: (label) ->
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        tooltipTemplate: (label) ->
          return label.label + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

      view = new Chart(ctx).Bar(data, options)