var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.Contact = (function(_super) {
    __extends(Contact, _super);

    function Contact() {
      return Contact.__super__.constructor.apply(this, arguments);
    }

    Contact.prototype.urlRoot = '/api/v1/contacts';

    return Contact;

  })(Backbone.Model);
  optima.Contacts = (function(_super) {
    __extends(Contacts, _super);

    function Contacts() {
      return Contacts.__super__.constructor.apply(this, arguments);
    }

    Contacts.prototype.model = optima.Contact;

    Contacts.prototype.url = '/api/v1/contacts';

    return Contacts;

  })(Backbone.Collection);
  optima.ContactView = (function(_super) {
    __extends(ContactView, _super);

    function ContactView() {
      return ContactView.__super__.constructor.apply(this, arguments);
    }

    ContactView.prototype.tagName = 'tr';

    ContactView.prototype.template = $('#contact-template');

    ContactView.prototype.events = {
      'click .contact-open-edit': 'openEdit'
    };

    ContactView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    ContactView.prototype.render = function() {
      var source, template;
      source = this.template.html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    ContactView.prototype.openEdit = function(e) {
      var edit;
      e.preventDefault();
      edit = new optima.ContactEdit({
        model: this.model
      });
      return edit.render();
    };

    return ContactView;

  })(Backbone.View);
  optima.ContactsView = (function(_super) {
    __extends(ContactsView, _super);

    function ContactsView() {
      return ContactsView.__super__.constructor.apply(this, arguments);
    }

    ContactsView.prototype.el = $('#contacts');

    ContactsView.prototype.events = {
      'click .contact-see-more': 'seeMore',
      'submit .contact-search': 'search'
    };

    ContactsView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      return this.listenTo(this.collection, 'add', this.addOne, this);
    };

    ContactsView.prototype.addOne = function(model) {
      var view;
      view = new optima.ContactView({
        model: model
      });
      return $(this.el).find('table .thead').after(view.render().el);
    };

    ContactsView.prototype.render = function() {
      return this.collection.each(function(model) {
        var view;
        view = new optima.ContactView({
          model: model
        });
        $(this.el).find('table').append(view.render().el);
        return $(this.el).find('.table-responsive').slimScroll({
          height: '400px'
        });
      }, this);
    };

    ContactsView.prototype.seeMore = function(e) {
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

    ContactsView.prototype.search = function(e) {
      var query;
      e.preventDefault();
      query = $('.contact-query').val();
      return this.collection.fetch({
        data: {
          query: query
        }
      });
    };

    return ContactsView;

  })(Backbone.View);
  optima.ContactQuoteCreate = (function(_super) {
    __extends(ContactQuoteCreate, _super);

    function ContactQuoteCreate() {
      return ContactQuoteCreate.__super__.constructor.apply(this, arguments);
    }

    ContactQuoteCreate.prototype.el = $('#contact-quote-create-modal');

    ContactQuoteCreate.prototype.template = $('#contact-quote-create-template');

    ContactQuoteCreate.prototype.events = {
      'click a.contact-create-store': 'store',
      'click a.contacts-see': 'CompanyContacts',
      'click .modal-close': 'cancel'
    };

    ContactQuoteCreate.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.added);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    ContactQuoteCreate.prototype.render = function(company_id) {
      var company, source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      company = {
        company_id: company_id
      };
      $(this.el).find('.modal-content').html(template(company));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    ContactQuoteCreate.prototype.store = function(e) {
      var dataForm;
      e.preventDefault();
      dataForm = $('#contact-create-form').serializeJSON();
      return this.model.save(dataForm, {
        wait: true
      });
    };

    ContactQuoteCreate.prototype.added = function() {
      var company_id, id, model;
      id = this.model.get('id');
      company_id = this.model.get('company_id');
      if (id) {
        model = new optima.Quotation;
        return model.save({
          company_id: company_id,
          contact_id: id
        }).done(function(response) {
          return window.location = "/quotations/" + response.id;
        });
      }
    };

    ContactQuoteCreate.prototype.close = function() {
      this.remove();
      return $('.modal-backdrop').remove();
    };

    ContactQuoteCreate.prototype.cancel = function(e) {
      e.preventDefault();
      return this.close();
    };

    ContactQuoteCreate.prototype.CompanyContacts = function(e) {
      var collection, company_id, view;
      e.preventDefault();
      company_id = $('#contact-create-form').find("input[name='company_id']").val();
      collection = new optima.Contacts;
      collection.fetch({
        reset: true,
        data: {
          company_id: company_id
        }
      });
      view = new optima.QuoteCompanyContacts({
        collection: collection
      });
      return view.render();
    };

    return ContactQuoteCreate;

  })(Backbone.View);
  optima.ContactCreate = (function(_super) {
    __extends(ContactCreate, _super);

    function ContactCreate() {
      return ContactCreate.__super__.constructor.apply(this, arguments);
    }

    ContactCreate.prototype.el = $('#contact-create-modal');

    ContactCreate.prototype.template = $('#contact-create-template');

    ContactCreate.prototype.events = {
      'click a.contact-create-store': 'store',
      'click a.contacts-see': 'CompanyContacts',
      'click .modal-close': 'cancel'
    };

    ContactCreate.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.added);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    ContactCreate.prototype.render = function(company_id) {
      var company, source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      company = {
        company_id: company_id
      };
      $(this.el).find('.modal-content').html(template(company));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    ContactCreate.prototype.store = function(e) {
      var dataForm;
      e.preventDefault();
      dataForm = $('#contact-create-form').serializeJSON();
      return this.model.save(dataForm, {
        wait: true
      });
    };

    ContactCreate.prototype.added = function() {
      var id;
      id = this.model.get('id');
      if (id) {
        return this.closeModal();
      }
    };

    return ContactCreate;

  })(Backbone.View);
  optima.ContactEdit = (function(_super) {
    __extends(ContactEdit, _super);

    function ContactEdit() {
      return ContactEdit.__super__.constructor.apply(this, arguments);
    }

    ContactEdit.prototype.el = $('#contact-edit-modal');

    ContactEdit.prototype.template = $('#contact-edit-template');

    ContactEdit.prototype.events = {
      'click .contact-save-update': 'update',
      'click .modal-close': 'cancel'
    };

    ContactEdit.prototype.initialize = function() {
      return this.listenTo(this.model, 'sync', this.synced);
    };

    ContactEdit.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    ContactEdit.prototype.update = function(e) {
      var dataForm, el;
      e.preventDefault();
      el = $(this.el);
      dataForm = el.find('form').serializeJSON();
      return this.model.save(dataForm, {
        wait: true
      });
    };

    ContactEdit.prototype.synced = function(model) {
      if (model.id) {
        return this.closeModal();
      }
    };

    ContactEdit.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return ContactEdit;

  })(Backbone.View);
  optima.QuoteCompanyContact = (function(_super) {
    __extends(QuoteCompanyContact, _super);

    function QuoteCompanyContact() {
      return QuoteCompanyContact.__super__.constructor.apply(this, arguments);
    }

    QuoteCompanyContact.prototype.template = $('#company-contact-template');

    QuoteCompanyContact.prototype.tagName = 'tr';

    QuoteCompanyContact.prototype.events = {
      'click a.contact-quote': 'quote'
    };

    QuoteCompanyContact.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    QuoteCompanyContact.prototype.quote = function(e) {
      var company_id, id, model;
      e.preventDefault();
      id = this.model.get('id');
      company_id = this.model.get('company_id');
      model = new optima.Quotation;
      return model.save({
        company_id: company_id,
        contact_id: id
      }).done(function(response) {
        return window.location = "/quotations/" + response.id;
      });
    };

    return QuoteCompanyContact;

  })(Backbone.View);
  optima.QuoteCompanyContacts = (function(_super) {
    __extends(QuoteCompanyContacts, _super);

    function QuoteCompanyContacts() {
      return QuoteCompanyContacts.__super__.constructor.apply(this, arguments);
    }

    QuoteCompanyContacts.prototype.el = $('#contact-quote-create-modal');

    QuoteCompanyContacts.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    QuoteCompanyContacts.prototype.render = function() {
      var el;
      el = $(this.el);
      return this.collection.each(function(model) {
        var view;
        view = new optima.QuoteCompanyContact({
          model: model
        });
        return $(el).find('table').append(view.render().el);
      });
    };

    return QuoteCompanyContacts;

  })(Backbone.View);
  optima.QuotationContact = (function(_super) {
    __extends(QuotationContact, _super);

    function QuotationContact() {
      return QuotationContact.__super__.constructor.apply(this, arguments);
    }

    QuotationContact.prototype.el = $('#quotation-contact');

    QuotationContact.prototype.template = $('#quotation-contact-template');

    QuotationContact.prototype.events = {
      'click a.quotation-contact-change': 'openChange',
      'click a.quotation-contact-create': 'openCreate',
      'click a.quotation-contact-edit': 'openEdit'
    };

    QuotationContact.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationContact.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.table-responsive').html(template(this.model.toJSON()));
      return this;
    };

    QuotationContact.prototype.openEdit = function(e) {
      var edit;
      e.preventDefault();
      edit = new optima.ContactEdit({
        model: this.model
      });
      return edit.render();
    };

    QuotationContact.prototype.openChange = function(e) {
      var collection, company_id;
      e.preventDefault();
      collection = new optima.Contacts;
      company_id = this.model.get('company_id');
      collection.fetch({
        reset: true,
        data: {
          company_id: company_id
        }
      });
      return optima.quotationCompanyContacts = new optima.QuotationCompanyContacts({
        collection: collection
      });
    };

    QuotationContact.prototype.openCreate = function(e) {
      var company_id, view;
      e.preventDefault();
      view = new optima.ContactCreate({
        model: new optima.Contact
      });
      company_id = this.model.get('company_id');
      console.log(company_id);
      return view.render(company_id);
    };

    return QuotationContact;

  })(Backbone.View);
  return optima.QuotationCompanyContacts = (function(_super) {
    __extends(QuotationCompanyContacts, _super);

    function QuotationCompanyContacts() {
      return QuotationCompanyContacts.__super__.constructor.apply(this, arguments);
    }

    QuotationCompanyContacts.prototype.el = $("#quotation-company-contacts-modal");

    QuotationCompanyContacts.prototype.template = $('#quotation-company-contact-template');

    QuotationCompanyContacts.prototype.events = {
      'click .modal-close': 'close',
      'click a.quotation-contact-change': 'changeContact'
    };

    QuotationCompanyContacts.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      return this.quotation_id = optima.pathArray[2];
    };

    QuotationCompanyContacts.prototype.render = function() {
      var source, template;
      source = $(this.template).html();
      template = Handlebars.compile(source);
      $(this.el).find('.select').html(template(this.collection.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    QuotationCompanyContacts.prototype.changeContact = function(e) {
      var contact_id;
      e.preventDefault();
      contact_id = $('#select-company-contact').val();
      optima.quotation.save({
        wait: true,
        contact_id: contact_id
      });
      this.storeActivity(this.quotation_id, "cambio el contacto");
      return this.closeModal();
    };

    QuotationCompanyContacts.prototype.close = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return QuotationCompanyContacts;

  })(Backbone.View);
});
