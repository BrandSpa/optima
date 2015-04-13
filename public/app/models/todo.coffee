$ ->
  class optima.models.Todo extends Backbone.Model
    urlRoot: '/api/v1/todos'

  class optima.collections.Todos extends Backbone.Collection
    url: '/api/v1/todos'
    model: optima.models.Todo
