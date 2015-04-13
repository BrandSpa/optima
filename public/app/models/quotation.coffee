$ ->
  class optima.models.Quotation extends Backbone.Model
    urlRoot: '/api/v1/quotations'

  class optima.collections.Quotations extends Backbone.Collection
    model: optima.models.Quotation
    url: '/api/v1/quotations'
