var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.models.Activity = (function(_super) {
    __extends(Activity, _super);

    function Activity() {
      return Activity.__super__.constructor.apply(this, arguments);
    }

    Activity.prototype.urlRoot = '/api/v1/activities';

    return Activity;

  })(Backbone.Model);
  optima.collections.Activities = (function(_super) {
    __extends(Activities, _super);

    function Activities() {
      return Activities.__super__.constructor.apply(this, arguments);
    }

    Activities.prototype.url = '/api/v1/activities';

    Activities.prototype.model = optima.models.Activity;

    return Activities;

  })(Backbone.Collection);
  optima.views.ActivityView = (function(_super) {
    __extends(ActivityView, _super);

    function ActivityView() {
      return ActivityView.__super__.constructor.apply(this, arguments);
    }

    ActivityView.prototype.tagName = 'tr';

    ActivityView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    ActivityView.prototype.render = function() {
      var template;
      template = optima.templates.activity;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    return ActivityView;

  })(Backbone.View);
  optima.views.ActivitiesView = (function(_super) {
    __extends(ActivitiesView, _super);

    function ActivitiesView() {
      return ActivitiesView.__super__.constructor.apply(this, arguments);
    }

    ActivitiesView.prototype.el = $('#activities');

    ActivitiesView.prototype.events = {
      'click .service-see-more': 'seeMore'
    };

    ActivitiesView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.addOne, this);
      pubsub.on("activity:store", this.store, this);
      return pubsub.on("activity:pull", this.pull, this);
    };

    ActivitiesView.prototype.pull = function(quotation_id) {
      console.log("pull quo");
      return this.collection.fetch();
    };

    ActivitiesView.prototype.addOne = function(model) {
      var view;
      view = new optima.views.ActivityView({
        model: model
      });
      $(this.el).find('table').prepend(view.render().el);
      return $(this.el).find('span.timeago').timeago();
    };

    ActivitiesView.prototype.render = function() {
      var table;
      table = $(this.el).find('table');
      table.empty();
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.ActivityView({
          model: model
        });
        table.append(view.render().el);
        $(this.el).find('span.timeago').timeago();
        return $(this.el).find('.table-responsive').slimScroll({
          height: '475px'
        });
      }, this);
    };

    ActivitiesView.prototype.seeMore = function(e) {
      var el, more, offset;
      e.preventDefault();
      el = e.currentTarget;
      offset = $(el).data('offset');
      more = offset + 10;
      this.collection.fetch({
        data: {
          offset: more
        }
      });
      return $(el).data('offset', more);
    };

    ActivitiesView.prototype.store = function(data) {
      var quotation_id;
      this.collection.create(data);
      quotation_id = data['quotation_id'];
      return socket.emit('activities', quotation_id);
    };

    return ActivitiesView;

  })(Backbone.View);
  optima.views.QuotationActivityView = (function(_super) {
    __extends(QuotationActivityView, _super);

    function QuotationActivityView() {
      return QuotationActivityView.__super__.constructor.apply(this, arguments);
    }

    QuotationActivityView.prototype.tagName = 'tr';

    QuotationActivityView.prototype.render = function() {
      var template;
      template = optima.templates.activity_quotation;
      $(this.el).html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    return QuotationActivityView;

  })(Backbone.View);
  return optima.views.QuotationActivitiesView = (function(_super) {
    __extends(QuotationActivitiesView, _super);

    function QuotationActivitiesView() {
      return QuotationActivitiesView.__super__.constructor.apply(this, arguments);
    }

    QuotationActivitiesView.prototype.el = $('#quotation-activities');

    QuotationActivitiesView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.add);
      pubsub.on("quotation-activity:pull", this.pull, this);
      return this.quotation_id = optima.pathArray[2];
    };

    QuotationActivitiesView.prototype.pull = function(quotation_id) {
      return this.collection.fetch({
        data: {
          quotation_id: this.quotation_id
        }
      });
    };

    QuotationActivitiesView.prototype.add = function(model) {
      var view;
      view = new optima.views.QuotationActivityView({
        model: model
      });
      return $(this.el).find('table').prepend(view.render().el);
    };

    QuotationActivitiesView.prototype.renderOne = function(model) {
      var view;
      view = new optima.views.QuotationActivityView({
        model: model
      });
      return $(this.el).find('table').append(view.render().el);
    };

    QuotationActivitiesView.prototype.render = function() {
      $(this.el).find('table').empty();
      $(this.el).find('.table-responsive').slimScroll({
        height: '200px'
      });
      return this.collection.each(function(model) {
        return this.renderOne(model);
      }, this);
    };

    QuotationActivitiesView.prototype.store = function() {};

    return QuotationActivitiesView;

  })(Backbone.View);
});
