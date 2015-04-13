$ ->
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