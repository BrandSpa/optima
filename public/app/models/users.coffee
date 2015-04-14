$ ->
  class optima.models.User extends Backbone.Model
    urlRoot: '/api/v1/users'

  class optima.collections.Users extends Backbone.Collection
    url: '/api/v1/users'
    model: optima.models.User