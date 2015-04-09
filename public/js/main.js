window.optima = {
  views: {},
  models: {},
  collections: {},
  controllers: {},
  routers: {},
  helpers: {}
};

window.pubsub = {};

_.extend(pubsub, Backbone.Events);

$(function() {
  optima.pathArray = window.location.pathname.split('/');
  optima.summernote = function(el) {
    return $(el).find('.summernote').summernote({
      focus: true,
      toolbar: [['style', ['bold', 'italic', 'underline', 'clear']], ['para', ['ul', 'ol', 'paragraph']]]
    });
  };
  return jQuery.timeago.settings.allowFuture = true;
});

optima.filterBy = function(collection, el, data) {
  return collection.where(data);
};
