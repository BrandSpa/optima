var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TodoMailNew = (function(superClass) {
    extend(TodoMailNew, superClass);

    function TodoMailNew() {
      return TodoMailNew.__super__.constructor.apply(this, arguments);
    }

    TodoMailNew.prototype.initialize = function() {
      return pubsub.on("todos:mail", this.render, this);
    };

    TodoMailNew.prototype.render = function(model) {
      var modelAttributes, template, view;
      template = optima.templates.todo_mail;
      modelAttributes = model.toJSON();
      view = template(modelAttributes);
      return $.post("http://127.0.0.1:3000/todos/sendmail", {
        message: view,
        subject: 'Nueva Tarea Asignada',
        to: [
          {
            "email": modelAttributes.user.email
          }
        ]
      });
    };

    return TodoMailNew;

  })(Backbone.View);
});
