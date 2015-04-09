var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  optima.routers.Workspace = (function(_super) {
    __extends(Workspace, _super);

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
      optima.notifications = new optima.collections.Notifications;
      optima.notifications.fetch({
        reset: true
      });
      optima.notificationCenterView = new optima.views.NotificationCenterView({
        collection: optima.notifications
      });
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
      optima.quotations = new optima.collections.Quotations;
      optima.quotations.fetch({
        reset: true
      });
      optima.quotationsView = new optima.views.QuotationsView({
        collection: optima.quotations
      });
      optima.activities.fetch({
        reset: true
      });
      optima.todos = new optima.collections.Todos;
      optima.todos.fetch({
        reset: true
      });
      optima.todosView = new optima.views.TodosView({
        collection: optima.todos
      });
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
      optima.quotationServices.fetch({
        reset: true,
        data: {
          quotation_id: id
        }
      });
      optima.quotationServicesView = new optima.views.QuotationServicesView({
        collection: optima.quotationServices
      });
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
      var coll, viewByAdvisor, viewByFindUs, viewByNoEffective, viewByStatus, viewByType;
      coll = new optima.models.Report;
      viewByStatus = new optima.views.ReportByStatus({
        model: coll
      });
      viewByFindUs = new optima.views.ReportByFindUs({
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
      coll.fetch();
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
