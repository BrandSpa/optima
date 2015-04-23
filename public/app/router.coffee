$ ->
  class optima.routers.Workspace extends Backbone.Router
    routes:
      '': 'dashboard'
      'search=:query': 'dashboard'
      'companies': 'startCompanies'
      'contacts': 'startContacts'
      'services': 'startServices'
      'quotations/:id': 'startQuotation'
      'results': 'startReports'

    initialize: ->
      optima.appView = new optima.views.AppView
      optima.activities = new optima.collections.Activities
      optima.activitiesView = new optima.views.ActivitiesView collection: optima.activities

    startCompanies: ->
      optima.companies = new optima.collections.Companies
      optima.companies.fetch reset: true
      optima.companiesView = new optima.views.CompaniesView collection: optima.companies
      optima.companyContacts = new optima.views.CompanyContacts

    startContacts: ->
      optima.contacts = new optima.collections.Contacts
      optima.contacts.fetch reset: true
      optima.contactsView = new optima.views.ContactsView collection: optima.contacts
      
    startServices: ->
      optima.services = new optima.collections.Services
      optima.services.fetch reset: true
      optima.servicesView = new optima.views.ServicesView collection: optima.services

    dashboard: (query) ->
      optima.quotations = new optima.collections.Quotations
      optima.quotationsView = new optima.views.QuotationsView collection: optima.quotations
      optima.listFilters = new optima.views.QuotationsFilters()
      optima.quotations.fetch reset: true
       
      optima.activities.fetch reset: true

      optima.todos = new optima.collections.Todos

      if optima.user_id == 3
        optima.todos.fetch reset: true, data: where: "completed IS NULL"
      else
        optima.todos.fetch reset: true

      optima.todosView = new optima.views.TodosView collection: optima.todos
      new optima.views.TodoMailNew

      optima.views.quotationCreate = new optima.views.QuotationCreate model: new optima.models.Quotation

    startQuotationsSearch: (query) ->
      optima.quotations = new optima.collections.Quotations 
      optima.quotations.fetch reset: true, data: query: query

      optima.quotationsView = new optima.views.QuotationsView collection: optima.quotations
      optima.quotationsFilteredView = new optima.views.QuotationsFilteredView collection: optima.quotations

      optima.activities = new optima.collections.Activities
      optima.activities.fetch reset: true
      optima.activitiesView = new optima.views.ActivitiesView collection: optima.activities

    startQuotation: (id) ->
      optima.quotationProducts = new optima.collections.QuotationProducts
      optima.quotationProducts.fetch reset: true, data: quotation_id: id
      optima.quotationProductsView =  new optima.views.QuotationProductsView collection: optima.quotationProducts

      optima.quotationServices = new optima.collections.Services
      optima.quotationServicesView =  new optima.views.QuotationServicesView collection: optima.quotationServices
      pubsub.trigger("services:pull", id)

      optima.quotationActivities = new optima.collections.Activities
      optima.quotationActivities.fetch reset: true, data: quotation_id: id
      optima.quotationActivitiesView =  new optima.views.QuotationActivitiesView collection: optima.quotationActivities

      optima.services = new optima.collections.Services
      optima.services.fetch reset: true
      optima.quotationServiceSelect = new optima.views.QuotationServiceSelect collection: optima.services

      optima.trackings = new optima.collections.Trackings
      optima.trackings.fetch reset: true, data: quotation_id: id
      optima.quotationTrackings = new optima.views.QuotationTrackings collection: optima.trackings

      optima.quotation = new optima.models.Quotation id: id
      optima.quotation.fetch()

      optima.quotationAppView = new optima.views.QuotationAppView model: optima.quotation
      optima.quotationStatus = new optima.views.QuotationStatus model: optima.quotation
      optima.quotationOptionsView = new optima.views.QuotationOptions model: optima.quotation
      optima.quotationComment = new optima.views.QuotationComment model: optima.quotation
      optima.quotationNoEffective = new optima.views.QuotationNoEffective model: optima.quotation
      optima.quotationNoSend = new optima.views.QuotationNoSend model: optima.quotation
      optima.quotationMail = new optima.views.QuotationMail model: optima.quotation
      optima.quotationTimes = new optima.views.QuotationTimes model: optima.quotation

    startReports: ->
      coll = new optima.models.Report
      viewByStatus = new optima.views.ReportByStatus model: coll
      viewByFindUs = new optima.views.ReportByFindUs model: coll
      viewByAdvisor = new optima.views.ReportByAdvisor model: coll
      viewByType = new optima.views.ReportByType model: coll
      viewByNoEffective = new optima.views.ReportByNoEffective model: coll
      viewByDiffSent = new optima.views.ReportByDiffSent model: coll
      coll.fetch()
      new optima.views.ReportsFilters model: coll
      
      
  optima.workspace = new optima.routers.Workspace
  Backbone.history.start({pushState: true})

