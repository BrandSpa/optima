var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportsFilters = (function(superClass) {
    extend(ReportsFilters, superClass);

    function ReportsFilters() {
      return ReportsFilters.__super__.constructor.apply(this, arguments);
    }

    ReportsFilters.prototype.el = $("#reports-filters");

    ReportsFilters.prototype.events = {
      'click .btn-primary': 'byType',
      'change .by-client': 'byClientType',
      'changeDate .datepicker_start': 'byDateStart',
      'changeDate .datepicker_end': 'byDateEnd',
      'change .by-status': 'byStatus'
    };

    ReportsFilters.prototype.initialize = function() {
      var date_end, date_start, month, now, year;
      pubsub.on('reports:filter', this.byStatus, this);
      now = new Date();
      month = now.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      year = now.getFullYear();
      date_start = year + "-" + month + "-01";
      date_end = year + "-" + month + "-31";
      this.filters = {
        date_start: date_start,
        date_end: date_end
      };
      $(this.el).find('.datepicker_start').datepicker({
        format: "yyyy-mm-dd",
        language: "es"
      });
      return $(this.el).find('.datepicker_end').datepicker({
        format: "yyyy-mm-dd",
        language: "es"
      });
    };

    ReportsFilters.prototype.filter = function() {
      return this.model.fetch({
        data: this.filters
      });
    };

    ReportsFilters.prototype.byDateStart = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        date_start: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byDateEnd = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        date_end: el
      });
      return this.filter();
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

    ReportsFilters.prototype.byYearEnd = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        year_end: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byMonthEnd = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        month_end: el
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

    ReportsFilters.prototype.byStatus = function(el) {
      this.filters = _.extend(this.filters, {
        status: el
      });
      return this.filter();
    };

    return ReportsFilters;

  })(Backbone.View);
});
