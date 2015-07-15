var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationServiceSelect = (function(superClass) {
    extend(QuotationServiceSelect, superClass);

    function QuotationServiceSelect() {
      return QuotationServiceSelect.__super__.constructor.apply(this, arguments);
    }

    QuotationServiceSelect.prototype.el = $('#quotation-service-list');

    QuotationServiceSelect.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    QuotationServiceSelect.prototype.render = function() {
      var template;
      template = optima.templates.service_list;
      return $(this.el).html(template(this.collection.toJSON()));
    };

    return QuotationServiceSelect;

  })(Backbone.View);
});
