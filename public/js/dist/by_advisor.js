var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByAdvisor = (function(superClass) {
    extend(ReportByAdvisor, superClass);

    function ReportByAdvisor() {
      return ReportByAdvisor.__super__.constructor.apply(this, arguments);
    }

    ReportByAdvisor.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByAdvisor.prototype.setData = function() {
      var data;
      data = {
        labels: ["Andrés Rojas", "Diego Peña"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().advisors
          }
        ]
      };
      return this.render(data);
    };

    ReportByAdvisor.prototype.render = function(data) {
      var ctx, view;
      $("#byAdvisors").empty().append('<canvas id="byAdvisorsCanvas" width="600" height="400"></canvas>');
      ctx = $("#byAdvisorsCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data, {
        responsive: true
      });
    };

    return ReportByAdvisor;

  })(Backbone.View);
});
