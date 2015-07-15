var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TrackingTodos = (function(superClass) {
    extend(TrackingTodos, superClass);

    function TrackingTodos() {
      return TrackingTodos.__super__.constructor.apply(this, arguments);
    }

    TrackingTodos.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    TrackingTodos.prototype.render = function() {
      this.$el.find('.todos tbody').empty();
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.TrackingTodo({
          model: model
        });
        return this.$el.find('.todos tbody').append(view.render().el);
      }, this);
    };

    return TrackingTodos;

  })(Backbone.View);
});
