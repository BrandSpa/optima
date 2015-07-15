var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ServiceResult = (function(superClass) {
    extend(ServiceResult, superClass);

    function ServiceResult() {
      return ServiceResult.__super__.constructor.apply(this, arguments);
    }

    ServiceResult.prototype.template = $('#service-result-template');

    ServiceResult.prototype.tagName = 'tr';

    ServiceResult.prototype.events = {
      'click .quotation-service-attach': 'attach'
    };

    ServiceResult.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.attached);
      return this.quotation_id = optima.pathArray[2];
    };

    ServiceResult.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = optima.templates.service_item_result;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    ServiceResult.prototype.attach = function(e) {
      var service_id;
      e.preventDefault();
      service_id = this.model.get('id');
      return optima.quotationServices.create({
        quotation_id: this.quotation_id,
        service_id: service_id
      });
    };

    return ServiceResult;

  })(Backbone.View);
});
