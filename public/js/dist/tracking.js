var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Tracking = (function(superClass) {
    extend(Tracking, superClass);

    function Tracking() {
      return Tracking.__super__.constructor.apply(this, arguments);
    }

    Tracking.prototype.urlRoot = '/api/v1/trackings';

    return Tracking;

  })(Backbone.Model);
  return optima.collections.Trackings = (function(superClass) {
    extend(Trackings, superClass);

    function Trackings() {
      return Trackings.__super__.constructor.apply(this, arguments);
    }

    Trackings.prototype.url = '/api/v1/trackings';

    Trackings.prototype.model = optima.models.Tracking;

    return Trackings;

  })(Backbone.Collection);
});
