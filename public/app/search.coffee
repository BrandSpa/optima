$ ->
  queryResponse = (object) ->
    template = Handlebars.compile($("#quotations-template").html())
    container = $('#quotations-modal')
    container.find('.modal-body').html(template({quotations: object }))
    container.modal()

  sendQuery = (type) ->
    query = $('.search-query').val()
    $.get("/api/v1/quotations/search/#{type}/#{query}").done(queryResponse)
    
    $(document).on 'click', '.search-by-quotation', (e) ->
      e.preventDefault();
      sendQuery('quotation')

    $(document).on 'click', '.search-by-company', (e) ->
      e.preventDefault();
      sendQuery('company')

    $(document).on 'click', '.search-by-contact', (e) ->
      e.preventDefault();
      sendQuery('contact')