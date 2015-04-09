class optima.views.AppView extends Backbone.View
  el: $ '#optima-app'
  events: 
    'submit #search-quotation': 'searchQuotation'

  searchQuotation: (e) ->
    e.preventDefault()
    query = $(e.currentTarget).find('input').val()
    window.location = "/search=#{query}"
