Backbone.View.prototype.closeModal = function() {
  this.remove();
  $('.modal-backdrop').remove();
  return $('body').removeClass('modal-open');
};

Backbone.View.prototype.showErrors = function(model, response) {
  var errors;
  errors = JSON.parse(response.responseText);
  _.each(errors, function(message, row) {
    console.log(message);
    return alertify.error(message);
  });
  return Backbone.View.prototype.storeActivity = function(quotation_id, message) {
    return pubsub.trigger("activity:store", {
      quotation_id: quotation_id,
      message: message
    });
  };
};

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Activity = (function(superClass) {
    extend(Activity, superClass);

    function Activity() {
      return Activity.__super__.constructor.apply(this, arguments);
    }

    Activity.prototype.urlRoot = '/api/v1/activities';

    return Activity;

  })(Backbone.Model);
  return optima.collections.Activities = (function(superClass) {
    extend(Activities, superClass);

    function Activities() {
      return Activities.__super__.constructor.apply(this, arguments);
    }

    Activities.prototype.url = '/api/v1/activities';

    Activities.prototype.model = optima.models.Activity;

    return Activities;

  })(Backbone.Collection);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Company = (function(superClass) {
    extend(Company, superClass);

    function Company() {
      return Company.__super__.constructor.apply(this, arguments);
    }

    Company.prototype.urlRoot = '/api/v1/companies';

    return Company;

  })(Backbone.Model);
  return optima.collections.Companies = (function(superClass) {
    extend(Companies, superClass);

    function Companies() {
      return Companies.__super__.constructor.apply(this, arguments);
    }

    Companies.prototype.model = optima.models.Company;

    Companies.prototype.url = '/api/v1/companies';

    return Companies;

  })(Backbone.Collection);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Contact = (function(superClass) {
    extend(Contact, superClass);

    function Contact() {
      return Contact.__super__.constructor.apply(this, arguments);
    }

    Contact.prototype.urlRoot = '/api/v1/contacts';

    return Contact;

  })(Backbone.Model);
  return optima.collections.Contacts = (function(superClass) {
    extend(Contacts, superClass);

    function Contacts() {
      return Contacts.__super__.constructor.apply(this, arguments);
    }

    Contacts.prototype.model = optima.models.Contact;

    Contacts.prototype.url = '/api/v1/contacts';

    return Contacts;

  })(Backbone.Collection);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.QuotationProduct = (function(superClass) {
    extend(QuotationProduct, superClass);

    function QuotationProduct() {
      return QuotationProduct.__super__.constructor.apply(this, arguments);
    }

    QuotationProduct.prototype.urlRoot = '/api/v1/products';

    return QuotationProduct;

  })(Backbone.Model);
  return optima.collections.QuotationProducts = (function(superClass) {
    extend(QuotationProducts, superClass);

    function QuotationProducts() {
      return QuotationProducts.__super__.constructor.apply(this, arguments);
    }

    QuotationProducts.prototype.model = optima.models.QuotationProduct;

    QuotationProducts.prototype.url = '/api/v1/products';

    return QuotationProducts;

  })(Backbone.Collection);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Quotation = (function(superClass) {
    extend(Quotation, superClass);

    function Quotation() {
      return Quotation.__super__.constructor.apply(this, arguments);
    }

    Quotation.prototype.urlRoot = '/api/v1/quotations';

    return Quotation;

  })(Backbone.Model);
  optima.collections.Quotations = (function(superClass) {
    extend(Quotations, superClass);

    function Quotations() {
      return Quotations.__super__.constructor.apply(this, arguments);
    }

    Quotations.prototype.model = optima.models.Quotation;

    Quotations.prototype.url = '/api/v1/quotations';

    return Quotations;

  })(Backbone.Collection);
  return optima.collections.QuotationsResults = (function(superClass) {
    extend(QuotationsResults, superClass);

    function QuotationsResults() {
      return QuotationsResults.__super__.constructor.apply(this, arguments);
    }

    QuotationsResults.prototype.urlRoot = '/api/v1/results';

    return QuotationsResults;

  })(Backbone.Model);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Report = (function(superClass) {
    extend(Report, superClass);

    function Report() {
      return Report.__super__.constructor.apply(this, arguments);
    }

    Report.prototype.urlRoot = '/api/v1/reports';

    return Report;

  })(Backbone.Model);
  return optima.collections.Resports = (function(superClass) {
    extend(Resports, superClass);

    function Resports() {
      return Resports.__super__.constructor.apply(this, arguments);
    }

    Resports.prototype.model = optima.models.Report;

    Resports.prototype.url = '/api/v1/reports';

    return Resports;

  })(Backbone.Collection);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Service = (function(superClass) {
    extend(Service, superClass);

    function Service() {
      return Service.__super__.constructor.apply(this, arguments);
    }

    Service.prototype.urlRoot = '/api/v1/services';

    return Service;

  })(Backbone.Model);
  return optima.collections.Services = (function(superClass) {
    extend(Services, superClass);

    function Services() {
      return Services.__super__.constructor.apply(this, arguments);
    }

    Services.prototype.url = '/api/v1/services';

    Services.prototype.model = optima.models.Service;

    return Services;

  })(Backbone.Collection);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Todo = (function(superClass) {
    extend(Todo, superClass);

    function Todo() {
      return Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.prototype.urlRoot = '/api/v1/todos';

    return Todo;

  })(Backbone.Model);
  return optima.collections.Todos = (function(superClass) {
    extend(Todos, superClass);

    function Todos() {
      return Todos.__super__.constructor.apply(this, arguments);
    }

    Todos.prototype.url = '/api/v1/todos';

    Todos.prototype.model = optima.models.Todo;

    return Todos;

  })(Backbone.Collection);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Tracking = (function(superClass) {
    extend(Tracking, superClass);

    function Tracking() {
      return Tracking.__super__.constructor.apply(this, arguments);
    }

    Tracking.prototype.urlRoot = '/api/v1/trackings';

    return Tracking;

  })(Backbone.Model);
  return optima.collections.Trackings = (function(superClass) {
    extend(Trackings, superClass);

    function Trackings() {
      return Trackings.__super__.constructor.apply(this, arguments);
    }

    Trackings.prototype.url = '/api/v1/trackings';

    Trackings.prototype.model = optima.models.Tracking;

    return Trackings;

  })(Backbone.Collection);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.User = (function(superClass) {
    extend(User, superClass);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.urlRoot = '/api/v1/users';

    return User;

  })(Backbone.Model);
  return optima.collections.Users = (function(superClass) {
    extend(Users, superClass);

    function Users() {
      return Users.__super__.constructor.apply(this, arguments);
    }

    Users.prototype.url = '/api/v1/users';

    Users.prototype.model = optima.models.User;

    return Users;

  })(Backbone.Collection);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.DashboardPage = (function(superClass) {
    extend(DashboardPage, superClass);

    function DashboardPage() {
      return DashboardPage.__super__.constructor.apply(this, arguments);
    }

    DashboardPage.prototype.events = {
      'click .quotation-open-quote': 'openQuote',
      'click .todo-open-create': 'openTodo'
    };

    DashboardPage.prototype.render = function() {
      var template;
      template = optima.templates.page_dashboard;
      $(this.el).empty().append(template);
      return this;
    };

    DashboardPage.prototype.openQuote = function(e) {
      var model;
      e.preventDefault();
      model = new optima.models.Company;
      optima.companyQuoteCreate = new optima.views.CompanyQuoteCreate({
        model: model
      });
      return optima.companyQuoteCreate.render();
    };

    DashboardPage.prototype.openTodo = function(e) {
      var model, users, view;
      e.preventDefault();
      users = new optima.collections.Users;
      model = new optima.models.Todo;
      view = new optima.views.TodoCreateView({
        model: model
      });
      console.log(view);
      return users.fetch().done(function(users) {
        return view.render(users);
      });
    };

    return DashboardPage;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ActivityView = (function(superClass) {
    extend(ActivityView, superClass);

    function ActivityView() {
      return ActivityView.__super__.constructor.apply(this, arguments);
    }

    ActivityView.prototype.tagName = 'tr';

    ActivityView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    ActivityView.prototype.render = function() {
      var template;
      template = optima.templates.activity;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    return ActivityView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ActivitiesView = (function(superClass) {
    extend(ActivitiesView, superClass);

    function ActivitiesView() {
      return ActivitiesView.__super__.constructor.apply(this, arguments);
    }

    ActivitiesView.prototype.events = {
      'click .service-see-more': 'seeMore'
    };

    ActivitiesView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.addOne, this);
      pubsub.on("activity:store", this.store, this);
      return pubsub.on("activity:pull", this.pull, this);
    };

    ActivitiesView.prototype.pull = function(quotation_id) {
      return this.collection.fetch();
    };

    ActivitiesView.prototype.addOne = function(model) {
      var view;
      view = new optima.views.ActivityView({
        model: model
      });
      $('.activities table').prepend(view.render().el);
      return $('.activities span.timeago').timeago();
    };

    ActivitiesView.prototype.addPlugins = function() {
      $('.activities span.timeago').timeago();
      return $('.activities .table-responsive').slimScroll({
        height: '475px'
      });
    };

    ActivitiesView.prototype.render = function() {
      var html;
      html = [];
      this.collection.each(function(model) {
        var view;
        view = new optima.views.ActivityView({
          model: model
        });
        return html.push(view.render().el);
      }, this);
      $('.activities table').html(html);
      return this.addPlugins();
    };

    ActivitiesView.prototype.store = function(data) {
      var quotation_id;
      this.collection.create(data);
      quotation_id = data['quotation_id'];
      return socket.emit('activities', quotation_id);
    };

    return ActivitiesView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationActivityView = (function(superClass) {
    extend(QuotationActivityView, superClass);

    function QuotationActivityView() {
      return QuotationActivityView.__super__.constructor.apply(this, arguments);
    }

    QuotationActivityView.prototype.tagName = 'tr';

    QuotationActivityView.prototype.render = function() {
      var template;
      template = optima.templates.activity_quotation;
      $(this.el).html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    return QuotationActivityView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationActivitiesView = (function(superClass) {
    extend(QuotationActivitiesView, superClass);

    function QuotationActivitiesView() {
      return QuotationActivitiesView.__super__.constructor.apply(this, arguments);
    }

    QuotationActivitiesView.prototype.el = $('#quotation-activities');

    QuotationActivitiesView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.add);
      pubsub.on("quotation-activity:pull", this.pull, this);
      return this.quotation_id = optima.pathArray[2];
    };

    QuotationActivitiesView.prototype.pull = function(quotation_id) {
      return this.collection.fetch({
        data: {
          quotation_id: this.quotation_id
        }
      });
    };

    QuotationActivitiesView.prototype.add = function(model) {
      var view;
      view = new optima.views.QuotationActivityView({
        model: model
      });
      return $(this.el).find('table').prepend(view.render().el);
    };

    QuotationActivitiesView.prototype.renderOne = function(model) {
      var view;
      view = new optima.views.QuotationActivityView({
        model: model
      });
      return $(this.el).find('table').append(view.render().el);
    };

    QuotationActivitiesView.prototype.render = function() {
      $(this.el).find('table').empty();
      $(this.el).find('.table-responsive').slimScroll({
        height: '200px'
      });
      return this.collection.each(function(model) {
        return this.renderOne(model);
      }, this);
    };

    return QuotationActivitiesView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.CompanyView = (function(superClass) {
    extend(CompanyView, superClass);

    function CompanyView() {
      return CompanyView.__super__.constructor.apply(this, arguments);
    }

    CompanyView.prototype.tagName = 'tr';

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
      var template;
      template = optima.templates.company;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    CompanyView.prototype.openEdit = function(e) {
      var edit;
      e.preventDefault();
      edit = new optima.views.CompanyEdit({
        model: this.model
      });
      edit.render();
      return console.log(edit.render());
    };

    CompanyView.prototype.openContacts = function(e) {
      e.preventDefault();
      return optima.companyContacts.render(this.model);
    };

    CompanyView.prototype.openContactCreate = function(e) {
      var view;
      e.preventDefault();
      view = new optima.views.ContactCreate({
        model: new optima.models.Contact
      });
      return view.render(this.model.get('id'));
    };

    return CompanyView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.CompaniesView = (function(superClass) {
    extend(CompaniesView, superClass);

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
      companyView = new optima.views.CompanyView({
        model: model
      });
      return $(this.el).find('table .thead').after(companyView.render().el);
    };

    CompaniesView.prototype.render = function() {
      var $table, html;
      $table = $(this.el).find('table tbody');
      html = [];
      this.collection.each(function(model) {
        var view;
        view = new optima.views.CompanyView({
          model: model
        });
        return html.push(view.render().el);
      }, this);
      $(this.el).find('.table-responsive').slimScroll({
        height: '400px'
      });
      return $table.empty().append(html);
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
        reset: true,
        data: {
          query: query
        }
      });
    };

    CompaniesView.prototype.openCreate = function(e) {
      var view;
      e.preventDefault();
      view = new optima.views.CompanyCreate({
        model: new optima.models.Company
      });
      return view.render();
    };

    return CompaniesView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.CompanyCreate = (function(superClass) {
    extend(CompanyCreate, superClass);

    function CompanyCreate() {
      return CompanyCreate.__super__.constructor.apply(this, arguments);
    }

    CompanyCreate.prototype.el = $('#company-create-modal');

    CompanyCreate.prototype.events = {
      'click a.company-save-store': 'store',
      'click .modal-close': 'cancel'
    };

    CompanyCreate.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.added);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    CompanyCreate.prototype.render = function() {
      var template;
      template = optima.templates.company_create;
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
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

    CompanyCreate.prototype.showErrors = function(model, response) {
      var errors;
      errors = JSON.parse(response.responseText);
      return _.each(errors, function(message, row) {
        return alertify.error(message);
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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.CompanyEdit = (function(superClass) {
    extend(CompanyEdit, superClass);

    function CompanyEdit() {
      return CompanyEdit.__super__.constructor.apply(this, arguments);
    }

    CompanyEdit.prototype.el = $('#company-edit-modal');

    CompanyEdit.prototype.events = {
      'click .company-save-update': 'update',
      'click .modal-close': 'cancel'
    };

    CompanyEdit.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.synced);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    CompanyEdit.prototype.render = function() {
      var template;
      template = optima.templates.company_edit;
      this.$el.find('.modal-content').html(template(this.model.toJSON()));
      return this.$el.modal({
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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.CompanyContacts = (function(superClass) {
    extend(CompanyContacts, superClass);

    function CompanyContacts() {
      return CompanyContacts.__super__.constructor.apply(this, arguments);
    }

    CompanyContacts.prototype.el = $('#company-contacts-modal');

    CompanyContacts.prototype.render = function(model) {
      var template;
      template = optima.templates.company_contacts;
      $(this.el).find('.modal-content').html(template(model.toJSON()));
      return $(this.el).modal();
    };

    return CompanyContacts;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.CompanyQuoteCreate = (function(superClass) {
    extend(CompanyQuoteCreate, superClass);

    function CompanyQuoteCreate() {
      return CompanyQuoteCreate.__super__.constructor.apply(this, arguments);
    }

    CompanyQuoteCreate.prototype.el = $('#company-quote-create-modal');

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
      var template;
      template = optima.templates.company_quote;
      $(this.el).find('.modal-content').html(template(this.model.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    CompanyQuoteCreate.prototype.search = function(e) {
      var collection, query, results;
      e.preventDefault();
      query = $('.company-query').val();
      collection = new optima.collections.Companies;
      collection.fetch({
        reset: true,
        data: {
          query: query
        }
      });
      return results = new optima.views.CompanyResults({
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
        view = new optima.views.ContactQuoteCreate({
          model: new optima.models.Contact
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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.CompanyResult = (function(superClass) {
    extend(CompanyResult, superClass);

    function CompanyResult() {
      return CompanyResult.__super__.constructor.apply(this, arguments);
    }

    CompanyResult.prototype.tagName = 'tr';

    CompanyResult.prototype.events = {
      'click a.company-result-quote': 'quote'
    };

    CompanyResult.prototype.render = function() {
      var template;
      template = optima.templates.company_result;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    CompanyResult.prototype.quote = function(e) {
      var id, view;
      e.preventDefault();
      id = this.model.get('id');
      optima.companyQuoteCreate.closeModal();
      view = new optima.views.ContactQuoteCreate({
        model: new optima.models.Contact
      });
      return view.render(id);
    };

    return CompanyResult;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.CompanyResults = (function(superClass) {
    extend(CompanyResults, superClass);

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
        view = new optima.views.CompanyResult({
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

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ContactView = (function(superClass) {
    extend(ContactView, superClass);

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
      var template;
      template = optima.templates.contact;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    ContactView.prototype.openEdit = function(e) {
      var edit;
      e.preventDefault();
      edit = new optima.views.ContactEdit({
        model: this.model
      });
      return edit.render();
    };

    return ContactView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ContactsView = (function(superClass) {
    extend(ContactsView, superClass);

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
      view = new optima.views.ContactView({
        model: model
      });
      return $(this.el).find('table .thead').after(view.render().el);
    };

    ContactsView.prototype.render = function() {
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.ContactView({
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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ContactQuoteCreate = (function(superClass) {
    extend(ContactQuoteCreate, superClass);

    function ContactQuoteCreate() {
      return ContactQuoteCreate.__super__.constructor.apply(this, arguments);
    }

    ContactQuoteCreate.prototype.el = $('#contact-quote-create-modal');

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
      var company, template;
      template = optima.templates.contact_quote;
      company = {
        company_id: company_id
      };
      $(this.el).find('.modal-content').html(template(company));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    ContactQuoteCreate.prototype.store = function(evt) {
      var _evt, dataForm;
      _evt = evt;
      _evt.preventDefault();
      dataForm = $('#contact-create-form').serializeJSON();
      return this.model.save(dataForm, {
        wait: true
      });
    };

    ContactQuoteCreate.prototype.added = function() {
      var company_id, id;
      id = this.model.get('id');
      company_id = this.model.get('company_id');
      return pubsub.trigger('quotation:store', {
        company_id: company_id,
        contact_id: id
      });
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
      collection = new optima.collections.Contacts;
      collection.fetch({
        reset: true,
        data: {
          company_id: company_id
        }
      });
      view = new optima.views.QuoteCompanyContacts({
        collection: collection
      });
      return view.render();
    };

    return ContactQuoteCreate;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ContactCreate = (function(superClass) {
    extend(ContactCreate, superClass);

    function ContactCreate() {
      return ContactCreate.__super__.constructor.apply(this, arguments);
    }

    ContactCreate.prototype.el = $('#contact-create-modal');

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
      var company, template;
      template = optima.templates.contact_create;
      company = {
        company_id: company_id
      };
      $(this.el).find('.modal-content').html(template(company));
      $(this.el).modal({
        backdrop: 'static'
      });
      return console.log(this);
    };

    ContactCreate.prototype.store = function(e) {
      var $el, dataForm;
      e.preventDefault();
      $el = $(e.currentTarget);
      dataForm = $('#contact-create-form').serializeJSON();
      return this.model.save(dataForm, {
        beforeSend: function() {
          return alertify.log('guardando...');
        }
      });
    };

    ContactCreate.prototype.showErrors = function(model, response) {
      var errors;
      errors = JSON.parse(response.responseText);
      return _.each(errors, function(message, row) {
        return alertify.error(message);
      });
    };

    ContactCreate.prototype.added = function() {
      var id;
      id = this.model.get('id');
      if (id) {
        return this.closeModal();
      }
    };

    ContactCreate.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return ContactCreate;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ContactEdit = (function(superClass) {
    extend(ContactEdit, superClass);

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
      this.listenTo(this.model, 'sync', this.synced);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    ContactEdit.prototype.render = function() {
      var template;
      template = optima.templates.contact_edit;
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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuoteCompanyContact = (function(superClass) {
    extend(QuoteCompanyContact, superClass);

    function QuoteCompanyContact() {
      return QuoteCompanyContact.__super__.constructor.apply(this, arguments);
    }

    QuoteCompanyContact.prototype.tagName = 'tr';

    QuoteCompanyContact.prototype.events = {
      'click a.contact-quote': 'quote'
    };

    QuoteCompanyContact.prototype.render = function() {
      var template;
      template = optima.templates.contact_company_quote;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    QuoteCompanyContact.prototype.quote = function(e) {
      var company_id, id;
      e.preventDefault();
      id = this.model.get('id');
      company_id = this.model.get('company_id');
      return pubsub.trigger('quotation:store', {
        company_id: company_id,
        contact_id: id
      });
    };

    return QuoteCompanyContact;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuoteCompanyContacts = (function(superClass) {
    extend(QuoteCompanyContacts, superClass);

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
        view = new optima.views.QuoteCompanyContact({
          model: model
        });
        return $(el).find('table').append(view.render().el);
      });
    };

    return QuoteCompanyContacts;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationContact = (function(superClass) {
    extend(QuotationContact, superClass);

    function QuotationContact() {
      return QuotationContact.__super__.constructor.apply(this, arguments);
    }

    QuotationContact.prototype.el = $('#quotation-contact');

    QuotationContact.prototype.template = $('#quotation-contact-template');

    QuotationContact.prototype.events = {
      'click a.quotation-contact-change': 'openChange',
      'click a.quotation-contact-create': 'openCreate',
      'click a.edit': 'openEdit'
    };

    QuotationContact.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationContact.prototype.render = function() {
      var template;
      template = optima.templates.quotation_contact;
      $(this.el).find('.table-responsive').html(template(this.model.toJSON()));
      return this;
    };

    QuotationContact.prototype.openEdit = function(e) {
      var edit;
      e.preventDefault();
      edit = new optima.views.ContactEdit({
        model: this.model
      });
      return edit.render();
    };

    QuotationContact.prototype.openChange = function(e) {
      var collection, company_id;
      e.preventDefault();
      collection = new optima.collections.Contacts;
      company_id = this.model.get('company_id');
      collection.fetch({
        reset: true,
        data: {
          company_id: company_id
        }
      });
      return optima.quotationCompanyContacts = new optima.views.QuotationCompanyContacts({
        collection: collection
      });
    };

    QuotationContact.prototype.openCreate = function(e) {
      var company_id, view;
      e.preventDefault();
      view = new optima.views.ContactCreate({
        model: new optima.models.Contact
      });
      company_id = this.model.get('company_id');
      return view.render(company_id);
    };

    return QuotationContact;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationCompanyContacts = (function(superClass) {
    extend(QuotationCompanyContacts, superClass);

    function QuotationCompanyContacts() {
      return QuotationCompanyContacts.__super__.constructor.apply(this, arguments);
    }

    QuotationCompanyContacts.prototype.el = $("#quotation-company-contacts-modal");

    QuotationCompanyContacts.prototype.events = {
      'click .modal-close': 'close',
      'click a.quotation-contact-change': 'changeContact'
    };

    QuotationCompanyContacts.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      return this.quotation_id = optima.pathArray[2];
    };

    QuotationCompanyContacts.prototype.render = function() {
      var template;
      template = optima.templates.contacts_company_select;
      $(this.el).find('.select').html(template(this.collection.toJSON()));
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    QuotationCompanyContacts.prototype.changeContact = function(e) {
      var contact_id;
      e.preventDefault();
      contact_id = $('#select-company-contact').val();
      pubsub.trigger('quotation:contact', contact_id);
      return this.closeModal();
    };

    QuotationCompanyContacts.prototype.close = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return QuotationCompanyContacts;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationView = (function(superClass) {
    extend(QuotationView, superClass);

    function QuotationView() {
      return QuotationView.__super__.constructor.apply(this, arguments);
    }

    QuotationView.prototype.tagName = 'tr';

    QuotationView.prototype.events = {
      'click .quotation-open-edit': 'openquotationEdit',
      'click .quotation-open-contacts': 'openContacts',
      'click .quotation-company-select': 'companySelect',
      'click .quotation-contact-select': 'contactSelect'
    };

    QuotationView.prototype.render = function() {
      var t;
      t = optima.templates.quotation;
      if (this.model.attributes) {
        $(this.el).html(t(this.model.toJSON()));
      } else {
        $(this.el).html(t(this.model));
      }
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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationsView = (function(superClass) {
    extend(QuotationsView, superClass);

    function QuotationsView() {
      return QuotationsView.__super__.constructor.apply(this, arguments);
    }

    QuotationsView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.renderOne);
      pubsub.on('quotations:filter', this.filter, this);
      pubsub.on('quotations:paginate', this.paginate, this);
      pubsub.on("quotation:added", this.addOne, this);
      return this.filters = {};
    };

    QuotationsView.prototype.addPlugins = function() {
      $('.contact-popover').popover({
        html: true,
        trigger: 'hover',
        placement: 'left'
      });
      $('.company-popover').popover({
        html: true,
        trigger: 'hover'
      });
      $('.timeago-popover').popover({
        html: true,
        trigger: 'hover',
        placement: 'left'
      });
      return $('.quotations').find('span.timeago').timeago();
    };

    QuotationsView.prototype.addOne = function(model) {
      var view;
      view = new optima.views.QuotationView({
        model: model
      });
      $('.quotations tbody').prepend(view.render().el);
      return this.addPlugins();
    };

    QuotationsView.prototype.renderOne = function(model) {
      var view;
      view = new optima.views.QuotationView({
        model: model
      });
      $('.quotations tbody').append(view.render().el);
      return this.addPlugins();
    };

    QuotationsView.prototype.render = function(collection) {
      var html;
      html = [];
      this.collection.each(function(model) {
        var view;
        view = new optima.views.QuotationView({
          model: model
        });
        return html.push(view.render().el);
      }, this);
      $('.quotations tbody').html(html);
      $('.quotations .table-responsive').slimScroll({
        height: '305px'
      });
      return this.addPlugins();
    };

    QuotationsView.prototype.filter = function(filters) {
      this.filters = filters;
      this.collection.fetch({
        reset: true,
        data: filters
      });
      return console.log(this.filters);
    };

    QuotationsView.prototype.paginate = function(filters) {
      console.log(this.filters);
      filters = _.extend(this.filters, filters);
      this.collection.fetch({
        data: filters
      });
      return this.scrollToBottom();
    };

    QuotationsView.prototype.scrollToBottom = function() {
      var container, h;
      container = $('.quotations .table-responsive');
      h = container.prop('scrollHeight') + 'px';
      return container.slimScroll({
        scrollTo: h
      });
    };

    return QuotationsView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationsFilters = (function(superClass) {
    extend(QuotationsFilters, superClass);

    function QuotationsFilters() {
      return QuotationsFilters.__super__.constructor.apply(this, arguments);
    }

    QuotationsFilters.prototype.events = {
      'click .quotation-see-more': 'seeMore',
      'submit .quotation-search': 'filterByQuery',
      'change .filter-status': 'filterByStatus',
      'change .filter-advisor': 'filterByAdvisor',
      'change .filter-client-type': 'filterByClientType',
      'change .filter-quotation-type': 'filterByQuotationType'
    };

    QuotationsFilters.prototype.initialize = function() {
      this.filters = {};
      return this.offset = 0;
    };

    QuotationsFilters.prototype.render = function() {
      var template;
      template = optima.templates.quotations_list_filters;
      $(this.el).html(template);
      return this;
    };

    QuotationsFilters.prototype.filter = function(filter) {
      var filters;
      if (filter) {
        this.filters = _.extend(this.filters, filter);
        filters = _.extend(this.filters, {
          offset: 0
        });
        return pubsub.trigger('quotations:filter', filters);
      }
    };

    QuotationsFilters.prototype.filterByQuery = function(e) {
      var query;
      e.preventDefault();
      query = $('.quotation-query').val();
      return this.filter({
        query: query
      });
    };

    QuotationsFilters.prototype.filterByStatus = function(e) {
      var el;
      el = $(e.currentTarget);
      return this.filter({
        status: el.val()
      });
    };

    QuotationsFilters.prototype.filterByAdvisor = function(e) {
      var el;
      el = $(e.currentTarget);
      return this.filter({
        advisor: el.val()
      });
    };

    QuotationsFilters.prototype.filterByClientType = function(e) {
      var el;
      el = $(e.currentTarget);
      return this.filter({
        client_type: el.val()
      });
    };

    QuotationsFilters.prototype.filterByQuotationType = function(e) {
      var el;
      el = $(e.currentTarget);
      return this.filter({
        quotation_type: el.val()
      });
    };

    return QuotationsFilters;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationsPaginate = (function(superClass) {
    extend(QuotationsPaginate, superClass);

    function QuotationsPaginate() {
      return QuotationsPaginate.__super__.constructor.apply(this, arguments);
    }

    QuotationsPaginate.prototype.events = {
      'click': 'seeMore'
    };

    QuotationsPaginate.prototype.initialize = function() {
      return this.offset = 0;
    };

    QuotationsPaginate.prototype.render = function() {
      var template;
      template = optima.templates.quotation_paginate_btn;
      $(this.el).html(template);
      return this;
    };

    QuotationsPaginate.prototype.seeMore = function(e) {
      var el, more, that;
      that = this;
      e.preventDefault();
      el = e.currentTarget;
      more = this.offset + 10;
      pubsub.trigger('quotations:paginate', {
        offset: more
      });
      return this.offset = more;
    };

    return QuotationsPaginate;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationsResultsView = (function(superClass) {
    extend(QuotationsResultsView, superClass);

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

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationCreate = (function(superClass) {
    extend(QuotationCreate, superClass);

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

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationAppView = (function(superClass) {
    extend(QuotationAppView, superClass);

    function QuotationAppView() {
      return QuotationAppView.__super__.constructor.apply(this, arguments);
    }

    QuotationAppView.prototype.el = $('#quotation');

    QuotationAppView.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.getContact);
    };

    QuotationAppView.prototype.getContact = function() {
      var contact_id;
      contact_id = this.model.get('contact_id');
      optima.contact = new optima.models.Contact({
        id: contact_id
      });
      optima.contact.fetch();
      return optima.quotationContact = new optima.views.QuotationContact({
        model: optima.contact
      });
    };

    return QuotationAppView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationStatus = (function(superClass) {
    extend(QuotationStatus, superClass);

    function QuotationStatus() {
      return QuotationStatus.__super__.constructor.apply(this, arguments);
    }

    QuotationStatus.prototype.el = $('#quotation-options');

    QuotationStatus.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationStatus.prototype.render = function() {
      var template;
      template = optima.templates.quotation_status;
      return $(this.el).find('.panel-heading').html(template(this.model.toJSON()));
    };

    return QuotationStatus;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationOptions = (function(superClass) {
    extend(QuotationOptions, superClass);

    function QuotationOptions() {
      return QuotationOptions.__super__.constructor.apply(this, arguments);
    }

    QuotationOptions.prototype.el = $('#quotation-options');

    QuotationOptions.prototype.events = {
      'change .select-type': 'changeType',
      'change .select-type-category': 'changeTypeCategory',
      'change .select-client-type': 'changeClientType',
      'change .select-advisor': 'changeAdvisor',
      'change .select-found-us': 'changeFoundUs',
      'change .select-offer': 'changeOffer',
      'click .change-delivered': 'changeDelivered',
      'click .open-comment': 'openComment',
      'click .open-no-send': 'openNoSend',
      'click .open-mail': 'openMail',
      'click .send': 'send',
      'click .service-approval-remove': "serviceApprovalRemove",
      'click .service-approval-add': "serviceApprovalAdd"
    };

    QuotationOptions.prototype.initialize = function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'sync', this.updated);
      this.id = this.model.get('id');
      pubsub.on('quotation:effective', this.changeEffective, this);
      pubsub.on('quotation:noEffective', this.openNoEffective, this);
      pubsub.on('quotation:change', this.pull, this);
      return pubsub.on('quotation:contact', this.changeContact, this);
    };

    QuotationOptions.prototype.pull = function() {
      return this.model.fetch();
    };

    QuotationOptions.prototype.render = function() {
      var template;
      template = optima.templates.quotation_options;
      $(this.el).find('.panel-body').html(template(this.model.toJSON()));
      this.blockEdit("Efectiva");
      this.blockEdit("Replanteada");
      this.blockEdit("Enviada");
      this.blockEdit("Entregada");
      return this;
    };

    QuotationOptions.prototype.blockEdit = function(status) {
      if (this.model.get('status') === status) {
        return $('.btn-hidden').hide();
      }
    };

    QuotationOptions.prototype.broadcastChange = function(msg) {
      this.storeActivity(this.id, msg);
      return socket.emit("quotation:change", this.id);
    };

    QuotationOptions.prototype.changeContact = function(contact_id) {
      this.model.save({
        contact_id: contact_id
      });
      return this.broadcastChange("cambio contacto");
    };

    QuotationOptions.prototype.changeType = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        type: val
      });
      return this.broadcastChange("cambio tipo a " + val);
    };

    QuotationOptions.prototype.changeTypeCategory = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        type_category: val
      });
      return this.broadcastChange("cambio categoría de tipo a " + val);
    };

    QuotationOptions.prototype.changeClientType = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        client_type: val
      });
      return this.broadcastChange("cambio tipo de cliente a " + val);
    };

    QuotationOptions.prototype.changeAdvisor = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        advisor: val
      });
      return this.broadcastChange("cambio asesor a " + val);
    };

    QuotationOptions.prototype.changeFoundUs = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        found_us: val
      });
      return this.broadcastChange("cambio como nos encontro a " + val);
    };

    QuotationOptions.prototype.changeOffer = function(e) {
      var val;
      val = $(e.currentTarget).val();
      this.model.save({
        offer: val
      });
      return this.broadcastChange("cambio ofrecer a " + val);
    };

    QuotationOptions.prototype.changeEffective = function() {
      this.model.save({
        status: 'Efectiva'
      });
      return this.broadcastChange("cambio estado a " + val);
    };

    QuotationOptions.prototype.changeDelivered = function(e) {
      this.model.save({
        status: 'Entregada'
      });
      return this.broadcastChange("cambio estado a entregada");
    };

    QuotationOptions.prototype.openComment = function(e) {
      e.preventDefault();
      return optima.quotationComment.render();
    };

    QuotationOptions.prototype.openNoEffective = function() {
      return optima.quotationNoEffective.render();
    };

    QuotationOptions.prototype.openNoSend = function(e) {
      e.preventDefault();
      return optima.quotationNoSend.render();
    };

    QuotationOptions.prototype.openMail = function(e) {
      e.preventDefault();
      return optima.quotationMail.render();
    };

    QuotationOptions.prototype.send = function(e) {
      var id;
      e.preventDefault();
      $(e.currentTarget).text('enviando...');
      id = this.model.get('id');
      return $.post("/api/v1/quotations/" + id + "/sendmail").done((function(_this) {
        return function() {
          alertify.success('Cotización enviada.');
          _this.updateQuotationSent();
          _this.broadcastChange("cambio estado a enviada");
          optima.quotation.fetch();
          return $(e.currentTarget).text('enviado');
        };
      })(this)).fail((function(_this) {
        return function() {
          alertify.error('Por favor llenar los campos necesarios antes de enviar.');
          return $(e.currentTarget).text('enviar');
        };
      })(this));
    };

    QuotationOptions.prototype.updateQuotationSent = function() {
      var created_sent_diff, diff, now, status;
      status = this.model.get('status');
      created_sent_diff = this.model.get('created_sent_diff');
      if (status !== "Efectiva" || status !== "Seguimiento") {
        if (!created_sent_diff || created_sent_diff < 0) {
          now = moment().format();
          diff = moment(now).diff(this.model.get('created_at'), 'minutes');
          return this.model.save({
            status: 'Enviada',
            no_effective: '',
            sent_at: now,
            created_sent_diff: diff
          });
        }
      }
    };

    QuotationOptions.prototype.checkResultsFields = function() {
      if (!this.model.get('type') && !this.model.get('type_category') && !this.model.get('client_type') && !this.model.get('advisor') && !this.model.get('found_us') && !this.model.get('offer')) {
        return false;
      } else {
        return true;
      }
    };

    QuotationOptions.prototype.serviceApprovalRemove = function(evt) {
      evt.preventDefault();
      return this.model.save({
        service_approval: 1
      });
    };

    QuotationOptions.prototype.serviceApprovalAdd = function(evt) {
      evt.preventDefault();
      return this.model.save({
        service_approval: 0
      });
    };

    return QuotationOptions;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationComment = (function(superClass) {
    extend(QuotationComment, superClass);

    function QuotationComment() {
      return QuotationComment.__super__.constructor.apply(this, arguments);
    }

    QuotationComment.prototype.el = $('#quotation-comment-modal');

    QuotationComment.prototype.template = $('#quotation-comment-template');

    QuotationComment.prototype.events = {
      'click a.quotation-comment-save': 'save'
    };

    QuotationComment.prototype.initialize = function() {
      return this.id = this.model.get('id');
    };

    QuotationComment.prototype.broadcastChange = function(msg) {
      socket.emit("quotation:change", this.id);
      return this.storeActivity(this.id, msg);
    };

    QuotationComment.prototype.render = function() {
      var t;
      t = optima.templates.quotation_comment;
      $(this.el).find('.modal-content').html(t(this.model.toJSON()));
      $(this.el).modal({
        backdrop: 'static'
      });
      return optima.summernote(this.el);
    };

    QuotationComment.prototype.save = function(e) {
      var comment;
      e.preventDefault();
      comment = $('#quotation-comment-text').code();
      this.model.set({
        comment: comment
      });
      this.model.save();
      this.broadcastChange("agrego un comentario");
      return $(this.el).modal('hide');
    };

    return QuotationComment;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationNoEffective = (function(superClass) {
    extend(QuotationNoEffective, superClass);

    function QuotationNoEffective() {
      return QuotationNoEffective.__super__.constructor.apply(this, arguments);
    }

    QuotationNoEffective.prototype.el = $('#quotation-no-effective-modal');

    QuotationNoEffective.prototype.template = $('#quotation-no-effective-template');

    QuotationNoEffective.prototype.events = {
      'click a.quotation-no-effective-save': 'save'
    };

    QuotationNoEffective.prototype.initialize = function() {
      this.activity = new optima.models.Activity;
      return this.id = this.model.get('id');
    };

    QuotationNoEffective.prototype.broadcastChange = function(msg) {
      socket.emit("quotation:change", this.id);
      return this.storeActivity(this.id, msg);
    };

    QuotationNoEffective.prototype.render = function() {
      var el, source, t;
      source = $(this.template).html();
      t = optima.templates.quotation_no_effective;
      el = $(this.el);
      el.find('.modal-content').html(t(this.model.toJSON()));
      return el.modal({
        backdrop: 'static'
      });
    };

    QuotationNoEffective.prototype.save = function(e) {
      var cause, note;
      e.preventDefault();
      cause = $('#quotation-no-effective-select').val();
      note = $('#no_effective_note').val();
      this.model.set({
        status: "No efectiva",
        status_cause: cause,
        status_note: note
      });
      this.model.save();
      $(this.el).modal('hide');
      return this.broadcastChange("cambio estado a no efectiva");
    };

    return QuotationNoEffective;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationNoSend = (function(superClass) {
    extend(QuotationNoSend, superClass);

    function QuotationNoSend() {
      return QuotationNoSend.__super__.constructor.apply(this, arguments);
    }

    QuotationNoSend.prototype.el = $('#quotation-no-send-modal');

    QuotationNoSend.prototype.events = {
      'click a.quotation-no-send-save': 'save'
    };

    QuotationNoSend.prototype.initialize = function() {
      this.activity = new optima.models.Activity;
      return this.id = this.model.get('id');
    };

    QuotationNoSend.prototype.broadcastChange = function(msg) {
      socket.emit("quotation:change", this.id);
      return this.storeActivity(this.id, msg);
    };

    QuotationNoSend.prototype.render = function() {
      var el, source, t;
      source = $(this.template).html();
      t = optima.templates.quotation_no_send;
      el = $(this.el);
      el.find('.modal-content').html(t(this.model.toJSON()));
      return el.modal({
        backdrop: 'static'
      });
    };

    QuotationNoSend.prototype.save = function(e) {
      var cause, note;
      e.preventDefault();
      cause = $('#quotation-no-send-select').val();
      note = $('#no_send_note').val();
      this.model.set({
        status: "No enviada",
        status_cause: cause,
        status_note: note
      });
      this.model.save();
      $(this.el).modal('hide');
      return this.broadcastChange("cambio estado a no enviada");
    };

    return QuotationNoSend;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationMail = (function(superClass) {
    extend(QuotationMail, superClass);

    function QuotationMail() {
      return QuotationMail.__super__.constructor.apply(this, arguments);
    }

    QuotationMail.prototype.el = $('#quotation-mail-modal');

    QuotationMail.prototype.template = $('#quotation-mail-template');

    QuotationMail.prototype.events = {
      'click a.quotation-mail-save': 'save'
    };

    QuotationMail.prototype.initialize = function() {
      this.activity = new optima.models.Activity;
      return this.id = this.model.get('id');
    };

    QuotationMail.prototype.broadcastChange = function(msg) {
      socket.emit("quotation:change", this.id);
      return this.storeActivity(this.id, msg);
    };

    QuotationMail.prototype.render = function() {
      var source, t;
      source = $(this.template).html();
      t = optima.templates.quotation_mail;
      $(this.el).find('.modal-content').html(t(this.model.toJSON()));
      $(this.el).modal({
        backdrop: 'static'
      });
      return optima.summernote(this.el);
    };

    QuotationMail.prototype.save = function(e) {
      var data;
      e.preventDefault();
      data = $('#quotation-mail-form').serializeJSON();
      data['mail_message'] = $(this.el).find('.summernote').code();
      this.model.set(data);
      this.model.save();
      $(this.el).modal('hide');
      return this.broadcastChange("agrego email");
    };

    return QuotationMail;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationTimes = (function(superClass) {
    extend(QuotationTimes, superClass);

    function QuotationTimes() {
      return QuotationTimes.__super__.constructor.apply(this, arguments);
    }

    QuotationTimes.prototype.el = $('#quotation-times');

    QuotationTimes.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    QuotationTimes.prototype.render = function() {
      var template;
      template = optima.templates.quotation_time;
      $(this.el).find('.table-responsive').html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    return QuotationTimes;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationProductView = (function(superClass) {
    extend(QuotationProductView, superClass);

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
      $(this.el).data('id', this.model.get('id'));
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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationProductsView = (function(superClass) {
    extend(QuotationProductsView, superClass);

    function QuotationProductsView() {
      return QuotationProductsView.__super__.constructor.apply(this, arguments);
    }

    QuotationProductsView.prototype.el = $('#quotation-products');

    QuotationProductsView.prototype.events = {
      'click a.quotation-product-open-create': 'openCreate',
      "sortstop": "stop"
    };

    QuotationProductsView.prototype.stop = function(event, ui) {
      var id, pos, that;
      pos = ui.item.index();
      id = $(ui.item).data('id');
      that = this;
      return $.map($(this.el).find('tbody tr'), function(el) {
        var model;
        pos = $(el).index();
        id = $(el).data('id');
        model = that.collection.get(id);
        return model.save({
          position: pos
        });
      });
    };

    QuotationProductsView.prototype.initialize = function() {
      var table;
      this.listenTo(this.collection, 'reset', this.render, this);
      this.listenTo(this.collection, 'add', this.addOne, this);
      pubsub.on("products:pull", this.getMore, this);
      this.quotation_id = optima.pathArray[2];
      table = $(this.el).find('table tbody');
      return $(this.el).find('.sortable').sortable();
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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationProductCreate = (function(superClass) {
    extend(QuotationProductCreate, superClass);

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
});

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

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ServiceView = (function(superClass) {
    extend(ServiceView, superClass);

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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ServicesView = (function(superClass) {
    extend(ServicesView, superClass);

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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ServiceCreate = (function(superClass) {
    extend(ServiceCreate, superClass);

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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ServiceEdit = (function(superClass) {
    extend(ServiceEdit, superClass);

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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationServiceView = (function(superClass) {
    extend(QuotationServiceView, superClass);

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
      var serviceId;
      e.preventDefault();
      serviceId = this.model.get('id');
      $.ajax({
        method: 'DELETE',
        url: "/api/v1/quotations/" + this.quotation_id + "/services/" + serviceId
      });
      socket.emit("quotation-service", this.quotation_id);
      this.storeActivity(this.quotation_id, "elimino un servicio");
      return this.remove();
    };

    return QuotationServiceView;

  })(Backbone.View);
});

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

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ServiceResult = (function(superClass) {
    extend(ServiceResult, superClass);

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
      template = optima.templates.service_item_result;
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
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ServiceResults = (function(superClass) {
    extend(ServiceResults, superClass);

    function ServiceResults() {
      return ServiceResults.__super__.constructor.apply(this, arguments);
    }

    ServiceResults.prototype.el = $('#quotation-service-create-modal');

    ServiceResults.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    ServiceResults.prototype.render = function() {
      var html;
      html = [];
      this.collection.each(function(model) {
        var view;
        view = new optima.views.ServiceResult({
          model: model
        });
        return html.push(view.render().el);
      }, this);
      return $(this.el).find('table').empty().append(html);
    };

    ServiceResults.prototype.close = function() {
      return this.remove();
    };

    return ServiceResults;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationServiceSelect = (function(superClass) {
    extend(QuotationServiceSelect, superClass);

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

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TodoView = (function(superClass) {
    extend(TodoView, superClass);

    function TodoView() {
      return TodoView.__super__.constructor.apply(this, arguments);
    }

    TodoView.prototype.tagName = "tr";

    TodoView.prototype.events = {
      'click .tracking-open-edit': 'openEdit',
      'change .todo-completed': 'completed'
    };

    TodoView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'error', this.showErrors);
    };

    TodoView.prototype.render = function() {
      var template;
      template = optima.templates.todo;
      $(this.el).html(template(this.model.toJSON()));
      $(this.el).find('span.timeago').timeago();
      return this;
    };

    TodoView.prototype.completed = function() {
      this.model.save({
        completed: 1
      });
      this.storeActivity(this.id, "Completo una tarea");
      socket.emit('todos');
      return this.remove();
    };

    TodoView.prototype.mailing = function() {
      return $.get('http://127.0.0.1:3000/sendmail', {
        data: {
          message: 'alo'
        }
      }).done(function(res) {
        return console.log(res);
      });
    };

    return TodoView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TodosView = (function(superClass) {
    extend(TodosView, superClass);

    function TodosView() {
      return TodosView.__super__.constructor.apply(this, arguments);
    }

    TodosView.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.addOne);
      return pubsub.on("todos:pull", this.pull, this);
    };

    TodosView.prototype.pull = function() {
      return this.collection.fetch({
        reset: true
      });
    };

    TodosView.prototype.render = function() {
      var $tbody, html;
      html = [];
      $tbody = $('#todos table tbody');
      this.collection.each(function(model) {
        var view;
        view = new optima.views.TodoView({
          model: model
        });
        return html.push(view.render().el);
      }, this);
      return $tbody.html(html);
    };

    TodosView.prototype.showMoreInfo = function(field) {
      if (optima.user_id !== 3) {
        return $().addClass('hidden');
      }
    };

    return TodosView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TodoCreateView = (function(superClass) {
    extend(TodoCreateView, superClass);

    function TodoCreateView() {
      return TodoCreateView.__super__.constructor.apply(this, arguments);
    }

    TodoCreateView.prototype.events = {
      'click .todo-save-store': 'store',
      'click .modal-close': 'cancel'
    };

    TodoCreateView.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.stored);
      this.listenTo(this.model, 'error', this.showErrors);
      return this.container = $("#todo-create-modal");
    };

    TodoCreateView.prototype.render = function(users, tracking_id) {
      var $el, data, template;
      $el = $(this.el);
      template = optima.templates.todo_create;
      data = {
        users: users,
        tracking_id: tracking_id
      };
      $el.html(template(data));
      return this.openModal();
    };

    TodoCreateView.prototype.openModal = function() {
      var hiddenName;
      this.container.html(this.el);
      this.container.find('.datepicker').pickadate({
        formatSubmit: 'yyyy/mm/dd'
      });
      this.container.find('.timepicker').pickatime({
        formatSubmit: 'HH:i'
      }, hiddenName = true);
      return this.container.modal({
        backdrop: 'static'
      });
    };

    TodoCreateView.prototype.serializeData = function(dataForm) {
      dataForm['quotation_id'] = optima.pathArray[2];
      dataForm['expires_date'] = dataForm['expires_date_submit'];
      dataForm['expires_time'] = dataForm['expires_time_submit'];
      if (dataForm['tracking_id'] === '') {
        delete dataForm['tracking_id'];
      }
      return dataForm;
    };

    TodoCreateView.prototype.store = function(e) {
      var data, dataForm;
      e.preventDefault();
      dataForm = $(this.el).find('form').serializeJSON();
      data = this.serializeData(dataForm);
      return this.model.save(data, {
        wait: true
      });
    };

    TodoCreateView.prototype.storeNotifications = function() {
      var notification;
      this.storeActivity(this.id, "Agrego una tarea");
      notification = new optima.models.Notification;
      return notification.save({
        user_id: model.get('user_id'),
        message: "Nueva tarea"
      });
    };

    TodoCreateView.prototype.notify = function(model) {
      pubsub.trigger('notification:store', "Nueva tarea");
      pubsub.trigger('todoTracking:stored', model);
      return socket.emit('todos', model.id);
    };

    TodoCreateView.prototype.stored = function(model) {
      if (model.id && optima.todos) {
        optima.todos.add(model);
        this.notify(model);
        this.container.modal('hide');
        this.closeModal();
      } else {
        this.notify(model);
        this.container.modal('hide');
        this.closeModal();
      }
      return pubsub.trigger("todos:mail", model);
    };

    TodoCreateView.prototype.cancel = function(e) {
      e.preventDefault();
      this.container.modal('hide');
      return this.closeModal();
    };

    return TodoCreateView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TodoMailNew = (function(superClass) {
    extend(TodoMailNew, superClass);

    function TodoMailNew() {
      return TodoMailNew.__super__.constructor.apply(this, arguments);
    }

    TodoMailNew.prototype.initialize = function() {
      return pubsub.on("todos:mail", this.render, this);
    };

    TodoMailNew.prototype.render = function(model) {
      var modelAttributes, template, view;
      template = optima.templates.todo_mail;
      modelAttributes = model.toJSON();
      view = template(modelAttributes);
      return $.post("http://127.0.0.1:3000/todos/sendmail", {
        message: view,
        subject: 'Nueva Tarea Asignada',
        to: [
          {
            "email": modelAttributes.user.email
          }
        ]
      });
    };

    return TodoMailNew;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationTracking = (function(superClass) {
    extend(QuotationTracking, superClass);

    function QuotationTracking() {
      return QuotationTracking.__super__.constructor.apply(this, arguments);
    }

    QuotationTracking.prototype.events = {
      'click .tracking-open-edit': 'openEdit',
      'click .todo-open-create': 'openTodoCreate',
      'click .tracking-delete': 'delete'
    };

    QuotationTracking.prototype.initialize = function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'error', this.showErrors);
      pubsub.on('todoTracking:stored', this.getTodos, this);
      return pubsub.on("todos:pull", this.getTodos, this);
    };

    QuotationTracking.prototype.render = function() {
      var template;
      template = optima.templates.tracking;
      this.$el.html(template(this.model.toJSON()));
      return this;
    };

    QuotationTracking.prototype.getTodos = function() {
      var id, todos, todosView;
      id = this.model.get('id');
      todos = new optima.collections.Todos;
      todosView = new optima.views.TrackingTodos({
        collection: todos,
        el: this.$el
      });
      return todos.fetch({
        reset: true,
        data: {
          where: "tracking_id = " + id
        }
      });
    };

    QuotationTracking.prototype.openTodoCreate = function(e) {
      var id, users, view;
      e.preventDefault();
      users = new optima.collections.Users;
      view = new optima.views.TodoCreateView({
        model: new optima.models.Todo
      });
      id = this.model.get('id');
      return users.fetch().done(function(users) {
        return view.render(users, id);
      });
    };

    return QuotationTracking;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationTrackings = (function(superClass) {
    extend(QuotationTrackings, superClass);

    function QuotationTrackings() {
      return QuotationTrackings.__super__.constructor.apply(this, arguments);
    }

    QuotationTrackings.prototype.el = $("#trackings");

    QuotationTrackings.prototype.events = {
      'click .tracking-open-create': 'openCreate',
      'click .effective': 'effective',
      'click .no-effective': 'noEffective'
    };

    QuotationTrackings.prototype.initialize = function() {
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.addOne);
      pubsub.on("trackings:pull", this.pull, this);
      return this.quotation_id = optima.pathArray[2];
    };

    QuotationTrackings.prototype.pull = function(quotation_id) {
      return this.collection.fetch({
        reset: true,
        data: {
          quotation_id: this.quotation_id
        }
      });
    };

    QuotationTrackings.prototype.addOne = function(model) {
      var view;
      view = new optima.views.QuotationTracking({
        model: model
      });
      $(this.el).find('.last-tracking').prepend(view.render().el);
      return view.getTodos(model.get('id'));
    };

    QuotationTrackings.prototype.render = function() {
      $(this.el).find('.trackings-container').empty();
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.QuotationTracking({
          model: model
        });
        $(this.el).find('.trackings-container').append(view.render().el);
        return view.getTodos(model.get('id'));
      }, this);
    };

    QuotationTrackings.prototype.openCreate = function(e) {
      var collection;
      e.preventDefault();
      collection = new optima.collections.Contacts;
      return collection.fetch({
        data: {
          quotation_id: optima.pathArray[2]
        }
      }).done(function(response) {
        var view;
        view = new optima.views.TrackingCreateView({
          model: new optima.models.Tracking
        });
        return view.render(response);
      });
    };

    QuotationTrackings.prototype.effective = function(e) {
      e.preventDefault();
      return pubsub.trigger('quotation:effective');
    };

    QuotationTrackings.prototype.noEffective = function(e) {
      e.preventDefault();
      return pubsub.trigger('quotation:noEffective');
    };

    return QuotationTrackings;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TrackingCreateView = (function(superClass) {
    extend(TrackingCreateView, superClass);

    function TrackingCreateView() {
      return TrackingCreateView.__super__.constructor.apply(this, arguments);
    }

    TrackingCreateView.prototype.el = $('#tracking-create-modal');

    TrackingCreateView.prototype.template = $('#tracking-create-template');

    TrackingCreateView.prototype.events = {
      'click .tracking-save-store': 'store',
      'click .modal-close': 'cancel'
    };

    TrackingCreateView.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.stored);
      this.listenTo(this.model, 'error', this.showErrors);
      return this.id = optima.pathArray[2];
    };

    TrackingCreateView.prototype.addPlugins = function() {
      var hiddenName;
      $(this.el).find('.datepicker').pickadate({
        formatSubmit: 'yyyy/mm/dd'
      }, hiddenName = true);
      return $(this.el).find('.timepicker').pickatime({
        min: [6, 0],
        max: [20, 0],
        interval: 5,
        formatSubmit: 'HH:i'
      }, hiddenName = true);
    };

    TrackingCreateView.prototype.render = function(contacts) {
      var template;
      template = optima.templates.tracking_create;
      $(this.el).find('.modal-content').html(template(contacts));
      this.addPlugins();
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    TrackingCreateView.prototype.store = function(e) {
      var dataForm;
      e.preventDefault();
      dataForm = $(this.el).find('form').serializeJSON();
      dataForm['quotation_id'] = optima.pathArray[2];
      dataForm['register_date'] = dataForm['register_date_submit'];
      dataForm['register_time'] = dataForm['register_time_submit'];
      return this.model.save(dataForm, {
        wait: true
      });
    };

    TrackingCreateView.prototype.stored = function(model) {
      var diff, now;
      if (model.id) {
        console.log(model);
        optima.trackings.add(model);
        console.log(optima.quotation.get('sent_at'));
        now = moment().format();
        diff = moment(now).diff(optima.quotation.get('sent_at'), 'minutes');
        optima.quotation.save({
          status: 'Seguimiento',
          sent_confirmed_diff: diff
        });
        this.storeActivity(this.id, "Agrego un registro");
        socket.emit("trackings", this.id);
        return this.closeModal();
      }
    };

    TrackingCreateView.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return TrackingCreateView;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TrackingTodo = (function(superClass) {
    extend(TrackingTodo, superClass);

    function TrackingTodo() {
      return TrackingTodo.__super__.constructor.apply(this, arguments);
    }

    TrackingTodo.prototype.tagName = 'tr';

    TrackingTodo.prototype.render = function() {
      var template;
      template = optima.templates.todo_tracking;
      this.$el.html(template(this.model.toJSON()));
      return this;
    };

    return TrackingTodo;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TrackingTodos = (function(superClass) {
    extend(TrackingTodos, superClass);

    function TrackingTodos() {
      return TrackingTodos.__super__.constructor.apply(this, arguments);
    }

    TrackingTodos.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    TrackingTodos.prototype.render = function() {
      this.$el.find('.todos tbody').empty();
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.TrackingTodo({
          model: model
        });
        return this.$el.find('.todos tbody').append(view.render().el);
      }, this);
    };

    return TrackingTodos;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportsFilters = (function(superClass) {
    extend(ReportsFilters, superClass);

    function ReportsFilters() {
      return ReportsFilters.__super__.constructor.apply(this, arguments);
    }

    ReportsFilters.prototype.el = $("#reports-filters");

    ReportsFilters.prototype.events = {
      'click .btn-primary': 'byType',
      'change .by-client': 'byClientType',
      'changeDate .datepicker_start': 'byDateStart',
      'changeDate .datepicker_end': 'byDateEnd',
      'change .by-status': 'byStatus'
    };

    ReportsFilters.prototype.initialize = function() {
      var date_end, date_start, month, now, year;
      now = new Date();
      month = now.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      year = now.getFullYear();
      date_start = year + "-" + month + "-01";
      date_end = year + "-" + month + "-31";
      this.filters = {
        date_start: date_start,
        date_end: date_end
      };
      $(this.el).find('.datepicker_start').datepicker({
        format: "yyyy-mm-dd",
        language: "es"
      });
      return $(this.el).find('.datepicker_end').datepicker({
        format: "yyyy-mm-dd",
        language: "es"
      });
    };

    ReportsFilters.prototype.filter = function() {
      return this.model.fetch({
        data: this.filters
      });
    };

    ReportsFilters.prototype.byDateStart = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        date_start: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byDateEnd = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        date_end: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byType = function(e) {
      var el;
      el = $(e.currentTarget).find('input').val();
      this.filters = _.extend(this.filters, {
        type: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byMonth = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        month: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byYear = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        year: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byYearEnd = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        year_end: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byMonthEnd = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        month_end: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byClientType = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        client_type: el
      });
      return this.filter();
    };

    ReportsFilters.prototype.byStatus = function(e) {
      var el;
      el = $(e.currentTarget).val();
      this.filters = _.extend(this.filters, {
        status: el
      });
      return this.filter();
    };

    return ReportsFilters;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByStatus = (function(superClass) {
    extend(ReportByStatus, superClass);

    function ReportByStatus() {
      return ReportByStatus.__super__.constructor.apply(this, arguments);
    }

    ReportByStatus.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByStatus.prototype.setData = function() {
      var data;
      data = {
        labels: ["Borrador", "Enviada", "Entregada", "Seguimiento", "Efectiva", "No Efectiva", "No enviada", "Replanteada"],
        datasets: [
          {
            label: "Etiquetas",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().status
          }
        ]
      };
      return this.render(data);
    };

    ReportByStatus.prototype.render = function(data) {
      var ctx, options, view;
      $("#byStatus").empty().append('<canvas id="byStatusCanvas" width="600" height="400"></canvas>');
      ctx = $("#byStatusCanvas").get(0).getContext("2d");
      options = {
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: function(label) {
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        },
        tooltipTemplate: function(label) {
          return label.label + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
      };
      return view = new Chart(ctx).Bar(data, options);
    };

    return ReportByStatus;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByStatusCount = (function(superClass) {
    extend(ReportByStatusCount, superClass);

    function ReportByStatusCount() {
      return ReportByStatusCount.__super__.constructor.apply(this, arguments);
    }

    ReportByStatusCount.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByStatusCount.prototype.setData = function() {
      var data;
      data = {
        labels: ["Borrador", "Enviada", "Entregada", "Seguimiento", "Efectiva", "No Efectiva", "No enviada", "Replanteada"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().statusCount
          }
        ]
      };
      return this.render(data);
    };

    ReportByStatusCount.prototype.render = function(data) {
      var ctx, view;
      $("#byStatusCount").empty().append('<canvas id="byStatusCountCanvas" width="600" height="400"></canvas>');
      ctx = $("#byStatusCountCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data, {
        responsive: true
      });
    };

    return ReportByStatusCount;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByFindUs = (function(superClass) {
    extend(ReportByFindUs, superClass);

    function ReportByFindUs() {
      return ReportByFindUs.__super__.constructor.apply(this, arguments);
    }

    ReportByFindUs.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByFindUs.prototype.setData = function() {
      var data;
      data = {
        labels: ["Asesores Comerciales", "Cliente", "Página Web Avante", "Google Adwords", "Referido", "Promoción", "Paginas Amarillas", "Paginas Amarillas Web", "Teléfono", "Redes Sociales"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().findUS
          }
        ]
      };
      return this.render(data);
    };

    ReportByFindUs.prototype.render = function(data) {
      var ctx, options, view;
      $("#byFindUs").empty().append('<canvas id="byFindUsCanvas" width="600" height="400"></canvas>');
      ctx = $("#byFindUsCanvas").get(0).getContext("2d");
      options = {
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: function(label) {
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
          return {
            tooltipTemplate: function(label) {
              return label.label + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            }
          };
        }
      };
      return view = new Chart(ctx).Bar(data, options);
    };

    return ReportByFindUs;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByFindUsCount = (function(superClass) {
    extend(ReportByFindUsCount, superClass);

    function ReportByFindUsCount() {
      return ReportByFindUsCount.__super__.constructor.apply(this, arguments);
    }

    ReportByFindUsCount.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByFindUsCount.prototype.setData = function() {
      var ctx, data, options, view;
      data = {
        labels: ["Asesores Comerciales", "Cliente", "Página Web Avante", "Google Adwords", "Referido", "Promoción", "Paginas Amarillas", "Paginas Amarillas Web", "Teléfono", "Redes Sociales"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().findUSCount
          }
        ]
      };
      $("#byFindUsCount").find('.panel-body').empty().append('<canvas id="byFindUsCountCanvas" width="600" height="400"></canvas>');
      ctx = $("#byFindUsCountCanvas").get(0).getContext("2d");
      options = {
        responsive: true,
        tooltipCornerRadius: 0
      };
      return view = new Chart(ctx).Bar(data, options);
    };

    return ReportByFindUsCount;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByAdvisor = (function(superClass) {
    extend(ReportByAdvisor, superClass);

    function ReportByAdvisor() {
      return ReportByAdvisor.__super__.constructor.apply(this, arguments);
    }

    ReportByAdvisor.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByAdvisor.prototype.setData = function() {
      var data;
      data = {
        labels: ["Andrés Rojas", "Diego Peña"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().advisors
          }
        ]
      };
      return this.render(data);
    };

    ReportByAdvisor.prototype.render = function(data) {
      var ctx, view;
      $("#byAdvisors").empty().append('<canvas id="byAdvisorsCanvas" width="600" height="400"></canvas>');
      ctx = $("#byAdvisorsCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data, {
        responsive: true
      });
    };

    return ReportByAdvisor;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByType = (function(superClass) {
    extend(ReportByType, superClass);

    function ReportByType() {
      return ReportByType.__super__.constructor.apply(this, arguments);
    }

    ReportByType.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByType.prototype.setData = function() {
      var data;
      data = {
        labels: ["Activo", "Inactivo", "Nuevo"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().client_type
          }
        ]
      };
      return this.render(data);
    };

    ReportByType.prototype.render = function(data) {
      var ctx, view;
      $("#byClientType").empty().append('<canvas id="byClientTypeCanvas" width="600" height="400"></canvas>');
      ctx = $("#byClientTypeCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data, {
        responsive: true
      });
    };

    return ReportByType;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByNoEffective = (function(superClass) {
    extend(ReportByNoEffective, superClass);

    function ReportByNoEffective() {
      return ReportByNoEffective.__super__.constructor.apply(this, arguments);
    }

    ReportByNoEffective.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByNoEffective.prototype.setData = function() {
      var data;
      console.log(this.model.toJSON().no_effective);
      data = {
        labels: ["No disponible", "No confiable", "Competencia", "Por cliente", "Sin status"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(246, 97, 87, 1)",
            strokeColor: "rgba(246, 97, 87, 1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().no_effective
          }
        ]
      };
      return this.render(data);
    };

    ReportByNoEffective.prototype.render = function(data) {
      var ctx, options, view;
      $('#byNoEffective').empty().append('<canvas id="byNoEffectiveCanvas" width="600" height="400"></canvas>');
      ctx = $("#byNoEffectiveCanvas").get(0).getContext("2d");
      options = {
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: function(label) {
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        },
        tooltipTemplate: function(label) {
          return label.label + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
      };
      return view = new Chart(ctx).Bar(data, options);
    };

    return ReportByNoEffective;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByNoEffectiveCount = (function(superClass) {
    extend(ReportByNoEffectiveCount, superClass);

    function ReportByNoEffectiveCount() {
      return ReportByNoEffectiveCount.__super__.constructor.apply(this, arguments);
    }

    ReportByNoEffectiveCount.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByNoEffectiveCount.prototype.setData = function() {
      var data;
      data = {
        labels: ["No disponible", "No confiable", "Competencia", "Por cliente", "Sin status"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(246, 97, 87, 1)",
            strokeColor: "rgba(246, 97, 87, 1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().no_effective_count
          }
        ]
      };
      return this.render(data);
    };

    ReportByNoEffectiveCount.prototype.render = function(data) {
      var ctx, options, view;
      $("#byNoEffectiveCount").empty().append('<canvas id="byNoEffectiveCanvasCount" width="600" height="400"></canvas>');
      ctx = $("#byNoEffectiveCanvasCount").get(0).getContext("2d");
      options = {
        responsive: true,
        tooltipCornerRadius: 0,
        scaleLabel: function(label) {
          return label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        },
        tooltipTemplate: function(label) {
          return label.label + ': ' + label.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
      };
      return view = new Chart(ctx).Bar(data, options);
    };

    return ReportByNoEffectiveCount;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportByDiffSent = (function(superClass) {
    extend(ReportByDiffSent, superClass);

    function ReportByDiffSent() {
      return ReportByDiffSent.__super__.constructor.apply(this, arguments);
    }

    ReportByDiffSent.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.setData);
    };

    ReportByDiffSent.prototype.setData = function() {
      var data;
      data = {
        labels: ["Dentro - Inventario", "Fuera - Inventario", "Dentro - Pedido", "Fuera - Pedido"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(231, 161, 31, .7)",
            strokeColor: "rgba(231, 161, 31,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(231, 161, 31,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.model.toJSON().sent_diff
          }
        ]
      };
      return this.render(data);
    };

    ReportByDiffSent.prototype.render = function(data) {
      var ctx, view;
      $("#byDiffSent").empty().append('<canvas id="byDiffSentCanvas" width="600" height="400"></canvas>');
      ctx = $("#byDiffSentCanvas").get(0).getContext("2d");
      return view = new Chart(ctx).Bar(data, {
        responsive: true
      });
    };

    return ReportByDiffSent;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ReportsTotal = (function(superClass) {
    extend(ReportsTotal, superClass);

    function ReportsTotal() {
      return ReportsTotal.__super__.constructor.apply(this, arguments);
    }

    ReportsTotal.prototype.initialize = function() {
      return this.listenTo(this.model, 'change', this.render);
    };

    ReportsTotal.prototype.render = function() {
      var template;
      template = optima.templates.reports_total;
      $(this.el).empty().append(template(this.model.toJSON()));
      return $("#total").empty().append(this.el);
    };

    return ReportsTotal;

  })(Backbone.View);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

optima.views.AppView = (function(superClass) {
  extend(AppView, superClass);

  function AppView() {
    return AppView.__super__.constructor.apply(this, arguments);
  }

  AppView.prototype.el = $('#optima-app');

  AppView.prototype.events = {
    'submit #search-quotation': 'searchQuotation'
  };

  AppView.prototype.searchQuotation = function(e) {
    var query;
    e.preventDefault();
    query = $(e.currentTarget).find('input').val();
    return window.location = "/search=" + query;
  };

  return AppView;

})(Backbone.View);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.routers.Workspace = (function(superClass) {
    extend(Workspace, superClass);

    function Workspace() {
      return Workspace.__super__.constructor.apply(this, arguments);
    }

    Workspace.prototype.routes = {
      '': 'dashboard',
      'search=:query': 'dashboard',
      'companies': 'startCompanies',
      'contacts': 'startContacts',
      'services': 'startServices',
      'quotations/:id': 'startQuotation',
      'results': 'startReports'
    };

    Workspace.prototype.initialize = function() {
      optima.appView = new optima.views.AppView;
      optima.activities = new optima.collections.Activities;
      return optima.activitiesView = new optima.views.ActivitiesView({
        collection: optima.activities
      });
    };

    Workspace.prototype.startCompanies = function() {
      optima.companies = new optima.collections.Companies;
      optima.companies.fetch({
        reset: true
      });
      optima.companiesView = new optima.views.CompaniesView({
        collection: optima.companies
      });
      return optima.companyContacts = new optima.views.CompanyContacts;
    };

    Workspace.prototype.startContacts = function() {
      optima.contacts = new optima.collections.Contacts;
      optima.contacts.fetch({
        reset: true
      });
      return optima.contactsView = new optima.views.ContactsView({
        collection: optima.contacts
      });
    };

    Workspace.prototype.startServices = function() {
      optima.services = new optima.collections.Services;
      optima.services.fetch({
        reset: true
      });
      return optima.servicesView = new optima.views.ServicesView({
        collection: optima.services
      });
    };

    Workspace.prototype.dashboard = function(query) {
      var page, quotationsPaginate;
      page = new optima.views.DashboardPage;
      $("#main-content").empty().append(page.render().el);
      optima.quotations = new optima.collections.Quotations;
      optima.quotationsView = new optima.views.QuotationsView({
        collection: optima.quotations
      });
      optima.listFilters = new optima.views.QuotationsFilters();
      $('.quotations-filters-container').append(optima.listFilters.render().el);
      quotationsPaginate = new optima.views.QuotationsPaginate();
      $('.quotation-paginate-container').append(quotationsPaginate.render().el);
      optima.quotations.fetch({
        reset: true
      });
      optima.activities.fetch({
        reset: true
      });
      optima.todos = new optima.collections.Todos;
      if (optima.user_id === 3) {
        optima.todos.fetch({
          reset: true,
          data: {
            where: "completed IS NULL"
          }
        });
      } else {
        optima.todos.fetch({
          reset: true
        });
      }
      optima.todosView = new optima.views.TodosView({
        collection: optima.todos
      });
      new optima.views.TodoMailNew;
      return optima.views.quotationCreate = new optima.views.QuotationCreate({
        model: new optima.models.Quotation
      });
    };

    Workspace.prototype.startQuotationsSearch = function(query) {
      optima.quotations = new optima.collections.Quotations;
      optima.quotations.fetch({
        reset: true,
        data: {
          query: query
        }
      });
      optima.quotationsView = new optima.views.QuotationsView({
        collection: optima.quotations
      });
      optima.quotationsFilteredView = new optima.views.QuotationsFilteredView({
        collection: optima.quotations
      });
      optima.activities = new optima.collections.Activities;
      optima.activities.fetch({
        reset: true
      });
      return optima.activitiesView = new optima.views.ActivitiesView({
        collection: optima.activities
      });
    };

    Workspace.prototype.startQuotation = function(id) {
      optima.quotationProducts = new optima.collections.QuotationProducts;
      optima.quotationProducts.fetch({
        reset: true,
        data: {
          quotation_id: id
        }
      });
      optima.quotationProductsView = new optima.views.QuotationProductsView({
        collection: optima.quotationProducts
      });
      optima.quotationServices = new optima.collections.Services;
      optima.quotationServicesView = new optima.views.QuotationServicesView({
        collection: optima.quotationServices
      });
      pubsub.trigger("services:pull", id);
      optima.quotationActivities = new optima.collections.Activities;
      optima.quotationActivities.fetch({
        reset: true,
        data: {
          quotation_id: id
        }
      });
      optima.quotationActivitiesView = new optima.views.QuotationActivitiesView({
        collection: optima.quotationActivities
      });
      optima.services = new optima.collections.Services;
      optima.services.fetch({
        reset: true
      });
      optima.quotationServiceSelect = new optima.views.QuotationServiceSelect({
        collection: optima.services
      });
      optima.trackings = new optima.collections.Trackings;
      optima.trackings.fetch({
        reset: true,
        data: {
          quotation_id: id
        }
      });
      optima.quotationTrackings = new optima.views.QuotationTrackings({
        collection: optima.trackings
      });
      optima.quotation = new optima.models.Quotation({
        id: id
      });
      optima.quotation.fetch();
      optima.quotationAppView = new optima.views.QuotationAppView({
        model: optima.quotation
      });
      optima.quotationStatus = new optima.views.QuotationStatus({
        model: optima.quotation
      });
      optima.quotationOptionsView = new optima.views.QuotationOptions({
        model: optima.quotation
      });
      optima.quotationComment = new optima.views.QuotationComment({
        model: optima.quotation
      });
      optima.quotationNoEffective = new optima.views.QuotationNoEffective({
        model: optima.quotation
      });
      optima.quotationNoSend = new optima.views.QuotationNoSend({
        model: optima.quotation
      });
      optima.quotationMail = new optima.views.QuotationMail({
        model: optima.quotation
      });
      return optima.quotationTimes = new optima.views.QuotationTimes({
        model: optima.quotation
      });
    };

    Workspace.prototype.startReports = function() {
      var coll, date_end, date_start, month, now, viewByAdvisor, viewByDiffSent, viewByFindUs, viewByFindUsCount, viewByNoEffective, viewByNoEffectiveCount, viewByStatus, viewByStatusCount, viewByType, viewTotal, year;
      coll = new optima.models.Report;
      viewByStatus = new optima.views.ReportByStatus({
        model: coll
      });
      viewByStatusCount = new optima.views.ReportByStatusCount({
        model: coll
      });
      viewByFindUs = new optima.views.ReportByFindUs({
        model: coll
      });
      viewByFindUsCount = new optima.views.ReportByFindUsCount({
        model: coll
      });
      viewByAdvisor = new optima.views.ReportByAdvisor({
        model: coll
      });
      viewByType = new optima.views.ReportByType({
        model: coll
      });
      viewByNoEffective = new optima.views.ReportByNoEffective({
        model: coll
      });
      viewByNoEffectiveCount = new optima.views.ReportByNoEffectiveCount({
        model: coll
      });
      viewByDiffSent = new optima.views.ReportByDiffSent({
        model: coll
      });
      viewTotal = new optima.views.ReportsTotal({
        model: coll
      });
      now = new Date();
      month = now.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      year = now.getFullYear();
      date_start = year + "-" + month + "-01";
      date_end = year + "-" + month + "-31";
      coll.fetch({
        data: {
          date_start: date_start,
          date_end: date_end
        }
      });
      return new optima.views.ReportsFilters({
        model: coll
      });
    };

    return Workspace;

  })(Backbone.Router);
  optima.workspace = new optima.routers.Workspace;
  return Backbone.history.start({
    pushState: true
  });
});

$(function() {
  return Handlebars.registerPartial({
    _sector_list: optima.templates._sector_list,
    _cities_list: optima.templates._cities_list
  });
});
