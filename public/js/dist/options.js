var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationOptions = (function(superClass) {
    extend(QuotationOptions, superClass);

    function QuotationOptions() {
      return QuotationOptions.__super__.constructor.apply(this, arguments);
    }

    QuotationOptions.prototype.el = $('#quotation-options');

    QuotationOptions.prototype.events = {
      'change .select-type': 'changeType',
      'change .select-type-category': 'changeTypeCategory',
      'change .select-client-type': 'changeClientType',
      'change .select-advisor': 'changeAdvisor',
      'change .select-found-us': 'changeFoundUs',
      'change .select-offer': 'changeOffer',
      'click .change-delivered': 'changeDelivered',
      'click .open-comment': 'openComment',
      'click .open-no-send': 'openNoSend',
      'click .open-mail': 'openMail',
      'click .send': 'send',
      'click .service-approval-remove': "serviceApprovalRemove",
      'click .service-approval-add': "serviceApprovalAdd"
    };

    QuotationOptions.prototype.initialize = function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'sync', this.updated);
      this.id = this.model.get('id');
      pubsub.on('quotation:effective', this.changeEffective, this);
      pubsub.on('quotation:noEffective', this.openNoEffective, this);
      pubsub.on('quotation:change', this.pull, this);
      return pubsub.on('quotation:contact', this.changeContact, this);
    };

    QuotationOptions.prototype.pull = function() {
      return this.model.fetch();
    };

    QuotationOptions.prototype.render = function() {
      var template;
      template = optima.templates.quotation_options;
      $(this.el).find('.panel-body').html(template(this.model.toJSON()));
      this.blockEdit("Efectiva");
      this.blockEdit("Replanteada");
      this.blockEdit("Enviada");
      this.blockEdit("Entregada");
      return this;
    };

    QuotationOptions.prototype.blockEdit = function(status) {
      if (this.model.get('status') === status) {
        return $('.btn-hidden').hide();
      }
    };

    QuotationOptions.prototype.broadcastChange = function(msg) {
      this.storeActivity(this.id, msg);
      return socket.emit("quotation:change", this.id);
    };

    QuotationOptions.prototype.changeContact = function(contact_id) {
      this.model.save({
        contact_id: contact_id
      });
      return this.broadcastChange("cambio contacto");
    };

    QuotationOptions.prototype.changeType = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        type: val
      });
      return this.broadcastChange("cambio tipo a " + val);
    };

    QuotationOptions.prototype.changeTypeCategory = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        type_category: val
      });
      return this.broadcastChange("cambio categoría de tipo a " + val);
    };

    QuotationOptions.prototype.changeClientType = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        client_type: val
      });
      return this.broadcastChange("cambio tipo de cliente a " + val);
    };

    QuotationOptions.prototype.changeAdvisor = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        advisor: val
      });
      return this.broadcastChange("cambio asesor a " + val);
    };

    QuotationOptions.prototype.changeFoundUs = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        found_us: val
      });
      return this.broadcastChange("cambio como nos encontro a " + val);
    };

    QuotationOptions.prototype.changeOffer = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        offer: val
      });
      return this.broadcastChange("cambio ofrecer a " + val);
    };

    QuotationOptions.prototype.changeEffective = function() {
      this.model.save({
        status: 'Efectiva'
      });
      return this.broadcastChange("cambio estado a " + val);
    };

    QuotationOptions.prototype.changeDelivered = function(e) {
      this.model.save({
        status: 'Entregada'
      });
      return this.broadcastChange("cambio estado a entregada");
    };

    QuotationOptions.prototype.openComment = function(e) {
      e.preventDefault();
      return optima.quotationComment.render();
    };

    QuotationOptions.prototype.openNoEffective = function() {
      return optima.quotationNoEffective.render();
    };

    QuotationOptions.prototype.openNoSend = function(e) {
      e.preventDefault();
      return optima.quotationNoSend.render();
    };

    QuotationOptions.prototype.openMail = function(e) {
      e.preventDefault();
      return optima.quotationMail.render();
    };

    QuotationOptions.prototype.send = function(e) {
      var id;
      e.preventDefault();
      $(e.currentTarget).text('enviando...');
      id = this.model.get('id');
      return $.post("/api/v1/quotations/" + id + "/sendmail").done((function(_this) {
        return function() {
          alertify.success('Cotización enviada.');
          _this.updateQuotationSent();
          _this.broadcastChange("cambio estado a enviada");
          optima.quotation.fetch();
          return $(e.currentTarget).text('enviado');
        };
      })(this)).fail((function(_this) {
        return function() {
          alertify.error('Por favor llenar los campos necesarios antes de enviar.');
          return $(e.currentTarget).text('enviar');
        };
      })(this));
    };

    QuotationOptions.prototype.updateQuotationSent = function() {
      var created_sent_diff, diff, now, status;
      status = this.model.get('status');
      created_sent_diff = this.model.get('created_sent_diff');
      if (status !== "Efectiva" || status !== "Seguimiento") {
        if (!created_sent_diff || created_sent_diff < 0) {
          now = moment().format();
          diff = moment(now).diff(this.model.get('created_at'), 'minutes');
          return this.model.save({
            status: 'Enviada',
            no_effective: '',
            sent_at: now,
            created_sent_diff: diff
          });
        }
      }
    };

    QuotationOptions.prototype.checkResultsFields = function() {
      if (!this.model.get('type') && !this.model.get('type_category') && !this.model.get('client_type') && !this.model.get('advisor') && !this.model.get('found_us') && !this.model.get('offer')) {
        return false;
      } else {
        return true;
      }
    };

    QuotationOptions.prototype.serviceApprovalRemove = function(evt) {
      evt.preventDefault();
      return this.model.save({
        service_approval: 1
      });
    };

    QuotationOptions.prototype.serviceApprovalAdd = function(evt) {
      evt.preventDefault();
      return this.model.save({
        service_approval: 0
      });
    };

    return QuotationOptions;

  })(Backbone.View);
});
