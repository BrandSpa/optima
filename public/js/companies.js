var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.Company = (function(_super) {
    __extends(Company, _super);

    function Company() {
      return Company.__super__.constructor.apply(this, arguments);
    }

    Company.prototype.urlRoot = '/api/v1/companies';

    return Company;

  })(Backbone.Model);
  optima.Companies = (function(_super) {
    __extends(Companies, _super);

    function Companies() {
      return Companies.__super__.constructor.apply(this, arguments);
    }

    Companies.prototype.model = optima.Company;

    Companies.prototype.url = '/api/v1/companies';

    return Companies;

  })(Backbone.Collection);
  optima.CompanyView = (function(_super) {
    __extends(CompanyView, _super);

    function CompanyView() {
      return CompanyView.__super__.constructor.apply(this, arguments);
    }

    CompanyView.prototype.tagName = 'tr';

    CompanyView.prototype.template = $('#company-template');

    CompanyView.prototype.events = {
      'click .company-open-edit': 'openEdit',
      'click .company-open-contacts': 'openContacts',
      'click .company-open-create-contact': 'openContactCreate'
    };

    CompanyView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    CompanyView.prototype.render = function() {
      var source, t;
      source = this.template.html();
      t = Handlebars.compile(source);
      $(this.el).html(t(this.model.toJSON()));
      return this;
    };

    CompanyView.prototype.openEdit = function(e) {
      var edit;
      e.preventDefault();
      edit = new optima.CompanyEdit({
        model: this.model
      });
      return edit.render();
    };

    CompanyView.prototype.openContacts = function(e) {
      e.preventDefault();
      return optima.companyContacts.render(this.model);
    };

    CompanyView.prototype.openContactCreate = function(e) {
      var view;
      e.preventDefault();
      view = new optima.ContactCreate({
        model: new optima.Contact
      });
      return view.render(this.model.get('id'));
    };

    return CompanyView;

  })(Backbone.View);
  optima.CompaniesView = (function(_super) {
    __extends(CompaniesView, _super);

    function CompaniesView() {
      return CompaniesView.__super__.constructor.apply(this, arguments);
    }

    CompaniesView.prototype.el = $('#companies');

    CompaniesView.prototype.events = {
      'click .company-see-more': 'seeMore',
      'submit .company-search': 'search',
      'click .company-open-create': 'openCreate'
    };

    CompaniesView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      return this.listenTo(this.collection, 'add', this.addOne, this);
    };

    CompaniesView.prototype.addOne = function(model) {
      var companyView;
      companyView = new optima.CompanyView({
        model: model
      });
      return $(this.el).find('table .thead').after(companyView.render().el);
    };

    CompaniesView.prototype.render = function() {
      return this.collection.each(function(model) {
        var companyView;
        companyView = new optima.CompanyView({
          model: model
        });
        $(this.el).find('table').append(companyView.render().el);
        return $(this.el).find('.table-responsive').slimScroll({
          height: '400px'
        });
      }, this);
    };

    CompaniesView.prototype.seeMore = function(e) {
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

    CompaniesView.prototype.search = function(e) {
      var query;
      e.preventDefault();
      query = $('.company-query').val();
      return this.collection.fetch({
        data: {
          query: query
        }
      });
    };

    CompaniesView.prototype.openCreate = function(e) {
      var view;
      e.preventDefault();
      view = new optima.CompanyCreate({
        model: new optima.Company
      });
      return view.render();
    };

    return CompaniesView;

  })(Backbone.View);
  optima.CompanyCreate = (function(_super) {
    __extends(CompanyCreate, _super);

    function CompanyCreate() {
      return CompanyCreate.__super__.constructor.apply(this, arguments);
    }

    CompanyCreate.prototype.el = $('#company-create-modal');

    CompanyCreate.prototype.template = $('#company-create-template');

    CompanyCreate.prototype.events = {
      'click a.company-save-store': 'store',
      'click .modal-close': 'cancel'
    };

    CompanyCreate.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.added);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    CompanyCreate.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    CompanyCreate.prototype.store = function(e) {
      var dataForm;
      e.preventDefault();
      dataForm = $('#company-create-form').serializeJSON();
      return this.model.save(dataForm, {
        wait: true
      });
    };

    CompanyCreate.prototype.added = function(model) {
      var id;
      if (model.id) {
        id = this.model.get('id');
        optima.companies.add(model);
        return this.closeModal();
      }
    };

    CompanyCreate.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return CompanyCreate;

  })(Backbone.View);
  optima.CompanyEdit = (function(_super) {
    __extends(CompanyEdit, _super);

    function CompanyEdit() {
      return CompanyEdit.__super__.constructor.apply(this, arguments);
    }

    CompanyEdit.prototype.el = $('#company-edit-modal');

    CompanyEdit.prototype.template = $('#company-edit-template');

    CompanyEdit.prototype.events = {
      'click .company-save-update': 'update',
      'click .modal-close': 'cancel'
    };

    CompanyEdit.prototype.initialize = function() {
      return this.listenTo(this.model, 'sync', this.synced);
    };

    CompanyEdit.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    CompanyEdit.prototype.update = function(e) {
      var dataForm, el;
      e.preventDefault();
      dataForm = $('.company-edit-form').serializeJSON();
      el = $(this.el);
      return this.model.save(dataForm, {
        wait: true
      });
    };

    CompanyEdit.prototype.synced = function(model) {
      if (model.id) {
        return this.closeModal();
      }
    };

    CompanyEdit.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return CompanyEdit;

  })(Backbone.View);
  optima.CompanyContacts = (function(_super) {
    __extends(CompanyContacts, _super);

    function CompanyContacts() {
      return CompanyContacts.__super__.constructor.apply(this, arguments);
    }

    CompanyContacts.prototype.el = $('#company-contacts-modal');

    CompanyContacts.prototype.template = $('#company-contacts-template');

    CompanyContacts.prototype.render = function(model) {
      var source, t;
      source = $(this.template).html();
      t = Handlebars.compile(source);
      $(this.el).find('.modal-content').html(t(model.toJSON()));
      return $(this.el).modal();
    };

    return CompanyContacts;

  })(Backbone.View);
  optima.CompanyQuoteCreate = (function(_super) {
    __extends(CompanyQuoteCreate, _super);

    function CompanyQuoteCreate() {
      return CompanyQuoteCreate.__super__.constructor.apply(this, arguments);
    }

    CompanyQuoteCreate.prototype.el = $('#company-quote-create-modal');

    CompanyQuoteCreate.prototype.template = $('#company-quote-create-template');

    CompanyQuoteCreate.prototype.events = {
      'click a.company-quote-store': 'store',
      'click .modal-close': 'cancel',
      'submit #company-search-form': 'search'
    };

    CompanyQuoteCreate.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.added);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    CompanyQuoteCreate.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    CompanyQuoteCreate.prototype.search = function(e) {
      var collection, query, results;
      e.preventDefault();
      query = $('.company-query').val();
      collection = new optima.Companies;
      collection.fetch({
        reset: true,
        data: {
          query: query
        }
      });
      return results = new optima.CompanyResults({
        collection: collection
      });
    };

    CompanyQuoteCreate.prototype.store = function(e) {
      var dataForm;
      e.preventDefault();
      dataForm = $('#company-create-form').serializeJSON();
      return this.model.save(dataForm, {
        wait: true
      });
    };

    CompanyQuoteCreate.prototype.added = function(model) {
      var id, view;
      if (model.id) {
        id = this.model.get('id');
        this.closeModal();
        view = new optima.ContactQuoteCreate({
          model: new optima.Contact
        });
        return view.render(id);
      }
    };

    CompanyQuoteCreate.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return CompanyQuoteCreate;

  })(Backbone.View);
  optima.CompanyResult = (function(_super) {
    __extends(CompanyResult, _super);

    function CompanyResult() {
      return CompanyResult.__super__.constructor.apply(this, arguments);
    }

    CompanyResult.prototype.template = $('#company-result-template');

    CompanyResult.prototype.tagName = 'tr';

    CompanyResult.prototype.events = {
      'click a.company-result-quote': 'quote'
    };

    CompanyResult.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    CompanyResult.prototype.quote = function(e) {
      var id, view;
      e.preventDefault();
      id = this.model.get('id');
      optima.companyQuoteCreate.closeModal();
      view = new optima.ContactQuoteCreate({
        model: new optima.Contact
      });
      return view.render(id);
    };

    return CompanyResult;

  })(Backbone.View);
  return optima.CompanyResults = (function(_super) {
    __extends(CompanyResults, _super);

    function CompanyResults() {
      return CompanyResults.__super__.constructor.apply(this, arguments);
    }

    CompanyResults.prototype.el = $('#company-quote-create-modal');

    CompanyResults.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    CompanyResults.prototype.render = function() {
      var el;
      $(el).find('table').html('');
      el = $(this.el);
      return this.collection.each(function(model) {
        var view;
        view = new optima.CompanyResult({
          model: model
        });
        return $(el).find('table').append(view.render().el);
      });
    };

    CompanyResults.prototype.close = function() {
      return this.remove();
    };

    return CompanyResults;

  })(Backbone.View);
});
