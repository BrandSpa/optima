var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.models.QuotationProduct = (function(_super) {
    __extends(QuotationProduct, _super);

    function QuotationProduct() {
      return QuotationProduct.__super__.constructor.apply(this, arguments);
    }

    QuotationProduct.prototype.urlRoot = '/api/v1/products';

    return QuotationProduct;

  })(Backbone.Model);
  optima.collections.QuotationProducts = (function(_super) {
    __extends(QuotationProducts, _super);

    function QuotationProducts() {
      return QuotationProducts.__super__.constructor.apply(this, arguments);
    }

    QuotationProducts.prototype.model = optima.models.QuotationProduct;

    QuotationProducts.prototype.url = '/api/v1/products';

    return QuotationProducts;

  })(Backbone.Collection);
  optima.views.QuotationProductView = (function(_super) {
    __extends(QuotationProductView, _super);

    function QuotationProductView() {
      return QuotationProductView.__super__.constructor.apply(this, arguments);
    }

    QuotationProductView.prototype.tagName = 'tr';

    QuotationProductView.prototype.events = {
      'click a.delete': 'delete',
      'click a.edit': 'openEdit',
      'click a.duplicate': 'duplicate',
      'click .order': 'order',
      'click .unordered': 'unordered'
    };

    QuotationProductView.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationProductView.prototype.render = function() {
      var template;
      template = optima.templates.quotation_product;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    QuotationProductView.prototype.duplicate = function(e) {
      var collection, id, product, quotation_id;
      e.preventDefault();
      id = this.model.get('id');
      collection = this.collection;
      product = $.post("/api/v1/products/" + id + "/duplicate").done(this.addProduct);
      quotation_id = this.model.get('quotation_id');
      product = this.model.get('name');
      socket.emit("quotation-product", quotation_id);
      return this.storeActivity(quotation_id, "agrego el producto " + product);
    };

    QuotationProductView.prototype.addProduct = function(res) {
      return optima.quotationProducts.add([res]);
    };

    QuotationProductView.prototype["delete"] = function(e) {
      var el, product, quotation_id;
      e.preventDefault();
      el = $(e.currentTarget);
      quotation_id = this.model.get('quotation_id');
      product = this.model.get('name');
      this.model.destroy();
      socket.emit("quotation-product:delete", quotation_id);
      this.storeActivity(quotation_id, "elimino el producto " + product);
      return this.remove();
    };

    QuotationProductView.prototype.order = function(e) {
      e.preventDefault();
      return this.model.save({
        ordered: true
      });
    };

    QuotationProductView.prototype.unordered = function(e) {
      e.preventDefault();
      return this.model.save({
        ordered: false
      });
    };

    QuotationProductView.prototype.openEdit = function(e) {
      e.preventDefault();
      optima.quotationProductEdit = new optima.views.QuotationProductEdit({
        model: this.model
      });
      return optima.quotationProductEdit.render();
    };

    return QuotationProductView;

  })(Backbone.View);
  optima.views.QuotationProductsView = (function(_super) {
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
      this.listenTo(this.collection, 'add', this.addOne, this);
      pubsub.on("products:pull", this.getMore, this);
      return this.quotation_id = optima.pathArray[2];
    };

    QuotationProductsView.prototype.getMore = function(id) {
      return this.collection.fetch({
        data: {
          quotation_id: this.quotation_id
        }
      });
    };

    QuotationProductsView.prototype.addOne = function(model) {
      var quotationView;
      quotationView = new optima.views.QuotationProductView({
        model: model
      });
      return $(this.el).find('table .thead').after(quotationView.render().el);
    };

    QuotationProductsView.prototype.render = function() {
      var el;
      el = $(this.el);
      return this.collection.each(function(model) {
        var quotationView;
        quotationView = new optima.views.QuotationProductView({
          model: model
        });
        return el.find('table').append(quotationView.render().el);
      });
    };

    QuotationProductsView.prototype.openCreate = function(e) {
      var model, quotation_id, view;
      e.preventDefault();
      quotation_id = optima.pathArray[2];
      model = new optima.models.QuotationProduct;
      view = new optima.views.QuotationProductCreate({
        model: model
      });
      return view.render(quotation_id);
    };

    return QuotationProductsView;

  })(Backbone.View);
  optima.views.QuotationProductCreate = (function(_super) {
    __extends(QuotationProductCreate, _super);

    function QuotationProductCreate() {
      return QuotationProductCreate.__super__.constructor.apply(this, arguments);
    }

    QuotationProductCreate.prototype.el = $('#product-create-modal');

    QuotationProductCreate.prototype.events = {
      'click .quotation-product-save': 'store',
      'change .select-product-name': 'hideConfig',
      'click .modal-close': 'cancel'
    };

    QuotationProductCreate.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.stored);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    QuotationProductCreate.prototype.render = function(quotation_id) {
      var data, template;
      data = {
        quotation_id: quotation_id
      };
      template = optima.templates.product_create;
      $(this.el).find('.modal-content').html(template(data));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    QuotationProductCreate.prototype.serializeData = function(dataForm) {
      var lapse, price, quantity;
      lapse = dataForm['lapse'];
      quantity = dataForm['quantity'];
      price = dataForm['price'];
      dataForm['total'] = lapse * quantity * price;
      return dataForm;
    };

    QuotationProductCreate.prototype.store = function(e) {
      var data, dataForm;
      e.preventDefault();
      dataForm = $('.product-create-form').serializeJSON();
      data = this.serializeData(dataForm);
      return this.model.save(data, {
        wait: true
      });
    };

    QuotationProductCreate.prototype.stored = function(model) {
      var product, quotation_id;
      if (model.id) {
        optima.quotationProducts.add(model);
        quotation_id = model.get('quotation_id');
        product = model.get('name');
        socket.emit("quotation-product", quotation_id);
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
  return optima.views.QuotationProductEdit = (function(_super) {
    __extends(QuotationProductEdit, _super);

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
