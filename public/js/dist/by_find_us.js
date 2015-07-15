var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByFindUs = (function(superClass) {
    extend(ReportByFindUs, superClass);

    function ReportByFindUs() {
      return ReportByFindUs.__super__.constructor.apply(this, arguments);
    }

    ReportByFindUs.prototype.el = "#byFindUs";

    ReportByFindUs.prototype.events = {
      'change .by-status': 'byStatus'
    };

    ReportByFindUs.prototype.initialize = function() {
      this.listenTo(this.model, 'change', this.setData);
      return this.labels = ["Asesores Comerciales", "Cliente", "Página Web Avante", "Google Adwords", "Referido", "Promoción", "Paginas Amarillas", "Paginas Amarillas Web", "Teléfono", "Redes Sociales"];
    };

    ReportByFindUs.prototype.byStatus = function(e) {
      var el;
      el = $(e.currentTarget).val();
      return pubsub.trigger('reports:filter', el);
    };

    ReportByFindUs.prototype.setData = function() {
      var data;
      data = {
        labels: this.labels,
        datasets: [
          {
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().findUS
          }
        ]
      };
      return this.render(data);
    };

    ReportByFindUs.prototype.mapCount = function(key) {
      return _.object(this.labels, this.model.toJSON().findUSCount)[key];
    };

    ReportByFindUs.prototype.render = function(data) {
      var _this, ctx, options, view;
      _this = this;
      $("#byFindUs").find('.panel-body').empty().append('<canvas id="byFindUsCanvas" width="600" height="400"></canvas>');
      ctx = $("#byFindUsCanvas").get(0).getContext("2d");
      options = {
        responsive: true,
        barShowStroke: false,
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

    return ReportByFindUs;

  })(Backbone.View);
});
