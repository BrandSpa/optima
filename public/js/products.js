var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.QuotationProduct = (function(_super) {
    __extends(QuotationProduct, _super);

    function QuotationProduct() {
      return QuotationProduct.__super__.constructor.apply(this, arguments);
    }

    QuotationProduct.prototype.urlRoot = '/api/v1/products';

    return QuotationProduct;

  })(Backbone.Model);
  optima.QuotationProducts = (function(_super) {
    __extends(QuotationProducts, _super);

    function QuotationProducts() {
      return QuotationProducts.__super__.constructor.apply(this, arguments);
    }

    QuotationProducts.prototype.model = optima.QuotationProduct;

    QuotationProducts.prototype.url = '/api/v1/products';

    return QuotationProducts;

  })(Backbone.Collection);
  optima.QuotationProductView = (function(_super) {
    __extends(QuotationProductView, _super);

    function QuotationProductView() {
      return QuotationProductView.__super__.constructor.apply(this, arguments);
    }

    QuotationProductView.prototype.tagName = 'tr';

    QuotationProductView.prototype.template = $('#quotation-product-template');

    QuotationProductView.prototype.events = {
      'click a.quotation-product-delete': 'delete',
      'click a.quotation-product-edit': 'openEdit',
      'click a.quotation-product-duplicate': 'duplicate'
    };

    QuotationProductView.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationProductView.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    QuotationProductView.prototype.duplicate = function(e) {
      var collection, id, product, quotation_id;
      e.preventDefault();
      id = this.model.get('id');
      collection = this.collection;
      product = $.post("/api/v1/products/" + id + "/duplicate").done(function(response) {
        return optima.quotationProducts.add([response]);
      });
      quotation_id = this.model.get('quotation_id');
      product = this.model.get('name');
      return this.storeActivity(quotation_id, "duplico el producto " + product);
    };

    QuotationProductView.prototype["delete"] = function(e) {
      var el, product, quotation_id;
      e.preventDefault();
      el = $(e.currentTarget);
      quotation_id = this.model.get('quotation_id');
      product = this.model.get('name');
      this.storeActivity(quotation_id, "elimino el producto " + product);
      this.model.destroy();
      return this.remove();
    };

    QuotationProductView.prototype.openEdit = function(e) {
      e.preventDefault();
      optima.quotationProductEdit = new optima.QuotationProductEdit({
        model: this.model
      });
      return optima.quotationProductEdit.render();
    };

    return QuotationProductView;

  })(Backbone.View);
  optima.QuotationProductsView = (function(_super) {
    __extends(QuotationProductsView, _super);

    function QuotationProductsView() {
      return QuotationProductsView.__super__.constructor.apply(this, arguments);
    }

    QuotationProductsView.prototype.el = $('#quotation-products');

    QuotationProductsView.prototype.events = {
      'click a.quotation-product-open-create': 'openCreate'
    };

    QuotationProductsView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render, this);
      return this.listenTo(this.collection, 'add', this.addOne, this);
    };

    QuotationProductsView.prototype.addOne = function(model) {
      var quotationView;
      quotationView = new optima.QuotationProductView({
        model: model
      });
      return $(this.el).find('table .thead').after(quotationView.render().el);
    };

    QuotationProductsView.prototype.render = function() {
      var el;
      el = $(this.el);
      return this.collection.each(function(model) {
        var quotationView;
        quotationView = new optima.QuotationProductView({
          model: model
        });
        return el.find('table').append(quotationView.render().el);
      });
    };

    QuotationProductsView.prototype.openCreate = function(e) {
      var model, quotation_id, view;
      e.preventDefault();
      quotation_id = optima.pathArray[2];
      model = new optima.QuotationProduct;
      view = new optima.QuotationProductCreate({
        model: model
      });
      return view.render(quotation_id);
    };

    return QuotationProductsView;

  })(Backbone.View);
  optima.QuotationProductCreate = (function(_super) {
    __extends(QuotationProductCreate, _super);

    function QuotationProductCreate() {
      return QuotationProductCreate.__super__.constructor.apply(this, arguments);
    }

    QuotationProductCreate.prototype.el = $('#product-create-modal');

    QuotationProductCreate.prototype.template = $('#product-create-template');

    QuotationProductCreate.prototype.events = {
      'click .quotation-product-save': 'store',
      'change .select-product-name': 'hideConfig',
      'click .modal-close': 'cancel'
    };

    QuotationProductCreate.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.added);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    QuotationProductCreate.prototype.store = function(e) {
      var dataForm, lapse, price, quantity;
      e.preventDefault();
      dataForm = $('.product-create-form').serializeJSON();
      lapse = dataForm['lapse'];
      quantity = dataForm['quantity'];
      price = dataForm['price'];
      dataForm['total'] = lapse * quantity * price;
      return this.model.save(dataForm, {
        wait: true
      });
    };

    QuotationProductCreate.prototype.render = function(quotation_id) {
      var data, source, template;
      data = {
        quotation_id: quotation_id
      };
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.modal-content').html(template(data));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    QuotationProductCreate.prototype.added = function(model) {
      var product, quotation_id;
      if (model.id) {
        optima.quotationProducts.add(model);
        quotation_id = model.get('quotation_id');
        product = model.get('name');
        this.storeActivity(quotation_id, "agrego el producto " + product);
        return this.close();
      }
    };

    QuotationProductCreate.prototype.hideConfig = function(e) {
      var container, productNames, val;
      val = $(e.currentTarget).val();
      container = $(this.el).find('.config');
      productNames = ['Desktops', 'Laptops', 'Apple', 'Servers'];
      if ($.inArray(val, productNames) > -1) {
        return container.fadeIn();
      } else {
        return container.fadeOut();
      }
    };

    QuotationProductCreate.prototype.close = function() {
      return this.closeModal();
    };

    QuotationProductCreate.prototype.cancel = function(e) {
      e.preventDefault();
      return this.close();
    };

    return QuotationProductCreate;

  })(Backbone.View);
  return optima.QuotationProductEdit = (function(_super) {
    __extends(QuotationProductEdit, _super);

    function QuotationProductEdit() {
      return QuotationProductEdit.__super__.constructor.apply(this, arguments);
    }

    QuotationProductEdit.prototype.el = $('#product-create-modal');

    QuotationProductEdit.prototype.template = $('#product-create-template');

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
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
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
