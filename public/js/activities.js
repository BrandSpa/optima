var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.Activity = (function(_super) {
    __extends(Activity, _super);

    function Activity() {
      return Activity.__super__.constructor.apply(this, arguments);
    }

    Activity.prototype.urlRoot = '/api/v1/activities';

    return Activity;

  })(Backbone.Model);
  optima.Activities = (function(_super) {
    __extends(Activities, _super);

    function Activities() {
      return Activities.__super__.constructor.apply(this, arguments);
    }

    Activities.prototype.url = '/api/v1/activities';

    Activities.prototype.model = optima.Activity;

    return Activities;

  })(Backbone.Collection);
  optima.ActivityView = (function(_super) {
    __extends(ActivityView, _super);

    function ActivityView() {
      return ActivityView.__super__.constructor.apply(this, arguments);
    }

    ActivityView.prototype.tagName = 'tr';

    ActivityView.prototype.template = $('#activity-template');

    ActivityView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    ActivityView.prototype.render = function() {
      var source, template;
      source = this.template.html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    return ActivityView;

  })(Backbone.View);
  optima.ActivitiesView = (function(_super) {
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
      return this.listenTo(this.collection, 'add', this.addOne, this);
    };

    ActivitiesView.prototype.addOne = function(model) {
      var view;
      view = new optima.ActivityView({
        model: model
      });
      $(this.el).find('table').prepend(view.render().el);
      return $(this.el).find('span.timeago').timeago();
    };

    ActivitiesView.prototype.render = function() {
      return this.collection.each(function(model) {
        var view;
        view = new optima.ActivityView({
          model: model
        });
        $(this.el).find('table').append(view.render().el);
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

    return ActivitiesView;

  })(Backbone.View);
  optima.QuotationActivityView = (function(_super) {
    __extends(QuotationActivityView, _super);

    function QuotationActivityView() {
      return QuotationActivityView.__super__.constructor.apply(this, arguments);
    }

    QuotationActivityView.prototype.template = $('#quotation-activity-template');

    QuotationActivityView.prototype.tagName = 'tr';

    QuotationActivityView.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    return QuotationActivityView;

  })(Backbone.View);
  return optima.QuotationActivitiesView = (function(_super) {
    __extends(QuotationActivitiesView, _super);

    function QuotationActivitiesView() {
      return QuotationActivitiesView.__super__.constructor.apply(this, arguments);
    }

    QuotationActivitiesView.prototype.el = $('#quotation-activities');

    QuotationActivitiesView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      return this.listenTo(this.collection, 'add', this.add);
    };

    QuotationActivitiesView.prototype.add = function(model) {
      var view;
      view = new optima.QuotationActivityView({
        model: model
      });
      return $(this.el).find('table').prepend(view.render().el);
    };

    QuotationActivitiesView.prototype.renderOne = function(model) {
      var view;
      view = new optima.QuotationActivityView({
        model: model
      });
      return $(this.el).find('table').append(view.render().el);
    };

    QuotationActivitiesView.prototype.render = function() {
      $(this.el).find('table').html('');
      $(this.el).find('.table-responsive').slimScroll({
        height: '200px'
      });
      return this.collection.each(function(model) {
        return this.renderOne(model);
      }, this);
    };

    return QuotationActivitiesView;

  })(Backbone.View);
});
