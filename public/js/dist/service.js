var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Service = (function(superClass) {
    extend(Service, superClass);

    function Service() {
      return Service.__super__.constructor.apply(this, arguments);
    }

    Service.prototype.urlRoot = '/api/v1/services';

    return Service;

  })(Backbone.Model);
  return optima.collections.Services = (function(superClass) {
    extend(Services, superClass);

    function Services() {
      return Services.__super__.constructor.apply(this, arguments);
    }

    Services.prototype.url = '/api/v1/services';

    Services.prototype.model = optima.models.Service;

    return Services;

  })(Backbone.Collection);
});
