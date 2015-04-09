Backbone.View.prototype.closeModal = function() {
  this.remove();
  $('.modal-backdrop').remove();
  return $('body').removeClass('modal-open');
};

Backbone.View.prototype.showErrors = function(model, response) {
  var errors;
  errors = JSON.parse(response.responseText);
  return _.each(errors, function(message, row) {
    return alertify.error(message);
  });
};

Backbone.View.prototype.storeActivity = function(quotation_id, message) {
  return pubsub.trigger("activity:store", {
    quotation_id: quotation_id,
    message: message
  });
};
