$ ->
  class optima.views.ServiceResults extends Backbone.View
    el: $ '#quotation-service-create-modal'
    
    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      html = []
      @collection.each (model) ->
        view = new optima.views.ServiceResult model: model
        html.push(view.render().el)
      , @
      
      $(@el).find('table').empty().append(html)


    close: ->
      @remove()