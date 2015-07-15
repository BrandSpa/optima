var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByFindUsCount = (function(superClass) {
    extend(ReportByFindUsCount, superClass);

    function ReportByFindUsCount() {
      return ReportByFindUsCount.__super__.constructor.apply(this, arguments);
    }

    ReportByFindUsCount.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByFindUsCount.prototype.setData = function() {
      var ctx, data, options, view;
      data = {
        labels: ["Asesores Comerciales", "Cliente", "Página Web Avante", "Google Adwords", "Referido", "Promoción", "Paginas Amarillas", "Paginas Amarillas Web", "Teléfono", "Redes Sociales"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().findUSCount
          }
        ]
      };
      $("#byFindUsCount").find('.panel-body').empty().append('<canvas id="byFindUsCountCanvas" width="600" height="400"></canvas>');
      ctx = $("#byFindUsCountCanvas").get(0).getContext("2d");
      options = {
        responsive: true,
        tooltipCornerRadius: 0
      };
      return view = new Chart(ctx).Bar(data, options);
    };

    return ReportByFindUsCount;

  })(Backbone.View);
});
