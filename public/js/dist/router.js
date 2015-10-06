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
      var coll, date_end, date_start, month, now, viewByAdvisor, viewByDiffSent, viewByFindUs, viewByNoEffective, viewByStatus, viewByType, viewTotal, year;
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