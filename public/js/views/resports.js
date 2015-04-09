var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.models.Report = (function(_super) {
    __extends(Report, _super);

    function Report() {
      return Report.__super__.constructor.apply(this, arguments);
    }

    Report.prototype.urlRoot = '/api/v1/reports';

    return Report;

  })(Backbone.Model);
  optima.collections.Resports = (function(_super) {
    __extends(Resports, _super);

    function Resports() {
      return Resports.__super__.constructor.apply(this, arguments);
    }

    Resports.prototype.model = optima.models.Report;

    Resports.prototype.url = '/api/v1/reports';

    return Resports;

  })(Backbone.Collection);
  return optima.views.ReportByStatus = (function(_super) {
    __extends(ReportByStatus, _super);

    function ReportByStatus() {
      return ReportByStatus.__super__.constructor.apply(this, arguments);
    }

    ReportByStatus.prototype.el = $("#byStatus");

    ReportByStatus.prototype.setData = function() {
      return {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
    };

    ReportByStatus.prototype.render = function() {
      var ctx, data;
      data = this.setData()["var"](ctx = this.$el.get(0).getContext("2d"));
      return new Chart(ctx).Line(data, options);
    };

    return ReportByStatus;

  })(Backbone.View);
});
