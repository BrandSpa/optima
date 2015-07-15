var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByType = (function(superClass) {
    extend(ReportByType, superClass);

    function ReportByType() {
      return ReportByType.__super__.constructor.apply(this, arguments);
    }

    ReportByType.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByType.prototype.setData = function() {
      var data;
      data = {
        labels: ["Activo", "Inactivo", "Nuevo"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().client_type
          }
        ]
      };
      return this.render(data);
    };

    ReportByType.prototype.render = function(data) {
      var ctx, view;
      $("#byClientType").empty().append('<canvas id="byClientTypeCanvas" width="600" height="400"></canvas>');
      ctx = $("#byClientTypeCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data, {
        responsive: true
      });
    };

    return ReportByType;

  })(Backbone.View);
});
