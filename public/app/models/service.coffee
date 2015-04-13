$ ->
  class optima.models.Service extends Backbone.Model
    urlRoot: '/api/v1/services'

  class optima.collections.Services extends Backbone.Collection
    url: '/api/v1/services'
    model: optima.models.Service
