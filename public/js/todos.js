var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.Todo = (function(_super) {
    __extends(Todo, _super);

    function Todo() {
      return Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.prototype.urlRoot = '/api/v1/todos';

    return Todo;

  })(Backbone.Model);
  optima.Todos = (function(_super) {
    __extends(Todos, _super);

    function Todos() {
      return Todos.__super__.constructor.apply(this, arguments);
    }

    Todos.prototype.url = '/api/v1/todos';

    Todos.prototype.model = optima.Todo;

    return Todos;

  })(Backbone.Collection);
  optima.TodoView = (function(_super) {
    __extends(TodoView, _super);

    function TodoView() {
      return TodoView.__super__.constructor.apply(this, arguments);
    }

    TodoView.prototype.template = $('#todo-template');

    TodoView.prototype.tagName = "tr";

    TodoView.prototype.events = {
      'click .tracking-open-edit': 'openEdit',
      'change .todo-completed': 'completed'
    };

    TodoView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    TodoView.prototype.render = function() {
      var source, template;
      source = this.template.html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    TodoView.prototype.completed = function() {
      this.model.save({
        completed: 1
      });
      this.storeActivity(this.id, "Completo una tarea");
      return this.remove();
    };

    return TodoView;

  })(Backbone.View);
  optima.TodosView = (function(_super) {
    __extends(TodosView, _super);

    function TodosView() {
      return TodosView.__super__.constructor.apply(this, arguments);
    }

    TodosView.prototype.el = $("#todos");

    TodosView.prototype.events = {
      'click .todo-open-create': 'openCreate'
    };

    TodosView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      return this.listenTo(this.collection, 'add', this.addOne);
    };

    TodosView.prototype.addOne = function(model) {
      var view;
      view = new optima.TodoView({
        model: model
      });
      return $(this.el).find('.last-tracking').prepend(view.render().el);
    };

    TodosView.prototype.render = function() {
      return this.collection.each(function(model) {
        var view;
        view = new optima.TodoView({
          model: model
        });
        return $(this.el).find('table').append(view.render().el);
      }, this);
    };

    TodosView.prototype.openCreate = function(e) {
      var users, view;
      e.preventDefault();
      users = new optima.Users;
      view = new optima.TodoCreateView({
        model: new optima.Todo
      });
      return users.fetch().done(function(users) {
        return view.render(users);
      });
    };

    return TodosView;

  })(Backbone.View);
  return optima.TodoCreateView = (function(_super) {
    __extends(TodoCreateView, _super);

    function TodoCreateView() {
      return TodoCreateView.__super__.constructor.apply(this, arguments);
    }

    TodoCreateView.prototype.el = $('#todo-create-modal');

    TodoCreateView.prototype.template = $('#todo-create-template');

    TodoCreateView.prototype.events = {
      'click .todo-save-store': 'store',
      'click .modal-close': 'cancel'
    };

    TodoCreateView.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.stored);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    TodoCreateView.prototype.render = function(users, tracking_id) {
      var data, el, hiddenName, source, template;
      el = $(this.el);
      source = $(this.template).html();
      template = Handlebars.compile(source);
      data = {
        users: users,
        tracking_id: tracking_id
      };
      el.find('.modal-content').html(template(data));
      el.find('.datepicker').pickadate({
        formatSubmit: 'yyyy/mm/dd'
      }, hiddenName = true);
      el.find('.timepicker').pickatime({
        formatSubmit: 'HH:i'
      }, hiddenName = true);
      return el.modal({
        backdrop: 'static'
      });
    };

    TodoCreateView.prototype.store = function(e) {
      var dataForm, stored;
      e.preventDefault();
      dataForm = $(this.el).find('form').serializeJSON();
      dataForm['quotation_id'] = optima.pathArray[2];
      dataForm['expires_date'] = dataForm['expires_date_submit'];
      dataForm['expires_time'] = dataForm['expires_time_submit'];
      stored = this.stored;
      return this.model.save(dataForm, {
        wait: true
      });
    };

    TodoCreateView.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    TodoCreateView.prototype.stored = function(model) {
      var notification;
      if (model.id && optima.todos) {
        optima.todos.add(model);
        this.storeActivity(this.id, "Agrego una tarea");
        notification = new optima.Notification;
        notification.save({
          user_id: model.get('user_id'),
          message: "Nueva tarea"
        });
        return this.closeModal();
      } else {
        this.storeActivity(this.id, "Agrego una tarea");
        notification = new optima.Notification;
        notification.save({
          user_id: model.get('user_id'),
          message: "Nueva tarea"
        });
        return this.closeModal();
      }
    };

    return TodoCreateView;

  })(Backbone.View);
});
