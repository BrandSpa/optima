$ ->
  class optima.models.Tracking extends Backbone.Model
    urlRoot: '/api/v1/trackings'

  class optima.collections.Trackings extends Backbone.Collection
    url: '/api/v1/trackings'
    model: optima.models.Tracking
