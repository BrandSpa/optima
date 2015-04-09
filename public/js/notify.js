var channel, channelActivities, channelNotifications, channelQuotations, pusher, pusher2;

pusher = new Pusher('6685bdfde10b8bb15074');

channel = pusher.subscribe('optima-quotation');

channel.bind('quotation-store', function(response) {
  return alertify.success(response.message);
});

channel.bind('quotation-stored', function(response) {
  return alertify.success(response.message);
});

channel.bind('quotation-duplicate', function(response) {
  return alertify.success(response.message);
});

channel.bind('quotation-sent', function(response) {
  return alertify.success(response.message);
});

channel.bind('quotation-status', function(response) {
  return alertify.log(response.message);
});

pusher2 = new Pusher('65b145350c48d8021527');

channelActivities = pusher2.subscribe('activities');

channelQuotations = pusher2.subscribe('quotations');

channelNotifications = pusher2.subscribe('notifications');

channelActivities.bind('activity', function(data) {
  if (optima.activities) {
    return optima.activities.fetch();
  }
});

channelQuotations.bind('quotation', function(data) {
  return optima.quotations.fetch();
});

channelNotifications.bind('notification', function(data) {
  optima.notifications.fetch({
    reset: true
  });
  return console.log("channel notifications");
});
