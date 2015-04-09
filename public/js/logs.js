var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.Log = (function(_super) {
    __extends(Log, _super);

    function Log() {
      return Log.__super__.constructor.apply(this, arguments);
    }

    Log.prototype.urlRoot = '/api/v1/logs';

    return Log;

  })(Backbone.Model);
  return optima.Logs = (function(_super) {
    __extends(Logs, _super);

    function Logs() {
      return Logs.__super__.constructor.apply(this, arguments);
    }

    Logs.prototype.url = 'api/v1/logs';

    Logs.prototype.model = optima.Log;

    return Logs;

  })(Backbone.Collection);
});
