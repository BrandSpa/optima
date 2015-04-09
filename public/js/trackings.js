var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.Tracking = (function(_super) {
    __extends(Tracking, _super);

    function Tracking() {
      return Tracking.__super__.constructor.apply(this, arguments);
    }

    Tracking.prototype.urlRoot = '/api/v1/trackings';

    return Tracking;

  })(Backbone.Model);
  optima.Trackings = (function(_super) {
    __extends(Trackings, _super);

    function Trackings() {
      return Trackings.__super__.constructor.apply(this, arguments);
    }

    Trackings.prototype.url = '/api/v1/trackings';

    Trackings.prototype.model = optima.Tracking;

    return Trackings;

  })(Backbone.Collection);
  optima.QuotationTracking = (function(_super) {
    __extends(QuotationTracking, _super);

    function QuotationTracking() {
      return QuotationTracking.__super__.constructor.apply(this, arguments);
    }

    QuotationTracking.prototype.template = $('#tracking-template');

    QuotationTracking.prototype.events = {
      'click .tracking-open-edit': 'openEdit',
      'click .todo-open-create': 'openTodoCreate',
      'click .tracking-delete': 'delete'
    };

    QuotationTracking.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    QuotationTracking.prototype.render = function() {
      var source, template;
      source = this.template.html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    QuotationTracking.prototype.openTodoCreate = function(e) {
      var id, users, view;
      e.preventDefault();
      users = new optima.Users;
      view = new optima.TodoCreateView({
        model: new optima.Todo
      });
      id = this.model.get('id');
      return users.fetch().done(function(users) {
        return view.render(users, id);
      });
    };

    return QuotationTracking;

  })(Backbone.View);
  optima.QuotationTrackings = (function(_super) {
    __extends(QuotationTrackings, _super);

    function QuotationTrackings() {
      return QuotationTrackings.__super__.constructor.apply(this, arguments);
    }

    QuotationTrackings.prototype.el = $("#trackings");

    QuotationTrackings.prototype.events = {
      'click .tracking-open-create': 'openCreate'
    };

    QuotationTrackings.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      return this.listenTo(this.collection, 'add', this.addOne);
    };

    QuotationTrackings.prototype.addOne = function(model) {
      var view;
      view = new optima.QuotationTracking({
        model: model
      });
      return $(this.el).find('.last-tracking').prepend(view.render().el);
    };

    QuotationTrackings.prototype.render = function() {
      return this.collection.each(function(model) {
        var view;
        view = new optima.QuotationTracking({
          model: model
        });
        return $(this.el).append(view.render().el);
      }, this);
    };

    QuotationTrackings.prototype.openCreate = function(e) {
      var collection;
      e.preventDefault();
      collection = new optima.Contacts;
      return collection.fetch({
        data: {
          quotation_id: optima.pathArray[2]
        }
      }).done(function(response) {
        var view;
        view = new optima.TrackingCreateView({
          model: new optima.Tracking
        });
        return view.render(response);
      });
    };

    return QuotationTrackings;

  })(Backbone.View);
  return optima.TrackingCreateView = (function(_super) {
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

    TrackingCreateView.prototype.render = function(contacts) {
      var hiddenName, source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.modal-content').html(template(contacts));
      $(this.el).find('.datepicker').pickadate({
        formatSubmit: 'yyyy/mm/dd'
      }, hiddenName = true);
      $(this.el).find('.timepicker').pickatime({
        formatSubmit: 'HH:i'
      }, hiddenName = true);
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    TrackingCreateView.prototype.store = function(e) {
      var dataForm, stored;
      e.preventDefault();
      dataForm = $(this.el).find('form').serializeJSON();
      dataForm['quotation_id'] = optima.pathArray[2];
      dataForm['register_at_date'] = dataForm['register_at_date_submit'];
      dataForm['register_at_time'] = dataForm['register_at_time_submit'];
      stored = this.stored;
      return this.model.save(dataForm, {
        wait: true
      });
    };

    TrackingCreateView.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    TrackingCreateView.prototype.stored = function(model) {
      if (model.id) {
        optima.trackings.add(model);
        optima.quotation.save({
          status: 'Seguimiento'
        });
        this.storeActivity(this.id, "Agrego un registro");
        return this.closeModal();
      }
    };

    return TrackingCreateView;

  })(Backbone.View);
});
