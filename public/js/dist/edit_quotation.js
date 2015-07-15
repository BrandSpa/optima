var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationProductEdit = (function(superClass) {
    extend(QuotationProductEdit, superClass);

    function QuotationProductEdit() {
      return QuotationProductEdit.__super__.constructor.apply(this, arguments);
    }

    QuotationProductEdit.prototype.el = $('#product-create-modal');

    QuotationProductEdit.prototype.events = {
      'click .quotation-product-update': 'update',
      'click .modal-close': 'cancel'
    };

    QuotationProductEdit.prototype.initialize = function() {
      var id;
      this.listenTo(this.model, 'change', this.updated);
      return id = this.model.get('quotation_id');
    };

    QuotationProductEdit.prototype.render = function() {
      var template;
      template = optima.templates.product_create;
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    QuotationProductEdit.prototype.update = function(e) {
      var dataForm, form, lapse, price, quantity;
      e.preventDefault();
      form = $('.product-create-form');
      dataForm = form.serializeJSON();
      lapse = dataForm['lapse'];
      quantity = dataForm['quantity'];
      price = dataForm['price'];
      dataForm['total'] = lapse * quantity * price;
      return this.model.save(dataForm, {
        wait: true
      });
    };

    QuotationProductEdit.prototype.updated = function(model) {
      var product, quotation_id;
      if (model.id) {
        quotation_id = model.get('quotation_id');
        product = model.get('name');
        socket.emit("quotation-product", quotation_id);
        this.storeActivity(quotation_id, "edito el producto " + product);
        return this.closeModal();
      }
    };

    QuotationProductEdit.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return QuotationProductEdit;

  })(Backbone.View);
});
