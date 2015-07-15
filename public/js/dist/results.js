var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationsResultsView = (function(superClass) {
    extend(QuotationsResultsView, superClass);

    function QuotationsResultsView() {
      return QuotationsResultsView.__super__.constructor.apply(this, arguments);
    }

    QuotationsResultsView.prototype.el = $("#quotations-results");

    QuotationsResultsView.prototype.template = $("#quotations-results-template");

    QuotationsResultsView.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationsResultsView.prototype.render = function() {
      var source, template;
      source = this.template.html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    return QuotationsResultsView;

  })(Backbone.View);
});
