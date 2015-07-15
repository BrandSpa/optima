var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationTracking = (function(superClass) {
    extend(QuotationTracking, superClass);

    function QuotationTracking() {
      return QuotationTracking.__super__.constructor.apply(this, arguments);
    }

    QuotationTracking.prototype.events = {
      'click .tracking-open-edit': 'openEdit',
      'click .todo-open-create': 'openTodoCreate',
      'click .tracking-delete': 'delete'
    };

    QuotationTracking.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'error', this.showErrors);
      pubsub.on('todoTracking:stored', this.getTodos, this);
      return pubsub.on("todos:pull", this.getTodos, this);
    };

    QuotationTracking.prototype.render = function() {
      var template;
      template = optima.templates.tracking;
      this.$el.html(template(this.model.toJSON()));
      return this;
    };

    QuotationTracking.prototype.getTodos = function() {
      var id, todos, todosView;
      id = this.model.get('id');
      todos = new optima.collections.Todos;
      todosView = new optima.views.TrackingTodos({
        collection: todos,
        el: this.$el
      });
      return todos.fetch({
        reset: true,
        data: {
          where: "tracking_id = " + id
        }
      });
    };

    QuotationTracking.prototype.openTodoCreate = function(e) {
      var id, users, view;
      e.preventDefault();
      users = new optima.collections.Users;
      view = new optima.views.TodoCreateView({
        model: new optima.models.Todo
      });
      id = this.model.get('id');
      return users.fetch().done(function(users) {
        return view.render(users, id);
      });
    };

    return QuotationTracking;

  })(Backbone.View);
});
