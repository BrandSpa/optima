$(function() {
  var queryResponse, sendQuery;
  queryResponse = function(object) {
    var container, template;
    template = Handlebars.compile($("#quotations-template").html());
    container = $('#quotations-modal');
    container.find('.modal-body').html(template({
      quotations: object
    }));
    return container.modal();
  };
  return sendQuery = function(type) {
    var query;
    query = $('.search-query').val();
    $.get("/api/v1/quotations/search/" + type + "/" + query).done(queryResponse);
    $(document).on('click', '.search-by-quotation', function(e) {
      e.preventDefault();
      return sendQuery('quotation');
    });
    $(document).on('click', '.search-by-company', function(e) {
      e.preventDefault();
      return sendQuery('company');
    });
    return $(document).on('click', '.search-by-contact', function(e) {
      e.preventDefault();
      return sendQuery('contact');
    });
  };
});
