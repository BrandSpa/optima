var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByStatus = (function(superClass) {
    extend(ReportByStatus, superClass);

    function ReportByStatus() {
      return ReportByStatus.__super__.constructor.apply(this, arguments);
    }

    ReportByStatus.prototype.initialize = function() {
      this.listenTo(this.model, 'change', this.setData);
      return this.labels = ["Borrador", "Enviada", "Entregada", "Seguimiento", "Efectiva", "No Efectiva", "No enviada", "Replanteada"];
    };

    ReportByStatus.prototype.setData = function() {
      var data;
      data = {
        labels: this.labels,
        datasets: [
          {
            label: "Etiquetas",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().status
          }
        ]
      };
      return this.render(data);
    };

    ReportByStatus.prototype.mapCount = function(key) {
      return _.object(this.labels, this.model.toJSON().statusCount)[key];
    };

    ReportByStatus.prototype.render = function(data, count) {
      var _this, ctx, options, view;
      $("#byStatus").empty().append('<canvas id="byStatusCanvas" width="600" height="400"></canvas>');
      ctx = $("#byStatusCanvas").get(0).getContext("2d");
      _this = this;
      options = {
        barShowStroke: false,
        responsive: true,
        tooltipCornerRadius: 0,
        showTooltip: true,
        scaleLabel: function(label) {
          return accounting.formatMoney(parseInt(label.value.toString()));
        },
        tooltipTemplate: function(label) {
          return "Cantidad: " + _this.mapCount(label.label) + ' | Dinero' + ': ' + accounting.formatMoney(parseInt(label.value.toString()));
        }
      };
      return view = new Chart(ctx).Bar(data, options);
    };

    return ReportByStatus;

  })(Backbone.View);
});
