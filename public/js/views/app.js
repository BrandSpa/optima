var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

optima.views.AppView = (function(_super) {
  __extends(AppView, _super);

  function AppView() {
    return AppView.__super__.constructor.apply(this, arguments);
  }

  AppView.prototype.el = $('#optima-app');

  AppView.prototype.events = {
    'submit #search-quotation': 'searchQuotation'
  };

  AppView.prototype.searchQuotation = function(e) {
    var query;
    e.preventDefault();
    query = $(e.currentTarget).find('input').val();
    return window.location = "/search=" + query;
  };

  return AppView;

})(Backbone.View);
