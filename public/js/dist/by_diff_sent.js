var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByDiffSent = (function(superClass) {
    extend(ReportByDiffSent, superClass);

    function ReportByDiffSent() {
      return ReportByDiffSent.__super__.constructor.apply(this, arguments);
    }

    ReportByDiffSent.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByDiffSent.prototype.setData = function() {
      var data;
      data = {
        labels: ["Dentro - Inventario", "Fuera - Inventario", "Dentro - Pedido", "Fuera - Pedido"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().sent_diff
          }
        ]
      };
      return this.render(data);
    };

    ReportByDiffSent.prototype.render = function(data) {
      var ctx, view;
      $("#byDiffSent").empty().append('<canvas id="byDiffSentCanvas" width="600" height="400"></canvas>');
      ctx = $("#byDiffSentCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data, {
        responsive: true
      });
    };

    return ReportByDiffSent;

  })(Backbone.View);
});
