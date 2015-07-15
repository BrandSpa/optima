var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationNoSend = (function(superClass) {
    extend(QuotationNoSend, superClass);

    function QuotationNoSend() {
      return QuotationNoSend.__super__.constructor.apply(this, arguments);
    }

    QuotationNoSend.prototype.el = $('#quotation-no-send-modal');

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
      t = optima.templates.quotation_no_send;
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
});
