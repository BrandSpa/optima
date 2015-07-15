var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationNoEffective = (function(superClass) {
    extend(QuotationNoEffective, superClass);

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
      t = optima.templates.quotation_no_effective;
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
});
