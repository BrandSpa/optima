$ ->
	class optima.models.Notification extends Backbone.Model
		urlRoot: '/api/v1/notifications'

	class optima.collections.Notifications extends Backbone.Collection
		url: '/api/v1/notifications'
		model: optima.models.Notification

	class optima.views.NotificationView extends Backbone.View
		tagName: 'li'
		template: $ '#notification-template'
		events: "click .notification-readed": "readed"

		initialize: ->
			@render()
			@listenTo(@model, 'change', @render)
			@listenTo(@model, 'error', @showErrors)

		render: ->
			source = @template.html()
			template = Handlebars.compile(source)
			$(@el).html template( @model.toJSON() )
			@

		readed: (e) ->
			e.preventDefault()
			@model.save read: true
			optima.notifications.fetch reset: true
			optima.notificationCenterView.render()

	class optima.views.NotificationCenterView extends Backbone.View
		el: $ '#notifications-center'
		template: $ '#notifications-center-template'
		events:
			'click .dropdown-toggle' : 'cleanCounter'

		initialize: ->
			@listenTo(@collection, 'reset', @render)

		render: ->
			source = @template.html()
			template = Handlebars.compile(source)
			$(@el).html template(count: @collection.length )

			@collection.each (model) ->
				view = new optima.views.NotificationView model: model
				$('#notifications-center').find('.dropdown-menu').append view.render().el

  class optima.views.NotificationCreate extends Backbone.View
  	initialize: ->
			pubsub.on('notification:store', @store, @)

		store: (data) ->
			@model.save data

		stored: (res) ->
			socket.emit('notification', res)
			#window.location = "/quotations/#{response.id}"

