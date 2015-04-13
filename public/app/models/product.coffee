$ -> 
  class optima.models.QuotationProduct extends Backbone.Model
    urlRoot: '/api/v1/products'

  class optima.collections.QuotationProducts extends Backbone.Collection
    model: optima.models.QuotationProduct
    url: '/api/v1/products'
