var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.QuotationProduct = (function(superClass) {
    extend(QuotationProduct, superClass);

    function QuotationProduct() {
      return QuotationProduct.__super__.constructor.apply(this, arguments);
    }

    QuotationProduct.prototype.urlRoot = '/api/v1/products';

    return QuotationProduct;

  })(Backbone.Model);
  return optima.collections.QuotationProducts = (function(superClass) {
    extend(QuotationProducts, superClass);

    function QuotationProducts() {
      return QuotationProducts.__super__.constructor.apply(this, arguments);
    }

    QuotationProducts.prototype.model = optima.models.QuotationProduct;

    QuotationProducts.prototype.url = '/api/v1/products';

    return QuotationProducts;

  })(Backbone.Collection);
});
