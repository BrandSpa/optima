var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.DashboardPage = (function(superClass) {
    extend(DashboardPage, superClass);

    function DashboardPage() {
      return DashboardPage.__super__.constructor.apply(this, arguments);
    }

    DashboardPage.prototype.events = {
      'click .quotation-open-quote': 'openQuote',
      'click .todo-open-create': 'openTodo'
    };

    DashboardPage.prototype.render = function() {
      var template;
      template = optima.templates.page_dashboard;
      $(this.el).empty().append(template);
      return this;
    };

    DashboardPage.prototype.openQuote = function(e) {
      var model;
      e.preventDefault();
      model = new optima.models.Company;
      optima.companyQuoteCreate = new optima.views.CompanyQuoteCreate({
        model: model
      });
      return optima.companyQuoteCreate.render();
    };

    DashboardPage.prototype.openTodo = function(e) {
      var model, users, view;
      e.preventDefault();
      users = new optima.collections.Users;
      model = new optima.models.Todo;
      view = new optima.views.TodoCreateView({
        model: model
      });
      console.log(view);
      return users.fetch().done(function(users) {
        return view.render(users);
      });
    };

    return DashboardPage;

  })(Backbone.View);
});
