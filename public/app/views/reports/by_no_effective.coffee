$ ->
  class optima.views.ReportByNoEffective extends Backbone.View
    initialize: ->
      @listenTo(@model, 'change', @setData)
      @labels = [
        "No disponible",
        "No confiable",
        "Competencia",
        "Por cliente",
        "Sin status"
      ]
    setData: ->
      data = {
        @labels
        datasets: [
          fillColor: "rgba(246, 97, 87, 1)",
          strokeColor: "rgba(246, 97, 87, 1)",
          pointColor: "#fff",
          pointStrokeColor: "rgba(231, 161, 31,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: @model.toJSON().no_effective
        ]
      }

      @render(data)

    mapCount: (key) ->
      return _.object(@labels, @model.toJSON().no_effective_count)[key]

    render: (data) ->
      _this = @
      $('#byNoEffective')
      .empty()
      .append('<canvas id="byNoEffectiveCanvas" width="600" height="400"></canvas>')
      ctx = $("#byNoEffectiveCanvas").get(0).getContext("2d")
      options =
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: (label) ->
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        tooltipTemplate: (label) ->
          return "Cantidad: " + _this.mapCount(label.label) + ' | Dinero' + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

      view = new Chart(ctx).Bar(data, options)