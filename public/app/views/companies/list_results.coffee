$ ->
  class optima.views.CompanyResults extends Backbone.View
    el: $ '#company-quote-create-modal'
    
    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      $(el).find('table').html('')
      el = $(@el)
      @collection.each (model) ->
        view = new optima.views.CompanyResult model: model
        $(el).find('table').append view.render().el

    close: ->
      @remove()