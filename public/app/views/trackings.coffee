$ ->

	class optima.views.QuotationTracking extends Backbone.View
		events: 
			'click .tracking-open-edit': 'openEdit'
			'click .todo-open-create': 'openTodoCreate'
			'click .tracking-delete': 'delete'

		initialize: ->
			@render()
			@listenTo(@model, 'change', @render)
			@listenTo(@model, 'error', @showErrors)
			pubsub.on('todoTracking:stored', @getTodos, @)
			pubsub.on("todos:pull", @getTodos, @)

		render: ->
			template = optima.templates.tracking
			@$el.html template( @model.toJSON() )
			@

		getTodos: ->
			id = @model.get('id')
			todos = new optima.collections.Todos
			todosView = new optima.views.TrackingTodos collection: todos, el: @$el
			todos.fetch reset: true, data: where: "tracking_id = #{id}"

		openTodoCreate: (e) ->
			e.preventDefault()
			users = new optima.collections.Users
			view = new optima.views.TodoCreateView model: new optima.models.Todo
			id = @model.get('id')
			
			users.fetch()
				.done (users) ->
					view.render(users, id)

	class optima.views.QuotationTrackings extends Backbone.View
		el: $ "#trackings"

		events:
			'click .tracking-open-create': 'openCreate'
			'click .effective': 'effective'
			'click .no-effective': 'noEffective'

		initialize: ->
			@listenTo(@collection, 'reset', @render)
			@listenTo(@collection, 'add', @addOne)
			pubsub.on("trackings:pull", @pull, @)
			@quotation_id = optima.pathArray[2]

		pull: (quotation_id) ->
			@collection.fetch reset: true, data: quotation_id: @quotation_id

		addOne: (model) ->
			view = new optima.views.QuotationTracking model: model
			$(@el).find('.last-tracking').prepend view.render().el
			view.getTodos(model.get('id'))

		render: ->
			$(@el).find('.trackings-container').empty()
			@collection.each (model) ->
				view = new optima.views.QuotationTracking model: model
				$(@el).find('.trackings-container').append view.render().el
				view.getTodos(model.get('id'))
			, @

		openCreate: (e) ->
			e.preventDefault()
			collection = new optima.collections.Contacts
			collection.fetch data: quotation_id: optima.pathArray[2]
				.done (response) ->
					view = new optima.views.TrackingCreateView model: new optima.models.Tracking
					view.render(response)

		effective: (e) ->
			e.preventDefault()
			pubsub.trigger('quotation:effective')

		noEffective: (e) ->
			e.preventDefault()
			pubsub.trigger('quotation:noEffective')
		
	class optima.views.TrackingCreateView extends Backbone.View
		el: $ '#tracking-create-modal'
		template: $ '#tracking-create-template'
		events:
			'click .tracking-save-store' : 'store'
			'click .modal-close' : 'cancel'

		initialize: ->
			@listenTo(@model, 'sync', @stored)
			@listenTo(@model, 'error', @showErrors)
			@id = optima.pathArray[2]

		addPlugins: ->
			$(@el).find('.datepicker').pickadate formatSubmit: 'yyyy/mm/dd', hiddenName = true
			$(@el).find('.timepicker').pickatime min: [6,0], max: [20,0], interval: 5, formatSubmit: 'HH:i', hiddenName = true
			
		render: (contacts) ->
			template = optima.templates.tracking_create
			$(@el).find('.modal-content').html template( contacts )
			@addPlugins()
			$(@el).modal backdrop: 'static'
					 
		store: (e) ->
			e.preventDefault()
			dataForm = $(@el).find('form').serializeJSON()
			dataForm['quotation_id'] = optima.pathArray[2]
			dataForm['register_date'] = dataForm['register_date_submit']
			dataForm['register_time'] = dataForm['register_time_submit']
			@model.save dataForm, wait: true
		
		stored: (model) ->
			if model.id
				console.log model
				optima.trackings.add(model)
				console.log optima.quotation.get('sent_at')
				now = moment().format()
				diff = moment(now).diff(optima.quotation.get('sent_at'), 'minutes')
				optima.quotation.save status: 'Seguimiento', sent_confirmed_diff: diff
				@storeActivity @id, "Agrego un registro"
				socket.emit "trackings", @id
				@closeModal()

		cancel: (e) ->
			e.preventDefault()
			@closeModal()

	class optima.views.TrackingTodos extends Backbone.View
		
		initialize: ->
			@listenTo(@collection, 'reset', @render)

		render: ->
			@$el.find('.todos tbody').empty()
			@collection.each (model) ->
				view = new optima.views.TrackingTodo model: model
				@$el.find('.todos tbody').append view.render().el
			, @

	class optima.views.TrackingTodo extends Backbone.View
		tagName: 'tr'

		render: ->
			template = optima.templates.todo_tracking
			@$el.html template( @model.toJSON() )
			@



		

