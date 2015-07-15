var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Report = (function(superClass) {
    extend(Report, superClass);

    function Report() {
      return Report.__super__.constructor.apply(this, arguments);
    }

    Report.prototype.urlRoot = '/api/v1/reports';

    return Report;

  })(Backbone.Model);
  return optima.collections.Resports = (function(superClass) {
    extend(Resports, superClass);

    function Resports() {
      return Resports.__super__.constructor.apply(this, arguments);
    }

    Resports.prototype.model = optima.models.Report;

    Resports.prototype.url = '/api/v1/reports';

    return Resports;

  })(Backbone.Collection);
});
