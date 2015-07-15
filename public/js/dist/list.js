var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationTrackings = (function(superClass) {
    extend(QuotationTrackings, superClass);

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
});
