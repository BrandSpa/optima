$ ->
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