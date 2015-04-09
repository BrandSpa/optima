var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.models.Quotation = (function(_super) {
    __extends(Quotation, _super);

    function Quotation() {
      return Quotation.__super__.constructor.apply(this, arguments);
    }

    Quotation.prototype.urlRoot = '/api/v1/quotations';

    return Quotation;

  })(Backbone.Model);
  optima.collections.Quotations = (function(_super) {
    __extends(Quotations, _super);

    function Quotations() {
      return Quotations.__super__.constructor.apply(this, arguments);
    }

    Quotations.prototype.model = optima.models.Quotation;

    Quotations.prototype.url = '/api/v1/quotations';

    return Quotations;

  })(Backbone.Collection);
  optima.views.QuotationView = (function(_super) {
    __extends(QuotationView, _super);

    function QuotationView() {
      return QuotationView.__super__.constructor.apply(this, arguments);
    }

    QuotationView.prototype.tagName = 'tr';

    QuotationView.prototype.events = {
      'click .quotation-open-edit': 'openquotationEdit',
      'click .quotation-open-contacts': 'openContacts',
      'click .quotation-company- lect': 'companySelect',
      'click .quotation-contact-select': 'contactSelect'
    };

    QuotationView.prototype.render = function() {
      var t;
      t = optima.templates.quotation;
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
  optima.views.QuotationsView = (function(_super) {
    __extends(QuotationsView, _super);

    function QuotationsView() {
      return QuotationsView.__super__.constructor.apply(this, arguments);
    }

    QuotationsView.prototype.el = $('#quotations');

    QuotationsView.prototype.events = {
      'click .quotation-see-more': 'seeMore',
      'submit .quotation-search': 'search',
      'click .quotation-open-quote': 'openQuote',
      'change .filter-status': 'filterByStatus',
      'change .filter-advisor': 'filterByAdvisor',
      'change .filter-client-type': 'filterByClientType'
    };

    QuotationsView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.renderOne);
      this.filters = {};
      return this.offset = 0;
    };

    QuotationsView.prototype.addPlugins = function() {
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

    QuotationsView.prototype.renderOne = function(model) {
      var quotationView;
      console.log(model.toJSON());
      quotationView = new optima.views.QuotationView({
        model: model
      });
      this.$el.find('tbody').prepend(quotationView.render().el);
      return this.addPlugins();
    };

    QuotationsView.prototype.render = function(collection) {
      var coll, html;
      html = [];
      if (collection && collection.models) {
        coll = collection;
      } else {
        coll = this.collection;
      }
      coll.each(function(model) {
        var quotationView;
        quotationView = new optima.views.QuotationView({
          model: model
        });
        return html.push(quotationView.render().el);
      }, this);
      this.$el.find('tbody').html(html);
      this.$el.find('.table-responsive').slimScroll();
      return this.addPlugins();
    };

    QuotationsView.prototype.seeMore = function(e) {
      var el, more, that;
      that = this;
      e.preventDefault();
      el = e.currentTarget;
      more = this.offset + 10;
      this.collection.fetch({
        add: true,
        remove: false,
        data: {
          offset: more
        }
      }).done(function(models) {
        if (_.isEmpty(that.filters)) {
          that.render();
          return that.scrollToBottom();
        } else {
          return that.filter();
        }
      });
      return this.offset = more;
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
      model = new optima.models.Company;
      optima.companyQuoteCreate = new optima.views.CompanyQuoteCreate({
        model: model
      });
      return optima.companyQuoteCreate.render();
    };

    QuotationsView.prototype.filter = function(filter) {
      var collection, models;
      console.log(this.filters);
      if (filter) {
        this.filters = _.extend(this.filters, filter);
      }
      models = this.collection.where(this.filters);
      collection = new optima.collections.Quotations(models);
      this.render(collection);
      return this.scrollToBottom();
    };

    QuotationsView.prototype.scrollToBottom = function() {
      var container, h;
      container = this.$el.find('.table-responsive');
      h = container.prop('scrollHeight') + 'px';
      return container.slimScroll({
        scrollTo: h
      });
    };

    QuotationsView.prototype.filterByStatus = function(e) {
      var el, status;
      el = $(e.currentTarget);
      status = {
        status: el.val()
      };
      return this.filter(status);
    };

    QuotationsView.prototype.filterByAdvisor = function(e) {
      var el, status;
      el = $(e.currentTarget);
      status = {
        advisor: el.val()
      };
      return this.filter(status);
    };

    QuotationsView.prototype.filterByClientType = function(e) {
      var el, status;
      el = $(e.currentTarget);
      status = {
        client_type: el.val()
      };
      return this.filter(status);
    };

    return QuotationsView;

  })(Backbone.View);
  optima.collections.QuotationsResults = (function(_super) {
    __extends(QuotationsResults, _super);

    function QuotationsResults() {
      return QuotationsResults.__super__.constructor.apply(this, arguments);
    }

    QuotationsResults.prototype.urlRoot = '/api/v1/results';

    return QuotationsResults;

  })(Backbone.Model);
  optima.views.QuotationsResultsView = (function(_super) {
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
  return optima.views.QuotationCreate = (function(_super) {
    __extends(QuotationCreate, _super);

    function QuotationCreate() {
      return QuotationCreate.__super__.constructor.apply(this, arguments);
    }

    QuotationCreate.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.stored);
      return pubsub.on('quotation:store', this.store, this);
    };

    QuotationCreate.prototype.store = function(data) {
      return this.model.save(data);
    };

    QuotationCreate.prototype.stored = function(model) {
      pubsub.trigger('socket:notification', model);
      socket.emit('quotations', model);
      return window.location = "/quotations/" + model.id;
    };

    return QuotationCreate;

  })(Backbone.View);
});
