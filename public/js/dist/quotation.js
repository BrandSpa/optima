var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Quotation = (function(superClass) {
    extend(Quotation, superClass);

    function Quotation() {
      return Quotation.__super__.constructor.apply(this, arguments);
    }

    Quotation.prototype.urlRoot = '/api/v1/quotations';

    return Quotation;

  })(Backbone.Model);
  optima.collections.Quotations = (function(superClass) {
    extend(Quotations, superClass);

    function Quotations() {
      return Quotations.__super__.constructor.apply(this, arguments);
    }

    Quotations.prototype.model = optima.models.Quotation;

    Quotations.prototype.url = '/api/v1/quotations';

    return Quotations;

  })(Backbone.Collection);
  return optima.collections.QuotationsResults = (function(superClass) {
    extend(QuotationsResults, superClass);

    function QuotationsResults() {
      return QuotationsResults.__super__.constructor.apply(this, arguments);
    }

    QuotationsResults.prototype.urlRoot = '/api/v1/results';

    return QuotationsResults;

  })(Backbone.Model);
});
