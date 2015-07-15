var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationServicesView = (function(superClass) {
    extend(QuotationServicesView, superClass);

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
      console.log(this.quotation_id);
      return pubsub.on("services:pull", this.getMore, this);
    };

    QuotationServicesView.prototype.getMore = function(id) {
      return _.delay(this.pull(id), 3000);
    };

    QuotationServicesView.prototype.pull = function(quotationId) {
      var _this;
      _this = this;
      return $.get("/api/v1/quotations/" + quotationId + "/services").done(function(models) {
        return _this.collection.reset(models);
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
      var _this, service_id;
      e.preventDefault();
      service_id = $('#quotation-service-list').find('select').val();
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/api/v1/quotations/" + this.quotation_id + "/services",
        data: {
          service_id: service_id
        },
        success: function(res) {
          socket.emit("quotation-service", res.id);
          return _this.storeActivity(_this.quotation_id, "agrego un servicio");
        },
        error: function(xhr, status, err) {
          var error;
          error = JSON.parse(xhr.responseText);
          return alertify.error(error.error);
        }
      });
    };

    return QuotationServicesView;

  })(Backbone.View);
});
