$ ->
  class optima.models.Report extends Backbone.Model
    urlRoot: '/api/v1/reports'

  class optima.collections.Resports extends Backbone.Collection
    model: optima.models.Report
    url: '/api/v1/reports'
