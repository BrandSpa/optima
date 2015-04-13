$ ->
  class optima.views.TodoMailNew extends Backbone.View
    
    initialize: ->
      pubsub.on("todos:mail", @render, @)

    render: (model) ->
      template = optima.templates.todo_new
      view = template( model.toJSON() )
      $.post optima.mail_api_url, {message: view, subject: 'Nueva Tarea Asignada', to: [{"email":  optima.user_email}]}