var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TrackingTodo = (function(superClass) {
    extend(TrackingTodo, superClass);

    function TrackingTodo() {
      return TrackingTodo.__super__.constructor.apply(this, arguments);
    }

    TrackingTodo.prototype.tagName = 'tr';

    TrackingTodo.prototype.render = function() {
      var template;
      template = optima.templates.todo_tracking;
      this.$el.html(template(this.model.toJSON()));
      return this;
    };

    return TrackingTodo;

  })(Backbone.View);
});
