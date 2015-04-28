$ ->
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