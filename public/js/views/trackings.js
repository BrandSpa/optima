var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.models.Tracking = (function(_super) {
    __extends(Tracking, _super);

    function Tracking() {
      return Tracking.__super__.constructor.apply(this, arguments);
    }

    Tracking.prototype.urlRoot = '/api/v1/trackings';

    return Tracking;

  })(Backbone.Model);
  optima.collections.Trackings = (function(_super) {
    __extends(Trackings, _super);

    function Trackings() {
      return Trackings.__super__.constructor.apply(this, arguments);
    }

    Trackings.prototype.url = '/api/v1/trackings';

    Trackings.prototype.model = optima.models.Tracking;

    return Trackings;

  })(Backbone.Collection);
  optima.views.QuotationTracking = (function(_super) {
    __extends(QuotationTracking, _super);

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
  optima.views.QuotationTrackings = (function(_super) {
    __extends(QuotationTrackings, _super);

    function QuotationTrackings() {
      return QuotationTrackings.__super__.constructor.apply(this, arguments);
    }

    QuotationTrackings.prototype.el = $("#trackings");

    QuotationTrackings.prototype.events = {
      'click .tracking-open-create': 'openCreate',
      'click .effective': 'effective',
      'click .no-effective': 'noEffective'
    };

    QuotationTrackings.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.addOne);
      pubsub.on("trackings:pull", this.pull, this);
      return this.quotation_id = optima.pathArray[2];
    };

    QuotationTrackings.prototype.pull = function(quotation_id) {
      return this.collection.fetch({
        reset: true,
        data: {
          quotation_id: this.quotation_id
        }
      });
    };

    QuotationTrackings.prototype.addOne = function(model) {
      var view;
      view = new optima.views.QuotationTracking({
        model: model
      });
      $(this.el).find('.last-tracking').prepend(view.render().el);
      return view.getTodos(model.get('id'));
    };

    QuotationTrackings.prototype.render = function() {
      $(this.el).find('.trackings-container').empty();
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.QuotationTracking({
          model: model
        });
        $(this.el).find('.trackings-container').append(view.render().el);
        return view.getTodos(model.get('id'));
      }, this);
    };

    QuotationTrackings.prototype.openCreate = function(e) {
      var collection;
      e.preventDefault();
      collection = new optima.collections.Contacts;
      return collection.fetch({
        data: {
          quotation_id: optima.pathArray[2]
        }
      }).done(function(response) {
        var view;
        view = new optima.views.TrackingCreateView({
          model: new optima.models.Tracking
        });
        return view.render(response);
      });
    };

    QuotationTrackings.prototype.effective = function(e) {
      e.preventDefault();
      return pubsub.trigger('quotation:effective');
    };

    QuotationTrackings.prototype.noEffective = function(e) {
      e.preventDefault();
      return pubsub.trigger('quotation:noEffective');
    };

    return QuotationTrackings;

  })(Backbone.View);
  optima.views.TrackingCreateView = (function(_super) {
    __extends(TrackingCreateView, _super);

    function TrackingCreateView() {
      return TrackingCreateView.__super__.constructor.apply(this, arguments);
    }

    TrackingCreateView.prototype.el = $('#tracking-create-modal');

    TrackingCreateView.prototype.template = $('#tracking-create-template');

    TrackingCreateView.prototype.events = {
      'click .tracking-save-store': 'store',
      'click .modal-close': 'cancel'
    };

    TrackingCreateView.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.stored);
      this.listenTo(this.model, 'error', this.showErrors);
      return this.id = optima.pathArray[2];
    };

    TrackingCreateView.prototype.addPlugins = function() {
      var hiddenName;
      $(this.el).find('.datepicker').pickadate({
        formatSubmit: 'yyyy/mm/dd'
      }, hiddenName = true);
      return $(this.el).find('.timepicker').pickatime({
        formatSubmit: 'HH:i'
      }, hiddenName = true);
    };

    TrackingCreateView.prototype.render = function(contacts) {
      var template;
      template = optima.templates.tracking_create;
      $(this.el).find('.modal-content').html(template(contacts));
      this.addPlugins();
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    TrackingCreateView.prototype.store = function(e) {
      var dataForm;
      e.preventDefault();
      dataForm = $(this.el).find('form').serializeJSON();
      dataForm['quotation_id'] = optima.pathArray[2];
      dataForm['register_date'] = dataForm['register_date_submit'];
      dataForm['register_time'] = dataForm['register_time_submit'];
      return this.model.save(dataForm, {
        wait: true
      });
    };

    TrackingCreateView.prototype.stored = function(model) {
      var diff, now;
      if (model.id) {
        console.log(model);
        optima.trackings.add(model);
        console.log(optima.quotation.get('sent_at'));
        now = moment().format();
        diff = moment(now).diff(optima.quotation.get('sent_at'), 'minutes');
        optima.quotation.save({
          status: 'Seguimiento',
          sent_confirmed_diff: diff
        });
        this.storeActivity(this.id, "Agrego un registro");
        socket.emit("trackings", this.id);
        return this.closeModal();
      }
    };

    TrackingCreateView.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return TrackingCreateView;

  })(Backbone.View);
  optima.views.TrackingTodos = (function(_super) {
    __extends(TrackingTodos, _super);

    function TrackingTodos() {
      return TrackingTodos.__super__.constructor.apply(this, arguments);
    }

    TrackingTodos.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    TrackingTodos.prototype.render = function() {
      this.$el.find('.todos tbody').empty();
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.TrackingTodo({
          model: model
        });
        return this.$el.find('.todos tbody').append(view.render().el);
      }, this);
    };

    return TrackingTodos;

  })(Backbone.View);
  return optima.views.TrackingTodo = (function(_super) {
    __extends(TrackingTodo, _super);

    function TrackingTodo() {
      return TrackingTodo.__super__.constructor.apply(this, arguments);
    }

    TrackingTodo.prototype.tagName = 'tr';

    TrackingTodo.prototype.render = function() {
      var template;
      template = optima.templates.todo_tracking;
      this.$el.html(template(this.model.toJSON()));
      return this;
    };

    return TrackingTodo;

  })(Backbone.View);
});
