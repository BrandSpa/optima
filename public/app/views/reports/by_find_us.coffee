$ ->
  class optima.views.ReportByFindUs extends Backbone.View
    el: $ "#byFindUs"

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

      @$el.html('<canvas id="byFindUsCanvas" width="600" height="400"></canvas>')
      ctx = $("#byFindUsCanvas").get(0).getContext("2d")
      view = new Chart(ctx).Bar(data, {responsive: true})