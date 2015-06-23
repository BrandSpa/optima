$ ->
  class optima.views.ReportByStatusCount extends Backbone.View
    el: $ "#byStatusCount"

    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
      data = labels: ["Borrador", "Enviada", "Seguimiento", "Efectiva", "No Efectiva", "No enviada"],

      datasets: [
        label: "My First dataset",
        fillColor: "rgba(231, 161, 31, .7)",
        strokeColor: "rgba(231, 161, 31,1)",
        pointColor: "#fff",
        pointStrokeColor: "rgba(231, 161, 31,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: @model.toJSON().statusCount
      ]

      @$el.html('<canvas id="byStatusCountCanvas" width="600" height="400"></canvas>')
      ctx = $("#byStatusCountCanvas").get(0).getContext("2d")
      view = new Chart(ctx).Bar data, responsive: true
