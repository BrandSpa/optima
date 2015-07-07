$ ->
  class optima.views.CompaniesPage extends Backbone.View
    events:
      'click .quotation-open-quote': 'openQuote'
      'click .todo-open-create': 'openTodo'

    render: ->
      template = optima.templates.page_companies
      $(@el).empty().append(template)
      return @

    openQuote: (e) ->
      e.preventDefault()
      model = new optima.models.Company
      optima.companyQuoteCreate = new optima.views.CompanyQuoteCreate model: model
      optima.companyQuoteCreate.render()

    openTodo: (e) ->
      e.preventDefault()
      users = new optima.collections.Users
      model = new optima.models.Todo
      view = new optima.views.TodoCreateView model: model
      console.log(view)
      users.fetch()
        .done (users) ->
          view.render(users)
