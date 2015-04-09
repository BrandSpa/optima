var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.activity = (function(_super) {
    __extends(activity, _super);

    function activity() {
      return activity.__super__.constructor.apply(this, arguments);
    }

    activity.prototype.urlRoot = '/api/v1/activities';

    return activity;

  })(Backbone.Model);
  return optima.activities = (function(_super) {
    __extends(activities, _super);

    function activities() {
      return activities.__super__.constructor.apply(this, arguments);
    }

    activities.prototype.url = 'api/v1/activities';

    activities.prototype.model = optima.activity;

    return activities;

  })(Backbone.Collection);
});
