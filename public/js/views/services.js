var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.models.Service = (function(_super) {
    __extends(Service, _super);

    function Service() {
      return Service.__super__.constructor.apply(this, arguments);
    }

    Service.prototype.urlRoot = '/api/v1/services';

    return Service;

  })(Backbone.Model);
  optima.collections.Services = (function(_super) {
    __extends(Services, _super);

    function Services() {
      return Services.__super__.constructor.apply(this, arguments);
    }

    Services.prototype.url = '/api/v1/services';

    Services.prototype.model = optima.models.Service;

    return Services;

  })(Backbone.Collection);
  optima.views.ServiceView = (function(_super) {
    __extends(ServiceView, _super);

    function ServiceView() {
      return ServiceView.__super__.constructor.apply(this, arguments);
    }

    ServiceView.prototype.tagName = 'tr';

    ServiceView.prototype.events = {
      'click .service-open-edit': 'openEdit',
      'click .service-delete': 'delete'
    };

    ServiceView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    ServiceView.prototype.render = function() {
      var template;
      template = optima.templates.service;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    ServiceView.prototype.openEdit = function(e) {
      var edit;
      e.preventDefault();
      edit = new optima.views.ServiceEdit({
        model: this.model
      });
      return edit.render();
    };

    ServiceView.prototype["delete"] = function(e) {
      e.preventDefault();
      this.model.destroy();
      return this.remove();
    };

    return ServiceView;

  })(Backbone.View);
  optima.views.ServicesView = (function(_super) {
    __extends(ServicesView, _super);

    function ServicesView() {
      return ServicesView.__super__.constructor.apply(this, arguments);
    }

    ServicesView.prototype.el = $('#services');

    ServicesView.prototype.events = {
      'click .service-see-more': 'seeMore',
      'click .service-open-create': 'openCreate',
      'submit .service-search': 'search'
    };

    ServicesView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      return this.listenTo(this.collection, 'add', this.addOne, this);
    };

    ServicesView.prototype.addOne = function(model) {
      var view;
      view = new optima.views.ServiceView({
        model: model
      });
      return $(this.el).find('table .thead').after(view.render().el);
    };

    ServicesView.prototype.render = function() {
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.ServiceView({
          model: model
        });
        $(this.el).find('table').append(view.render().el);
        return $(this.el).find('.table-responsive').slimScroll({
          height: '400px'
        });
      }, this);
    };

    ServicesView.prototype.seeMore = function(e) {
      var el, more, offset;
      e.preventDefault();
      el = e.currentTarget;
      offset = $(el).data('offset');
      more = offset + 10;
      this.collection.fetch({
        data: {
          offset: more
        }
      });
      return $(el).data('offset', more);
    };

    ServicesView.prototype.openCreate = function(e) {
      var view;
      e.preventDefault();
      view = new optima.views.ServiceCreate({
        model: new optima.models.Service
      });
      return view.render();
    };

    ServicesView.prototype.search = function(e) {
      var query;
      e.preventDefault();
      query = $('.service-query').val();
      return this.collection.fetch({
        data: {
          query: query
        }
      });
    };

    return ServicesView;

  })(Backbone.View);
  optima.views.ServiceCreate = (function(_super) {
    __extends(ServiceCreate, _super);

    function ServiceCreate() {
      return ServiceCreate.__super__.constructor.apply(this, arguments);
    }

    ServiceCreate.prototype.el = $('#service-create-modal');

    ServiceCreate.prototype.events = {
      'click .service-create-store': 'store',
      'click .modal-close': 'closeModal'
    };

    ServiceCreate.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.stored);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    ServiceCreate.prototype.render = function() {
      var template;
      template = optima.templates.service_create;
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
      optima.summernote(this.el);
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    ServiceCreate.prototype.store = function(e) {
      var dataForm;
      e.preventDefault();
      dataForm = $(this.el).find('form').serializeJSON();
      dataForm['text'] = $(this.el).find('form [name="text"]').code();
      return this.model.save(dataForm, {
        wait: true
      });
    };

    ServiceCreate.prototype.stored = function(model) {
      if (model.id) {
        optima.services.add(model);
        return this.closeModal();
      }
    };

    return ServiceCreate;

  })(Backbone.View);
  optima.views.ServiceEdit = (function(_super) {
    __extends(ServiceEdit, _super);

    function ServiceEdit() {
      return ServiceEdit.__super__.constructor.apply(this, arguments);
    }

    ServiceEdit.prototype.el = $('#service-edit-modal');

    ServiceEdit.prototype.events = {
      'click .service-save-update': 'update',
      'click .modal-close': 'cancel'
    };

    ServiceEdit.prototype.initialize = function() {
      return this.listenTo(this.model, 'sync', this.synced);
    };

    ServiceEdit.prototype.render = function() {
      var template;
      template = optima.templates.service_edit;
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
      optima.summernote(this.el);
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    ServiceEdit.prototype.update = function(e) {
      var dataForm, el;
      e.preventDefault();
      el = $(this.el);
      dataForm = el.find('form').serializeJSON();
      dataForm['text'] = el.find('form [name="text"]').code();
      return this.model.save(dataForm, {
        wait: true
      });
    };

    ServiceEdit.prototype.synced = function(model) {
      if (model.id) {
        pubsub.trigger('service:update');
        return this.closeModal();
      }
    };

    ServiceEdit.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return ServiceEdit;

  })(Backbone.View);
  optima.views.QuotationServiceView = (function(_super) {
    __extends(QuotationServiceView, _super);

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
      var id;
      e.preventDefault();
      id = this.model.get('id');
      $.ajax({
        method: 'DELETE',
        url: "/api/v1/services/" + id,
        data: {
          quotation_id: this.quotation_id
        }
      });
      socket.emit("quotation-service", this.quotation_id);
      this.storeActivity(this.quotation_id, "elimino un servicio");
      return this.remove();
    };

    return QuotationServiceView;

  })(Backbone.View);
  optima.views.QuotationServicesView = (function(_super) {
    __extends(QuotationServicesView, _super);

    function QuotationServicesView() {
      return QuotationServicesView.__super__.constructor.apply(this, arguments);
    }

    QuotationServicesView.prototype.el = $('#quotation-services');

    QuotationServicesView.prototype.events = {
      'click a.quotation-product-open-create': 'openCreate',
      'click a.quotation-service-attach': 'attach'
    };

    QuotationServicesView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.add, this);
      this.quotation_id = optima.pathArray[2];
      return pubsub.on("services:pull", this.getMore, this);
    };

    QuotationServicesView.prototype.getMore = function(id) {
      return _.delay(this.pull(id), 3000);
    };

    QuotationServicesView.prototype.pull = function(id) {
      return this.collection.fetch({
        reset: true,
        data: {
          quotation_id: id
        }
      });
    };

    QuotationServicesView.prototype.add = function(model) {
      var view;
      view = new optima.views.QuotationServiceView({
        model: model
      });
      return $(this.el).find('table').append(view.render().el);
    };

    QuotationServicesView.prototype.render = function() {
      var table;
      table = $(this.el).find('table');
      table.empty();
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.QuotationServiceView({
          model: model
        });
        return table.append(view.render().el);
      }, this);
    };

    QuotationServicesView.prototype.openCreate = function(e) {
      var view;
      e.preventDefault();
      view = new optima.views.QuotationServiceCreate;
      return view.render();
    };

    QuotationServicesView.prototype.attach = function(e) {
      var service_id;
      e.preventDefault();
      service_id = $('#quotation-service-list').find('select').val();
      this.collection.create({
        quotation_id: this.quotation_id,
        service_id: service_id
      }, {
        success: this.notify
      });
      return this.storeActivity(this.quotation_id, "agrego un servicio");
    };

    QuotationServicesView.prototype.notify = function(res) {
      return socket.emit("quotation-service", res.toJSON().quotation_id);
    };

    return QuotationServicesView;

  })(Backbone.View);
  optima.views.QuotationServiceCreate = (function(_super) {
    __extends(QuotationServiceCreate, _super);

    function QuotationServiceCreate() {
      return QuotationServiceCreate.__super__.constructor.apply(this, arguments);
    }

    QuotationServiceCreate.prototype.el = $('#quotation-service-create-modal');

    QuotationServiceCreate.prototype.template = $('#quotation-service-create-template');

    QuotationServiceCreate.prototype.events = {
      'submit #service-search-form': 'search',
      'click .modal-close': 'close'
    };

    QuotationServiceCreate.prototype.render = function(quotation_id) {
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

    QuotationServiceCreate.prototype.search = function(e) {
      var collection, query, results;
      e.preventDefault();
      query = $('.service-query').val();
      collection = new optima.collections.Services;
      collection.fetch({
        reset: true,
        data: {
          query: query
        }
      });
      return results = new optima.views.ServiceResults({
        collection: collection
      });
    };

    QuotationServiceCreate.prototype.close = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return QuotationServiceCreate;

  })(Backbone.View);
  optima.views.ServiceResult = (function(_super) {
    __extends(ServiceResult, _super);

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
      template = Handlebars.compile(source);
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
  optima.views.ServiceResults = (function(_super) {
    __extends(ServiceResults, _super);

    function ServiceResults() {
      return ServiceResults.__super__.constructor.apply(this, arguments);
    }

    ServiceResults.prototype.el = $('#quotation-service-create-modal');

    ServiceResults.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    ServiceResults.prototype.render = function() {
      var el;
      $(el).find('table').html('');
      el = $(this.el);
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.ServiceResult({
          model: model
        });
        return $(el).find('table').append(view.render().el);
      });
    };

    ServiceResults.prototype.close = function() {
      return this.remove();
    };

    return ServiceResults;

  })(Backbone.View);
  return optima.views.QuotationServiceSelect = (function(_super) {
    __extends(QuotationServiceSelect, _super);

    function QuotationServiceSelect() {
      return QuotationServiceSelect.__super__.constructor.apply(this, arguments);
    }

    QuotationServiceSelect.prototype.el = $('#quotation-service-list');

    QuotationServiceSelect.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    QuotationServiceSelect.prototype.render = function() {
      var template;
      template = optima.templates.service_list;
      return $(this.el).html(template(this.collection.toJSON()));
    };

    return QuotationServiceSelect;

  })(Backbone.View);
});
