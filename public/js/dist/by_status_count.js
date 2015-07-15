var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByStatusCount = (function(superClass) {
    extend(ReportByStatusCount, superClass);

    function ReportByStatusCount() {
      return ReportByStatusCount.__super__.constructor.apply(this, arguments);
    }

    ReportByStatusCount.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByStatusCount.prototype.setData = function() {
      var data;
      data = {
        labels: ["Borrador", "Enviada", "Entregada", "Seguimiento", "Efectiva", "No Efectiva", "No enviada", "Replanteada"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().statusCount
          }
        ]
      };
      return this.render(data);
    };

    ReportByStatusCount.prototype.render = function(data) {
      var ctx, view;
      $("#byStatusCount").empty().append('<canvas id="byStatusCountCanvas" width="600" height="400"></canvas>');
      ctx = $("#byStatusCountCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data, {
        responsive: true
      });
    };

    return ReportByStatusCount;

  })(Backbone.View);
});
