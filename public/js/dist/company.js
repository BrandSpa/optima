var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Company = (function(superClass) {
    extend(Company, superClass);

    function Company() {
      return Company.__super__.constructor.apply(this, arguments);
    }

    Company.prototype.urlRoot = '/api/v1/companies';

    return Company;

  })(Backbone.Model);
  return optima.collections.Companies = (function(superClass) {
    extend(Companies, superClass);

    function Companies() {
      return Companies.__super__.constructor.apply(this, arguments);
    }

    Companies.prototype.model = optima.models.Company;

    Companies.prototype.url = '/api/v1/companies';

    return Companies;

  })(Backbone.Collection);
});
