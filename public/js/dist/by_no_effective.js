var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByNoEffective = (function(superClass) {
    extend(ReportByNoEffective, superClass);

    function ReportByNoEffective() {
      return ReportByNoEffective.__super__.constructor.apply(this, arguments);
    }

    ReportByNoEffective.prototype.initialize = function() {
      this.listenTo(this.model, 'change', this.setData);
      return this.labels = ["No disponible", "No confiable", "Competencia", "Por cliente", "Sin status"];
    };

    ReportByNoEffective.prototype.setData = function() {
      var data;
      data = {
        labels: this.labels,
        datasets: [
          {
            fillColor: "rgba(246, 97, 87, 1)",
            strokeColor: "rgba(246, 97, 87, 1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().no_effective
          }
        ]
      };
      return this.render(data);
    };

    ReportByNoEffective.prototype.mapCount = function(key) {
      return _.object(this.labels, this.model.toJSON().no_effective_count)[key];
    };

    ReportByNoEffective.prototype.render = function(data) {
      var _this, ctx, options, view;
      _this = this;
      $('#byNoEffective').empty().append('<canvas id="byNoEffectiveCanvas" width="600" height="400"></canvas>');
      ctx = $("#byNoEffectiveCanvas").get(0).getContext("2d");
      options = {
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: function(label) {
          return accounting.formatMoney(parseInt(label.value.toString()));
        },
        tooltipTemplate: function(label) {
          return "Cantidad: " + _this.mapCount(label.label) + ' | Dinero' + ': ' + accounting.formatMoney(parseInt(label.value.toString()));
        }
      };
      return view = new Chart(ctx).Bar(data, options);
    };

    return ReportByNoEffective;

  })(Backbone.View);
});
