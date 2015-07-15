var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationStatus = (function(superClass) {
    extend(QuotationStatus, superClass);

    function QuotationStatus() {
      return QuotationStatus.__super__.constructor.apply(this, arguments);
    }

    QuotationStatus.prototype.el = $('#quotation-options');

    QuotationStatus.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationStatus.prototype.render = function() {
      var template;
      template = optima.templates.quotation_status;
      return $(this.el).find('.panel-heading').html(template(this.model.toJSON()));
    };

    return QuotationStatus;

  })(Backbone.View);
});
