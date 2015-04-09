window.optima = {
  views:{}
  models:{}
  collections:{}
  controllers:{}
  routers:{}
  helpers:{}
}
window.pubsub = {}

_.extend(pubsub, Backbone.Events)

optima.dateNow = () ->
  date = new Date()
  year = date.getFullYear()
  month = (date.getMonth() + 1)
  day = date.getUTCDate()
  now = "#{year}-#{month}-#{day}"

Chart.defaults.global.responsive = true

$ ->
  optima.pathArray = window.location.pathname.split( '/' )
  
  optima.summernote = (el) ->
    $(el).find('.summernote').summernote
      focus: true
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']]
        ['para', ['ul', 'ol', 'paragraph']]
      ]

  jQuery.timeago.settings.allowFuture = true
  
optima.filterBy = (collection, el, data) ->
  collection.where data
