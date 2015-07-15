var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationServiceCreate = (function(superClass) {
    extend(QuotationServiceCreate, superClass);

    function QuotationServiceCreate() {
      return QuotationServiceCreate.__super__.constructor.apply(this, arguments);
    }

    QuotationServiceCreate.prototype.el = $('#quotation-service-create-modal');

    QuotationServiceCreate.prototype.events = {
      'submit #service-search-form': 'search',
      'keydown .service-query': 'autocomplete',
      'click .modal-close': 'close'
    };

    QuotationServiceCreate.prototype.render = function(quotation_id) {
      var data, source, template;
      data = {
        quotation_id: quotation_id
      };
      source = $(this.template).html();
      template = optima.templates.service_attach;
      $(this.el).find('.modal-content').html(template(data));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    QuotationServiceCreate.prototype.autocomplete = function(e) {
      var $el, collection, query, results;
      $el = $(e.currentTarget);
      query = $el.val();
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

    QuotationServiceCreate.prototype.search = function(e) {
      var collection, query, results;
      e.preventDefault();
      query = $('.service-query').val();
      if (query.length > 2) {
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
      }
    };

    QuotationServiceCreate.prototype.close = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return QuotationServiceCreate;

  })(Backbone.View);
});
