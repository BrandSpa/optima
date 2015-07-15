var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ServiceEdit = (function(superClass) {
    extend(ServiceEdit, superClass);

    function ServiceEdit() {
      return ServiceEdit.__super__.constructor.apply(this, arguments);
    }

    ServiceEdit.prototype.el = $('#service-edit-modal');

    ServiceEdit.prototype.events = {
      'click .service-save-update': 'update',
      'click .modal-close': 'cancel'
    };

    ServiceEdit.prototype.initialize = function() {
      return this.listenTo(this.model, 'sync', this.synced);
    };

    ServiceEdit.prototype.render = function() {
      var template;
      template = optima.templates.service_edit;
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
      optima.summernote(this.el);
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    ServiceEdit.prototype.update = function(e) {
      var dataForm, el;
      e.preventDefault();
      el = $(this.el);
      dataForm = el.find('form').serializeJSON();
      dataForm['text'] = el.find('form [name="text"]').code();
      return this.model.save(dataForm, {
        wait: true
      });
    };

    ServiceEdit.prototype.synced = function(model) {
      if (model.id) {
        pubsub.trigger('service:update');
        return this.closeModal();
      }
    };

    ServiceEdit.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return ServiceEdit;

  })(Backbone.View);
});
