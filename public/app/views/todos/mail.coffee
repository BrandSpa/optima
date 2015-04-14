$ ->
  class optima.views.TodoMailNew extends Backbone.View
    
    initialize: ->
      pubsub.on("todos:mail", @render, @)

    render: (model) ->
      template = optima.templates.todo_mail
      modelAttributes = model.toJSON()
      view = template( modelAttributes )
      console.log(modelAttributes)
      $.post optima.mail_api_url, {message: view, subject: 'Nueva Tarea Asignada', to: [{"email":  modelAttributes.user.email }]}