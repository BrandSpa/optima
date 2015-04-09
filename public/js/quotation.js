var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.QuotationAppView = (function(_super) {
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
      optima.contact = new optima.Contact({
        id: contact_id
      });
      optima.contact.fetch();
      return optima.quotationContact = new optima.QuotationContact({
        model: optima.contact
      });
    };

    return QuotationAppView;

  })(Backbone.View);
  optima.QuotationOptions = (function(_super) {
    __extends(QuotationOptions, _super);

    function QuotationOptions() {
      return QuotationOptions.__super__.constructor.apply(this, arguments);
    }

    QuotationOptions.prototype.el = $('#quotation-options');

    QuotationOptions.prototype.template = $('#quotation-options-template');

    QuotationOptions.prototype.events = {
      'change.fs select.quotation-select-type': 'changeType',
      'change.fs select.quotation-select-type-category': 'changeTypeCategory',
      'change.fs select.quotation-select-client-type': 'changeClientType',
      'change.fs select.quotation-select-advisor': 'changeAdvisor',
      'change.fs select.quotation-select-found-us': 'changeFoundUs',
      'change.fs select.quotation-select-offer': 'changeOffer',
      'click a.quotation-change-effective': 'changeEffective',
      'click a.quotation-change-delivered': 'changeDelivered',
      'click a.quotation-open-comment': 'openComment',
      'click a.quotation-open-no-effective': 'openNoEffective',
      'click a.quotation-open-no-send': 'openNoSend',
      'click a.quotation-open-mail': 'openMail',
      'click a.quotation-send': 'send'
    };

    QuotationOptions.prototype.initialize = function() {
      this.listenTo(this.model, 'change', this.render);
      return this.id = this.model.get('id');
    };

    QuotationOptions.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.panel-body').html(template(this.model.toJSON()));
      if (this.model.get('status') === 'Replanteada' || this.model.get('status') === 'Efectiva') {
        $('.quotation-options').remove();
        $('.btn-hidden').remove();
      }
      return this;
    };

    QuotationOptions.prototype.changeType = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        type: val
      });
      return this.storeActivity(this.id, "cambio tipo a " + val);
    };

    QuotationOptions.prototype.changeTypeCategory = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        type_category: val
      });
      return this.storeActivity(this.id, "cambio categoría de tipo a " + val);
    };

    QuotationOptions.prototype.changeClientType = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        client_type: val
      });
      return this.storeActivity(this.id, "cambio tipo de cliente a " + val);
    };

    QuotationOptions.prototype.changeAdvisor = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        advisor: val
      });
      return this.storeActivity(this.id, "cambio asesor a " + val);
    };

    QuotationOptions.prototype.changeFoundUs = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        found_us: val
      });
      return this.storeActivity(this.id, "cambio como nos encontro a " + val);
    };

    QuotationOptions.prototype.changeOffer = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        offer: val
      });
      return this.storeActivity(this.id, "cambio ofrecer a " + val);
    };

    QuotationOptions.prototype.changeEffective = function(e) {
      e.preventDefault();
      this.model.save({
        status: 'Efectiva'
      });
      return this.storeActivity(this.id, "cambio estado a " + val);
    };

    QuotationOptions.prototype.changeDelivered = function(e) {
      e.preventDefault();
      this.model.save({
        status: 'Entregada'
      });
      return this.storeActivity(this.id, "cambio estado a " + val);
    };

    QuotationOptions.prototype.openComment = function(e) {
      e.preventDefault();
      return optima.quotationComment.render();
    };

    QuotationOptions.prototype.openNoEffective = function(e) {
      e.preventDefault();
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
      id = this.model.get('id');
      $.post("/quotations/" + id + "/sendmail");
      this.model.save({
        status: 'Enviada',
        no_effective: ''
      });
      this.storeActivity(this.id, "cambio estado a Enviada");
      return optima.quotation.fetch();
    };

    return QuotationOptions;

  })(Backbone.View);
  optima.QuotationComment = (function(_super) {
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
      this.activity = new optima.Activity;
      return this.id = this.model.get('id');
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
      $(this.el).modal('hide');
      return this.storeActivity(this.id, "agrego un comentario");
    };

    return QuotationComment;

  })(Backbone.View);
  optima.QuotationNoEffective = (function(_super) {
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
      this.activity = new optima.Activity;
      return this.id = this.model.get('id');
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
      return this.storeActivity(this.id, "cambio estado a no efectiva");
    };

    return QuotationNoEffective;

  })(Backbone.View);
  optima.QuotationNoSend = (function(_super) {
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
      this.activity = new optima.Activity;
      return this.id = this.model.get('id');
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
      return this.storeActivity(this.id, "cambio estado a no enviada");
    };

    return QuotationNoSend;

  })(Backbone.View);
  optima.QuotationMail = (function(_super) {
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
      this.activity = new optima.Activity;
      return this.id = this.model.get('id');
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
      return this.storeActivity(this.id, "agrego email");
    };

    return QuotationMail;

  })(Backbone.View);
  return optima.QuotationTimes = (function(_super) {
    __extends(QuotationTimes, _super);

    function QuotationTimes() {
      return QuotationTimes.__super__.constructor.apply(this, arguments);
    }

    QuotationTimes.prototype.el = $('#quotation-times');

    QuotationTimes.prototype.template = $('#quotation-times-template');

    QuotationTimes.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationTimes.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.table-responsive').html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    return QuotationTimes;

  })(Backbone.View);
});
