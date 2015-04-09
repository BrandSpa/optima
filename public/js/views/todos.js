var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.models.Todo = (function(_super) {
    __extends(Todo, _super);

    function Todo() {
      return Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.prototype.urlRoot = '/api/v1/todos';

    return Todo;

  })(Backbone.Model);
  optima.collections.Todos = (function(_super) {
    __extends(Todos, _super);

    function Todos() {
      return Todos.__super__.constructor.apply(this, arguments);
    }

    Todos.prototype.url = '/api/v1/todos';

    Todos.prototype.model = optima.models.Todo;

    return Todos;

  })(Backbone.Collection);
  optima.views.TodoView = (function(_super) {
    __extends(TodoView, _super);

    function TodoView() {
      return TodoView.__super__.constructor.apply(this, arguments);
    }

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
      var template;
      template = optima.templates.todo;
      $(this.el).html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    TodoView.prototype.completed = function() {
      this.model.save({
        completed: 1
      });
      this.storeActivity(this.id, "Completo una tarea");
      socket.emit('todos');
      return this.remove();
    };

    return TodoView;

  })(Backbone.View);
  optima.views.TodosView = (function(_super) {
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
      this.listenTo(this.collection, 'add', this.addOne);
      return pubsub.on("todos:pull", this.pull, this);
    };

    TodosView.prototype.pull = function() {
      return this.collection.fetch({
        reset: true
      });
    };

    TodosView.prototype.addOne = function(model) {
      var view;
      view = new optima.views.TodoView({
        model: model
      });
      return $(this.el).find('.last-tracking').prepend(view.render().el);
    };

    TodosView.prototype.render = function() {
      $(this.el).find('table tbody').empty();
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.TodoView({
          model: model
        });
        return $(this.el).find('table').append(view.render().el);
      }, this);
    };

    TodosView.prototype.openCreate = function(e) {
      var model, users, view;
      e.preventDefault();
      users = new optima.collections.Users;
      model = new optima.models.Todo;
      view = new optima.views.TodoCreateView({
        model: model
      });
      return users.fetch().done(function(users) {
        return view.render(users);
      });
    };

    return TodosView;

  })(Backbone.View);
  return optima.views.TodoCreateView = (function(_super) {
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
      });
      el.find('.timepicker').pickatime({
        formatSubmit: 'HH:i'
      }, hiddenName = true);
      return el.modal({
        backdrop: 'static'
      });
    };

    TodoCreateView.prototype.serializeData = function(dataForm) {
      dataForm['quotation_id'] = optima.pathArray[2];
      dataForm['expires_date'] = dataForm['expires_date_submit'];
      dataForm['expires_time'] = dataForm['expires_time_submit'];
      if (dataForm['tracking_id'] === '') {
        delete dataForm['tracking_id'];
      }
      return dataForm;
    };

    TodoCreateView.prototype.store = function(e) {
      var data, dataForm;
      e.preventDefault();
      dataForm = $(this.el).find('form').serializeJSON();
      data = this.serializeData(dataForm);
      return this.model.save(data, {
        wait: true
      });
    };

    TodoCreateView.prototype.storeNotifications = function() {
      var notification;
      this.storeActivity(this.id, "Agrego una tarea");
      notification = new optima.models.Notification;
      return notification.save({
        user_id: model.get('user_id'),
        message: "Nueva tarea"
      });
    };

    TodoCreateView.prototype.notify = function(model) {
      pubsub.trigger('notification:store', "Nueva tarea");
      pubsub.trigger('todoTracking:stored', model);
      return socket.emit('todos', model.id);
    };

    TodoCreateView.prototype.stored = function(model) {
      if (model.id && optima.todos) {
        optima.todos.add(model);
        this.notify(model);
        return this.closeModal();
      } else {
        this.notify(model);
        return this.closeModal();
      }
    };

    TodoCreateView.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return TodoCreateView;

  })(Backbone.View);
});
