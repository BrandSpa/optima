var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.models.Notification = (function(_super) {
    __extends(Notification, _super);

    function Notification() {
      return Notification.__super__.constructor.apply(this, arguments);
    }

    Notification.prototype.urlRoot = '/api/v1/notifications';

    return Notification;

  })(Backbone.Model);
  optima.collections.Notifications = (function(_super) {
    __extends(Notifications, _super);

    function Notifications() {
      return Notifications.__super__.constructor.apply(this, arguments);
    }

    Notifications.prototype.url = '/api/v1/notifications';

    Notifications.prototype.model = optima.models.Notification;

    return Notifications;

  })(Backbone.Collection);
  optima.views.NotificationView = (function(_super) {
    __extends(NotificationView, _super);

    function NotificationView() {
      return NotificationView.__super__.constructor.apply(this, arguments);
    }

    NotificationView.prototype.tagName = 'li';

    NotificationView.prototype.template = $('#notification-template');

    NotificationView.prototype.events = {
      "click .notification-readed": "readed"
    };

    NotificationView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    NotificationView.prototype.render = function() {
      var source, template;
      source = this.template.html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    NotificationView.prototype.readed = function(e) {
      e.preventDefault();
      this.model.save({
        read: true
      });
      optima.notifications.fetch({
        reset: true
      });
      return optima.notificationCenterView.render();
    };

    return NotificationView;

  })(Backbone.View);
  return optima.views.NotificationCenterView = (function(_super) {
    __extends(NotificationCenterView, _super);

    function NotificationCenterView() {
      return NotificationCenterView.__super__.constructor.apply(this, arguments);
    }

    NotificationCenterView.prototype.el = $('#notifications-center');

    NotificationCenterView.prototype.template = $('#notifications-center-template');

    NotificationCenterView.prototype.events = {
      'click .dropdown-toggle': 'cleanCounter'
    };

    NotificationCenterView.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    NotificationCenterView.prototype.render = function() {
      var source, template;
      source = this.template.html();
      template = Handlebars.compile(source);
      $(this.el).html(template({
        count: this.collection.length
      }));
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.NotificationView({
          model: model
        });
        return $('#notifications-center').find('.dropdown-menu').append(view.render().el);
      });
    };

    optima.views.NotificationCreate = (function(_super1) {
      __extends(NotificationCreate, _super1);

      function NotificationCreate() {
        return NotificationCreate.__super__.constructor.apply(this, arguments);
      }

      NotificationCreate.prototype.initialize = function() {};

      pubsub.on('notification:store', NotificationCreate.store, NotificationCreate);

      return NotificationCreate;

    })(Backbone.View);

    NotificationCenterView.prototype.store = function(data) {
      return this.model.save(data);
    };

    NotificationCenterView.prototype.stored = function(res) {
      return socket.emit('notification', res);
    };

    return NotificationCenterView;

  })(Backbone.View);
});
