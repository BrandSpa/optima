var pusher = new Pusher('6685bdfde10b8bb15074');
var channel = pusher.subscribe('optima-quotation');

channel.bind('quotation-store', function(data) {
  alertify.success(data.message);
});

channel.bind('quotation-stored', function(data) {
  alertify.success(data.message);
});

channel.bind('quotation-duplicate', function(data) {
  alertify.success(data.message);
});

channel.bind('quotation-sent', function(data) {
  alertify.success(data.message);
});

channel.bind('quotation-status', function(data) {
  alertify.log(data.message);
});