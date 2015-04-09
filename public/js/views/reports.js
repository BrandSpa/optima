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
  optima.views.ReportsFilters = (function(_super) {
    __extends(ReportsFilters, _super);

    function ReportsFilters() {
      return ReportsFilters.__super__.constructor.apply(this, arguments);
    }

    ReportsFilters.prototype.el = $("#reports-filters");

    ReportsFilters.prototype.events = {
      'click .btn-primary': 'byType',
      'change .by-month': 'byMonth',
      'change .by-year': 'byYear',
      'change .by-client': 'byClientType'
    };

    ReportsFilters.prototype.initialize = function() {
      return this.filters = {};
    };

    ReportsFilters.prototype.filter = function() {
      return this.model.fetch({
        data: this.filters
      });
    };

    ReportsFilters.prototype.byType = function(e) {
      var el;
      el = $(e.currentTarget).find('input').val();
      this.filters = _.extend(this.filters, {
        type: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byMonth = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        month: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byYear = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        year: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byClientType = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        client_type: el
      });
      return this.filter();
    };

    return ReportsFilters;

  })(Backbone.View);
  optima.views.ReportByStatus = (function(_super) {
    __extends(ReportByStatus, _super);

    function ReportByStatus() {
      return ReportByStatus.__super__.constructor.apply(this, arguments);
    }

    ReportByStatus.prototype.el = $("#byStatus");

    ReportByStatus.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByStatus.prototype.setData = function() {
      var ctx, data, view;
      data = {
        labels: ["Borrador", "Enviada", "Efectiva", "No Efectiva"],
        datasets: [
          {
            label: "My First dataset",
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
      this.$el.html('<canvas id="byStatusCanvas" width="600" height="400"></canvas>');
      ctx = $("#byStatusCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data);
    };

    return ReportByStatus;

  })(Backbone.View);
  optima.views.ReportByFindUs = (function(_super) {
    __extends(ReportByFindUs, _super);

    function ReportByFindUs() {
      return ReportByFindUs.__super__.constructor.apply(this, arguments);
    }

    ReportByFindUs.prototype.el = $("#byFindUs");

    ReportByFindUs.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByFindUs.prototype.setData = function() {
      var ctx, data, view;
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
            data: this.model.toJSON().findUS
          }
        ]
      };
      this.$el.html('<canvas id="byFindUsCanvas" width="600" height="400"></canvas>');
      ctx = $("#byFindUsCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data);
    };

    return ReportByFindUs;

  })(Backbone.View);
  return optima.views.ReportByAdvisor = (function(_super) {
    __extends(ReportByAdvisor, _super);

    function ReportByAdvisor() {
      return ReportByAdvisor.__super__.constructor.apply(this, arguments);
    }

    ReportByAdvisor.prototype.el = $("#byAdvisors");

    ReportByAdvisor.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByAdvisor.prototype.setData = function() {
      var ctx, data, view;
      data = {
        labels: ["Andres Rojas", "Diego Rojas"],
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
      this.$el.html('<canvas id="byAdvisorsCanvas" width="600" height="400"></canvas>');
      ctx = $("#byAdvisorsCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data);
    };

    optima.views.ReportByType = (function(_super1) {
      __extends(ReportByType, _super1);

      function ReportByType() {
        return ReportByType.__super__.constructor.apply(this, arguments);
      }

      ReportByType.prototype.el = $("#byClientType");

      ReportByType.prototype.initialize = function() {
        return this.listenTo(this.model, 'change', this.setData);
      };

      ReportByType.prototype.setData = function() {
        var ctx, data, view;
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
        this.$el.html('<canvas id="byClientTypeCanvas" width="600" height="400"></canvas>');
        ctx = $("#byClientTypeCanvas").get(0).getContext("2d");
        return view = new Chart(ctx).Bar(data);
      };

      return ReportByType;

    })(Backbone.View);

    optima.views.ReportByNoEffective = (function(_super1) {
      __extends(ReportByNoEffective, _super1);

      function ReportByNoEffective() {
        return ReportByNoEffective.__super__.constructor.apply(this, arguments);
      }

      ReportByNoEffective.prototype.el = $("#byNoEffective");

      ReportByNoEffective.prototype.initialize = function() {
        return this.listenTo(this.model, 'change', this.setData);
      };

      ReportByNoEffective.prototype.setData = function() {
        var ctx, data, view;
        console.log(this.model.toJSON().no_effective);
        data = {
          labels: ["No disponible", "No confiable", "Competencia", "Por cliente"],
          datasets: [
            {
              label: "My First dataset",
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
        this.$el.html('<canvas id="byNoEffectiveCanvas" width="600" height="400"></canvas>');
        ctx = $("#byNoEffectiveCanvas").get(0).getContext("2d");
        return view = new Chart(ctx).Bar(data);
      };

      return ReportByNoEffective;

    })(Backbone.View);

    return ReportByAdvisor;

  })(Backbone.View);
});
