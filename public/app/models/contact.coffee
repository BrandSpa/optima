$ ->
  class optima.models.Contact extends Backbone.Model
    urlRoot: '/api/v1/contacts'

  class optima.collections.Contacts extends Backbone.Collection
    model: optima.models.Contact
    url: '/api/v1/contacts'
