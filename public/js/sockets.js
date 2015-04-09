var socket = io('http://192.241.251.220:3000');

socket.on('quotations', function(msg){
	if (optima.quotations) {
		optima.quotations.add(msg);
	};
});

socket.on('quotation:change', function(msg){
    pubsub.trigger("quotation:change", msg);
});

socket.on('quotation-product', function(msg){
    pubsub.trigger("products:pull", msg);
});

socket.on('quotation-service', function(msg){
    pubsub.trigger("services:pull", msg);
});

socket.on('todos', function(msg){
  pubsub.trigger("todos:pull", msg);
});

socket.on('activities', function(msg){
  if (optima.activities) {
    pubsub.trigger("activity:pull", msg);
  };

  if (optima.quotationActivities) {
    pubsub.trigger("quotation-activity:pull", msg);
  };
});

socket.on('trackings', function(quotation_id){
  if (optima.trackings) {
    pubsub.trigger("trackings:pull", quotation_id);
  };
});


