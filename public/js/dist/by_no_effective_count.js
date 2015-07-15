var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByNoEffectiveCount = (function(superClass) {
    extend(ReportByNoEffectiveCount, superClass);

    function ReportByNoEffectiveCount() {
      return ReportByNoEffectiveCount.__super__.constructor.apply(this, arguments);
    }

    ReportByNoEffectiveCount.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByNoEffectiveCount.prototype.setData = function() {
      var data;
      data = {
        labels: ["No disponible", "No confiable", "Competencia", "Por cliente", "Sin status"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(246, 97, 87, 1)",
            strokeColor: "rgba(246, 97, 87, 1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().no_effective_count
          }
        ]
      };
      return this.render(data);
    };

    ReportByNoEffectiveCount.prototype.render = function(data) {
      var ctx, options, view;
      $("#byNoEffectiveCount").empty().append('<canvas id="byNoEffectiveCanvasCount" width="600" height="400"></canvas>');
      ctx = $("#byNoEffectiveCanvasCount").get(0).getContext("2d");
      options = {
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: function(label) {
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        },
        tooltipTemplate: function(label) {
          return label.label + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
      };
      return view = new Chart(ctx).Bar(data, options);
    };

    return ReportByNoEffectiveCount;

  })(Backbone.View);
});
