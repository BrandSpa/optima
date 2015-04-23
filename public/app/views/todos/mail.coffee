$ ->
  class optima.views.TodoMailNew extends Backbone.View
    
    initialize: ->
      pubsub.on("todos:mail", @render, @)

    render: (model) ->
      template = optima.templates.todo_mail
      modelAttributes = model.toJSON()
      view = template( modelAttributes )
      #$.post "http://127.0.0.1:3000/todos/sendmail", {message: view, subject: 'Nueva Tarea Asignada', to: [{"email":  modelAttributes.user.email }]}
      $.post "http://192.241.251.220:3000/todos/sendmail", {message: view, subject: 'Nueva Tarea Asignada', to: [{"email":  modelAttributes.user.email }]}