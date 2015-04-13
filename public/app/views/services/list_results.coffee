$ ->
  class optima.views.ServiceResults extends Backbone.View
    el: $ '#quotation-service-create-modal'
    
    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      $(el).find('table').html('')
      el = $(@el)
      @collection.each (model) ->
        view = new optima.views.ServiceResult model: model
        $(el).find('table').append view.render().el

    close: ->
      @remove()