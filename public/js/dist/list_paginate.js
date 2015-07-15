var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationsPaginate = (function(superClass) {
    extend(QuotationsPaginate, superClass);

    function QuotationsPaginate() {
      return QuotationsPaginate.__super__.constructor.apply(this, arguments);
    }

    QuotationsPaginate.prototype.events = {
      'click': 'seeMore'
    };

    QuotationsPaginate.prototype.initialize = function() {
      return this.offset = 0;
    };

    QuotationsPaginate.prototype.render = function() {
      var template;
      template = optima.templates.quotation_paginate_btn;
      $(this.el).html(template);
      return this;
    };

    QuotationsPaginate.prototype.seeMore = function(e) {
      var el, more, that;
      that = this;
      e.preventDefault();
      el = e.currentTarget;
      more = this.offset + 10;
      pubsub.trigger('quotations:paginate', {
        offset: more
      });
      return this.offset = more;
    };

    return QuotationsPaginate;

  })(Backbone.View);
});
