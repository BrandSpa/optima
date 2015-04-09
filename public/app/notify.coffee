pusher = new Pusher('6685bdfde10b8bb15074')
channel = pusher.subscribe('optima-quotation')

channel.bind 'quotation-store', (response) ->
  alertify.success(response.message)

channel.bind 'quotation-stored', (response) ->
  alertify.success(response.message)

channel.bind 'quotation-duplicate', (response) ->
  alertify.success(response.message)

channel.bind 'quotation-sent', (response) ->
  alertify.success(response.message)

channel.bind 'quotation-status', (response) ->
  alertify.log(response.message)

pusher2 = new Pusher('65b145350c48d8021527')
channelActivities = pusher2.subscribe('activities')
channelQuotations = pusher2.subscribe('quotations')
channelNotifications = pusher2.subscribe('notifications')

channelActivities.bind 'activity', (data) ->
  if optima.activities
    optima.activities.fetch()

channelQuotations.bind 'quotation', (data) ->
  optima.quotations.fetch()

channelNotifications.bind 'notification', (data) ->
  optima.notifications.fetch reset: true
  console.log "channel notifications"
