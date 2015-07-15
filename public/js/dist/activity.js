var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Activity = (function(superClass) {
    extend(Activity, superClass);

    function Activity() {
      return Activity.__super__.constructor.apply(this, arguments);
    }

    Activity.prototype.urlRoot = '/api/v1/activities';

    return Activity;

  })(Backbone.Model);
  return optima.collections.Activities = (function(superClass) {
    extend(Activities, superClass);

    function Activities() {
      return Activities.__super__.constructor.apply(this, arguments);
    }

    Activities.prototype.url = '/api/v1/activities';

    Activities.prototype.model = optima.models.Activity;

    return Activities;

  })(Backbone.Collection);
});
