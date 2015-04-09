var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.Quotation = (function(_super) {
    __extends(Quotation, _super);

    function Quotation() {
      return Quotation.__super__.constructor.apply(this, arguments);
    }

    Quotation.prototype.urlRoot = '/api/v1/quotations';

    return Quotation;

  })(Backbone.Model);
  optima.Quotations = (function(_super) {
    __extends(Quotations, _super);

    function Quotations() {
      return Quotations.__super__.constructor.apply(this, arguments);
    }

    Quotations.prototype.model = optima.Quotation;

    Quotations.prototype.url = '/api/v1/quotations';

    return Quotations;

  })(Backbone.Collection);
  optima.QuotationView = (function(_super) {
    __extends(QuotationView, _super);

    function QuotationView() {
      return QuotationView.__super__.constructor.apply(this, arguments);
    }

    QuotationView.prototype.tagName = 'tr';

    QuotationView.prototype.template = $('#quotation-template');

    QuotationView.prototype.events = {
      'click .quotation-open-edit': 'openquotationEdit',
      'click .quotation-open-contacts': 'openContacts',
      'click .quotation-company-select': 'companySelect',
      'click .quotation-contact-select': 'contactSelect'
    };

    QuotationView.prototype.render = function() {
      var source, t;
      source = this.template.html();
      t = Handlebars.compile(source);
      $(this.el).html(t(this.model.toJSON()));
      return this;
    };

    QuotationView.prototype.openEdit = function(e) {
      var edit;
      e.preventDefault();
      edit = new optima.QuotationEdit({
        model: this.model
      });
      return edit.render();
    };

    QuotationView.prototype.openContacts = function(e) {
      e.preventDefault();
      return optima.quotationContacts.render(this.model);
    };

    QuotationView.prototype.companySelect = function(e) {
      var company;
      e.preventDefault();
      company = this.model.get('company');
      return $.post('/companies/session/' + company.id).done(function() {
        return window.location.href = "/contacts/create";
      });
    };

    QuotationView.prototype.contactSelect = function(e) {
      var company, contact;
      e.preventDefault();
      company = this.model.get('company');
      contact = this.model.get('contact');
      $.post('/companies/session/' + company.id);
      return $.post('/contacts/session/' + contact.id).done(function() {
        return window.location.href = "/products/create";
      });
    };

    return QuotationView;

  })(Backbone.View);
  optima.QuotationsView = (function(_super) {
    __extends(QuotationsView, _super);

    function QuotationsView() {
      return QuotationsView.__super__.constructor.apply(this, arguments);
    }

    QuotationsView.prototype.el = $('#quotations');

    QuotationsView.prototype.events = {
      'click .quotation-see-more': 'seeMore',
      'submit .quotation-search': 'search',
      'click .quotation-open-quote': 'openQuote'
    };

    QuotationsView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render, this);
      return this.listenTo(this.collection, 'add', this.addOne, this);
    };

    QuotationsView.prototype.addOne = function(model) {
      var quotationView;
      quotationView = new optima.QuotationView({
        model: model
      });
      $(this.el).find('table .thead').after(quotationView.render().el);
      $('.contact-popover').popover({
        html: true,
        trigger: 'hover'
      });
      $('.timeago-popover').popover({
        html: true,
        trigger: 'hover'
      });
      return $(this.el).find('span.timeago').timeago();
    };

    QuotationsView.prototype.render = function() {
      return this.collection.each(function(model) {
        var quotationView;
        quotationView = new optima.QuotationView({
          model: model
        });
        $(this.el).find('table').append(quotationView.render().el);
        $(this.el).find('.table-responsive').slimScroll({
          height: '400px'
        });
        $('.contact-popover').popover({
          html: true,
          trigger: 'hover'
        });
        $('.timeago-popover').popover({
          html: true,
          trigger: 'hover'
        });
        return $(this.el).find('span.timeago').timeago();
      }, this);
    };

    QuotationsView.prototype.seeMore = function(e) {
      var c, el, more, offset;
      e.preventDefault();
      el = e.currentTarget;
      offset = $(el).data('offset');
      more = offset + 10;
      c = this.collection;
      this.collection.fetch({
        remove: false,
        data: {
          offset: more
        }
      });
      return $(el).data('offset', more);
    };

    QuotationsView.prototype.search = function(e) {
      var query;
      e.preventDefault();
      query = $('.quotation-query').val();
      return this.collection.fetch({
        data: {
          query: query
        }
      });
    };

    QuotationsView.prototype.openQuote = function(e) {
      var model;
      e.preventDefault();
      model = new optima.Company;
      optima.companyQuoteCreate = new optima.CompanyQuoteCreate({
        model: model
      });
      return optima.companyQuoteCreate.render();
    };

    return QuotationsView;

  })(Backbone.View);
  optima.QuotationsFilteredView = (function(_super) {
    __extends(QuotationsFilteredView, _super);

    function QuotationsFilteredView() {
      return QuotationsFilteredView.__super__.constructor.apply(this, arguments);
    }

    QuotationsFilteredView.prototype.el = $('#quotations');

    QuotationsFilteredView.prototype.events = {
      'change .quotation-filter-status': 'filterByStatus',
      'change .quotation-filter-advisor': 'filterByAdvisor',
      'change .quotation-filter-client-type': 'filterByClientType'
    };

    QuotationsFilteredView.prototype.renderFiltered = function(collection) {
      $(this.el).find('table').html('');
      return collection.each(function(model) {
        var quotationView;
        quotationView = new optima.QuotationView({
          model: model
        });
        return $(this.el).find('table').append(quotationView.render().el);
      }, this);
    };

    QuotationsFilteredView.prototype.filterByStatus = function(e) {
      var advisor, client_type, collection, el, filters, models, status;
      el = $(e.currentTarget);
      advisor = el.data('advisor');
      client_type = el.data('clientType');
      status = el.val();
      if (advisor && client_type) {
        filters = {
          status: status,
          advisor: advisor,
          client_type: client_type
        };
      } else if (advisor) {
        filters = {
          status: status,
          advisor: advisor
        };
      } else if (client_type) {
        filters = {
          status: status,
          client_type: client_type
        };
      } else {
        filters = {
          status: status
        };
      }
      console.log(filters);
      models = this.collection.where(filters);
      collection = new optima.Quotations(models);
      this.renderFiltered(collection);
      return $('#quotations-filters select').attr('data-status', status);
    };

    QuotationsFilteredView.prototype.filterByAdvisor = function(e) {
      var advisor, client_type, collection, el, filters, models, status;
      el = $(e.currentTarget);
      advisor = el.val();
      client_type = el.data('clientType');
      status = el.data('status');
      if (status && client_type) {
        filters = {
          advisor: advisor,
          status: status,
          client_type: client_type
        };
      } else if (status) {
        filters = {
          advisor: advisor,
          status: status
        };
      } else if (client_type) {
        filters = {
          advisor: advisor,
          client_type: client_type
        };
      } else {
        filters = {
          advisor: advisor
        };
      }
      console.log(filters);
      models = this.collection.where(filters);
      collection = new optima.Quotations(models);
      this.renderFiltered(collection);
      return $('#quotations-filters select').attr('data-advisor', advisor);
    };

    QuotationsFilteredView.prototype.filterByClientType = function(e) {
      var advisor, client_type, collection, el, filters, models, status;
      el = $(e.currentTarget);
      advisor = el.data('advisor');
      client_type = el.val();
      status = el.data('status');
      if (status && advisor) {
        filters = {
          advisor: advisor,
          status: status,
          client_type: client_type
        };
      } else if (advisor) {
        filters = {
          client_type: client_type,
          advisor: advisor
        };
      } else if (status) {
        filters = {
          client_type: client_type,
          status: status
        };
      } else {
        filters = {
          client_type: client_type
        };
      }
      models = this.collection.where(filters);
      collection = new optima.Quotations(models);
      this.renderFiltered(collection);
      return $('#quotations-filters select').attr('data-client-type', client_type);
    };

    return QuotationsFilteredView;

  })(Backbone.View);
  optima.QuotationsResults = (function(_super) {
    __extends(QuotationsResults, _super);

    function QuotationsResults() {
      return QuotationsResults.__super__.constructor.apply(this, arguments);
    }

    QuotationsResults.prototype.urlRoot = '/api/v1/results';

    return QuotationsResults;

  })(Backbone.Model);
  return optima.QuotationsResultsView = (function(_super) {
    __extends(QuotationsResultsView, _super);

    function QuotationsResultsView() {
      return QuotationsResultsView.__super__.constructor.apply(this, arguments);
    }

    QuotationsResultsView.prototype.el = $("#quotations-results");

    QuotationsResultsView.prototype.template = $("#quotations-results-template");

    QuotationsResultsView.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationsResultsView.prototype.render = function() {
      var source, template;
      source = this.template.html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    return QuotationsResultsView;

  })(Backbone.View);
});
