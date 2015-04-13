$ ->
  class optima.views.QuoteCompanyContacts extends Backbone.View
    el: $ '#contact-quote-create-modal'
    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      el = $(@el)
      @collection.each (model) ->
        view = new optima.views.QuoteCompanyContact model: model
        $(el).find('table').append view.render().el