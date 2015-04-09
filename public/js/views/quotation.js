var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.views.QuotationAppView = (function(_super) {
    __extends(QuotationAppView, _super);

    function QuotationAppView() {
      return QuotationAppView.__super__.constructor.apply(this, arguments);
    }

    QuotationAppView.prototype.el = $('#quotation');

    QuotationAppView.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.getContact);
    };

    QuotationAppView.prototype.getContact = function() {
      var contact_id;
      contact_id = this.model.get('contact_id');
      optima.contact = new optima.models.Contact({
        id: contact_id
      });
      optima.contact.fetch();
      return optima.quotationContact = new optima.views.QuotationContact({
        model: optima.contact
      });
    };

    return QuotationAppView;

  })(Backbone.View);
  optima.views.QuotationStatus = (function(_super) {
    __extends(QuotationStatus, _super);

    function QuotationStatus() {
      return QuotationStatus.__super__.constructor.apply(this, arguments);
    }

    QuotationStatus.prototype.el = $('#quotation-options');

    QuotationStatus.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationStatus.prototype.render = function() {
      var template;
      template = optima.templates.quotation_status;
      return $(this.el).find('.panel-heading').html(template(this.model.toJSON()));
    };

    return QuotationStatus;

  })(Backbone.View);
  optima.views.QuotationOptions = (function(_super) {
    __extends(QuotationOptions, _super);

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
      'click .send': 'send'
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
      if (this.model.get('status') === 'Replanteada' || this.model.get('status') === 'Efectiva') {
        $('.quotation-options').remove();
        $('.btn-hidden').remove();
      }
      return this;
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
      var diff, id, now;
      e.preventDefault();
      id = this.model.get('id');
      $.post("/quotations/" + id + "/sendmail");
      now = moment().format();
      diff = moment(now).diff(this.model.get('created_at'), 'minutes');
      this.model.save({
        status: 'Enviada',
        no_effective: '',
        sent_at: now,
        created_sent_diff: diff
      });
      this.broadcastChange("cambio estado a enviada");
      return optima.quotation.fetch();
    };

    return QuotationOptions;

  })(Backbone.View);
  optima.views.QuotationComment = (function(_super) {
    __extends(QuotationComment, _super);

    function QuotationComment() {
      return QuotationComment.__super__.constructor.apply(this, arguments);
    }

    QuotationComment.prototype.el = $('#quotation-comment-modal');

    QuotationComment.prototype.template = $('#quotation-comment-template');

    QuotationComment.prototype.events = {
      'click a.quotation-comment-save': 'save'
    };

    QuotationComment.prototype.initialize = function() {
      return this.id = this.model.get('id');
    };

    QuotationComment.prototype.broadcastChange = function(msg) {
      socket.emit("quotation:change", this.id);
      return this.storeActivity(this.id, msg);
    };

    QuotationComment.prototype.render = function() {
      var source, t;
      source = $(this.template).html();
      t = Handlebars.compile(source);
      $(this.el).find('.modal-content').html(t(this.model.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    QuotationComment.prototype.save = function(e) {
      var comment;
      e.preventDefault();
      comment = $('#quotation-comment-text').val();
      this.model.set({
        comment: comment
      });
      this.model.save();
      this.broadcastChange("agrego un comentario");
      return $(this.el).modal('hide');
    };

    return QuotationComment;

  })(Backbone.View);
  optima.views.QuotationNoEffective = (function(_super) {
    __extends(QuotationNoEffective, _super);

    function QuotationNoEffective() {
      return QuotationNoEffective.__super__.constructor.apply(this, arguments);
    }

    QuotationNoEffective.prototype.el = $('#quotation-no-effective-modal');

    QuotationNoEffective.prototype.template = $('#quotation-no-effective-template');

    QuotationNoEffective.prototype.events = {
      'click a.quotation-no-effective-save': 'save'
    };

    QuotationNoEffective.prototype.initialize = function() {
      this.activity = new optima.models.Activity;
      return this.id = this.model.get('id');
    };

    QuotationNoEffective.prototype.broadcastChange = function(msg) {
      socket.emit("quotation:change", this.id);
      return this.storeActivity(this.id, msg);
    };

    QuotationNoEffective.prototype.render = function() {
      var el, source, t;
      source = $(this.template).html();
      t = Handlebars.compile(source);
      el = $(this.el);
      el.find('.modal-content').html(t(this.model.toJSON()));
      return el.modal({
        backdrop: 'static'
      });
    };

    QuotationNoEffective.prototype.save = function(e) {
      var cause, note;
      e.preventDefault();
      cause = $('#quotation-no-effective-select').val();
      note = $('#no_effective_note').val();
      this.model.set({
        status: "No efectiva",
        status_cause: cause,
        status_note: note
      });
      this.model.save();
      $(this.el).modal('hide');
      return this.broadcastChange("cambio estado a no efectiva");
    };

    return QuotationNoEffective;

  })(Backbone.View);
  optima.views.QuotationNoSend = (function(_super) {
    __extends(QuotationNoSend, _super);

    function QuotationNoSend() {
      return QuotationNoSend.__super__.constructor.apply(this, arguments);
    }

    QuotationNoSend.prototype.el = $('#quotation-no-send-modal');

    QuotationNoSend.prototype.template = $('#quotation-no-send-template');

    QuotationNoSend.prototype.events = {
      'click a.quotation-no-send-save': 'save'
    };

    QuotationNoSend.prototype.initialize = function() {
      this.activity = new optima.models.Activity;
      return this.id = this.model.get('id');
    };

    QuotationNoSend.prototype.broadcastChange = function(msg) {
      socket.emit("quotation:change", this.id);
      return this.storeActivity(this.id, msg);
    };

    QuotationNoSend.prototype.render = function() {
      var el, source, t;
      source = $(this.template).html();
      t = Handlebars.compile(source);
      el = $(this.el);
      el.find('.modal-content').html(t(this.model.toJSON()));
      return el.modal({
        backdrop: 'static'
      });
    };

    QuotationNoSend.prototype.save = function(e) {
      var cause, note;
      e.preventDefault();
      cause = $('#quotation-no-send-select').val();
      note = $('#no_send_note').val();
      this.model.set({
        status: "No enviada",
        status_cause: cause,
        status_note: note
      });
      this.model.save();
      $(this.el).modal('hide');
      return this.broadcastChange("cambio estado a no enviada");
    };

    return QuotationNoSend;

  })(Backbone.View);
  optima.views.QuotationMail = (function(_super) {
    __extends(QuotationMail, _super);

    function QuotationMail() {
      return QuotationMail.__super__.constructor.apply(this, arguments);
    }

    QuotationMail.prototype.el = $('#quotation-mail-modal');

    QuotationMail.prototype.template = $('#quotation-mail-template');

    QuotationMail.prototype.events = {
      'click a.quotation-mail-save': 'save'
    };

    QuotationMail.prototype.initialize = function() {
      this.activity = new optima.models.Activity;
      return this.id = this.model.get('id');
    };

    QuotationMail.prototype.broadcastChange = function(msg) {
      socket.emit("quotation:change", this.id);
      return this.storeActivity(this.id, msg);
    };

    QuotationMail.prototype.render = function() {
      var source, t;
      source = $(this.template).html();
      t = Handlebars.compile(source);
      $(this.el).find('.modal-content').html(t(this.model.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    QuotationMail.prototype.save = function(e) {
      var data;
      e.preventDefault();
      data = $('#quotation-mail-form').serializeJSON();
      this.model.set(data);
      this.model.save();
      $(this.el).modal('hide');
      return this.broadcastChange("agrego email");
    };

    return QuotationMail;

  })(Backbone.View);
  return optima.views.QuotationTimes = (function(_super) {
    __extends(QuotationTimes, _super);

    function QuotationTimes() {
      return QuotationTimes.__super__.constructor.apply(this, arguments);
    }

    QuotationTimes.prototype.el = $('#quotation-times');

    QuotationTimes.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationTimes.prototype.render = function() {
      var template;
      template = optima.templates.quotation_time;
      $(this.el).find('.table-responsive').html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    return QuotationTimes;

  })(Backbone.View);
});
