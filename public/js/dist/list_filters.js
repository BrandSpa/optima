var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationsFilters = (function(superClass) {
    extend(QuotationsFilters, superClass);

    function QuotationsFilters() {
      return QuotationsFilters.__super__.constructor.apply(this, arguments);
    }

    QuotationsFilters.prototype.events = {
      'click .quotation-see-more': 'seeMore',
      'submit .quotation-search': 'filterByQuery',
      'change .filter-status': 'filterByStatus',
      'change .filter-advisor': 'filterByAdvisor',
      'change .filter-client-type': 'filterByClientType',
      'change .filter-quotation-type': 'filterByQuotationType'
    };

    QuotationsFilters.prototype.initialize = function() {
      this.filters = {};
      return this.offset = 0;
    };

    QuotationsFilters.prototype.render = function() {
      var template;
      template = optima.templates.quotations_list_filters;
      $(this.el).html(template);
      return this;
    };

    QuotationsFilters.prototype.filter = function(filter) {
      var filters;
      if (filter) {
        this.filters = _.extend(this.filters, filter);
        filters = _.extend(this.filters, {
          offset: 0
        });
        return pubsub.trigger('quotations:filter', filters);
      }
    };

    QuotationsFilters.prototype.filterByQuery = function(e) {
      var query;
      e.preventDefault();
      query = $('.quotation-query').val();
      return this.filter({
        query: query
      });
    };

    QuotationsFilters.prototype.filterByStatus = function(e) {
      var el;
      el = $(e.currentTarget);
      return this.filter({
        status: el.val()
      });
    };

    QuotationsFilters.prototype.filterByAdvisor = function(e) {
      var el;
      el = $(e.currentTarget);
      return this.filter({
        advisor: el.val()
      });
    };

    QuotationsFilters.prototype.filterByClientType = function(e) {
      var el;
      el = $(e.currentTarget);
      return this.filter({
        client_type: el.val()
      });
    };

    QuotationsFilters.prototype.filterByQuotationType = function(e) {
      var el;
      el = $(e.currentTarget);
      return this.filter({
        quotation_type: el.val()
      });
    };

    return QuotationsFilters;

  })(Backbone.View);
});
