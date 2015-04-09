var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.models.User = (function(_super) {
    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.urlRoot = '/api/v1/users';

    return User;

  })(Backbone.Model);
  return optima.collections.Users = (function(_super) {
    __extends(Users, _super);

    function Users() {
      return Users.__super__.constructor.apply(this, arguments);
    }

    Users.prototype.url = '/api/v1/users';

    Users.prototype.model = optima.models.User;

    return Users;

  })(Backbone.Collection);
});
