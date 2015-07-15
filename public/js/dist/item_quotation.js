var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationServiceView = (function(superClass) {
    extend(QuotationServiceView, superClass);

    function QuotationServiceView() {
      return QuotationServiceView.__super__.constructor.apply(this, arguments);
    }

    QuotationServiceView.prototype.template = $('#quotation-service-template');

    QuotationServiceView.prototype.tagName = 'tr';

    QuotationServiceView.prototype.events = {
      'click .quotation-service-detach': 'detach',
      'click .service-open-edit': 'openEdit'
    };

    QuotationServiceView.prototype.initialize = function() {
      this.listenTo(this.model, 'change', this.render);
      pubsub.on('service:update', this.notifyUpdate, this);
      return this.quotation_id = optima.pathArray[2];
    };

    QuotationServiceView.prototype.notifyUpdate = function() {
      socket.emit("quotation-service", this.quotation_id);
      return this.storeActivity(this.quotation_id, "edito un servicio");
    };

    QuotationServiceView.prototype.render = function() {
      var template;
      template = optima.templates.quotation_service;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    QuotationServiceView.prototype.openEdit = function(e) {
      var edit;
      e.preventDefault();
      edit = new optima.views.ServiceEdit({
        model: this.model
      });
      return edit.render();
    };

    QuotationServiceView.prototype.detach = function(e) {
      var serviceId;
      e.preventDefault();
      serviceId = this.model.get('id');
      $.ajax({
        method: 'DELETE',
        url: "/api/v1/quotations/" + this.quotation_id + "/services/" + serviceId
      });
      socket.emit("quotation-service", this.quotation_id);
      this.storeActivity(this.quotation_id, "elimino un servicio");
      return this.remove();
    };

    return QuotationServiceView;

  })(Backbone.View);
});
