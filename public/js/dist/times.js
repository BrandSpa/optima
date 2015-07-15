var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationTimes = (function(superClass) {
    extend(QuotationTimes, superClass);

    function QuotationTimes() {
      return QuotationTimes.__super__.constructor.apply(this, arguments);
    }

    QuotationTimes.prototype.el = $('#quotation-times');

    QuotationTimes.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationTimes.prototype.render = function() {
      var template;
      template = optima.templates.quotation_time;
      $(this.el).find('.table-responsive').html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    return QuotationTimes;

  })(Backbone.View);
});
