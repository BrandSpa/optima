$ ->
  class optima.views.ReportByAdvisor extends Backbone.View
    el: $ "#byAdvisors"

    initialize: ->
      @listenTo(@model, 'change', @setData)

    setData: ->
      data = labels: [
        "Andrés Rojas",
        "Diego Peña"
      ],
      
      datasets: [
          label: "My First dataset",
          fillColor: "rgba(231, 161, 31, .7)",
          strokeColor: "rgba(231, 161, 31,1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().advisors
        ]

      @$el.html('<canvas id="byAdvisorsCanvas" width="600" height="400"></canvas>')
      ctx = $("#byAdvisorsCanvas").get(0).getContext("2d")
      view = new Chart(ctx).Bar(data, {responsive: true})
