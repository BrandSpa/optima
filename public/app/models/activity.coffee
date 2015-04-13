$ ->
  class optima.models.Activity extends Backbone.Model
    urlRoot: '/api/v1/activities'

  class optima.collections.Activities extends Backbone.Collection
    url: '/api/v1/activities'
    model: optima.models.Activity
