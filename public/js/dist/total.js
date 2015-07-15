var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportsTotal = (function(superClass) {
    extend(ReportsTotal, superClass);

    function ReportsTotal() {
      return ReportsTotal.__super__.constructor.apply(this, arguments);
    }

    ReportsTotal.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    ReportsTotal.prototype.render = function() {
      var template;
      template = optima.templates.reports_total;
      $(this.el).empty().append(template(this.model.toJSON()));
      return $("#total").empty().append(this.el);
    };

    return ReportsTotal;

  })(Backbone.View);
});
