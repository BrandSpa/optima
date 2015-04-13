$ ->
  class optima.models.Company extends Backbone.Model
    urlRoot: '/api/v1/companies'

  class optima.collections.Companies extends Backbone.Collection
    model: optima.models.Company
    url: '/api/v1/companies'
