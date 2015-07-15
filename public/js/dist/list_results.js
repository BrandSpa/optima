var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.ServiceResults = (function(superClass) {
    extend(ServiceResults, superClass);

    function ServiceResults() {
      return ServiceResults.__super__.constructor.apply(this, arguments);
    }

    ServiceResults.prototype.el = $('#quotation-service-create-modal');

    ServiceResults.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    ServiceResults.prototype.render = function() {
      var html;
      html = [];
      this.collection.each(function(model) {
        var view;
        view = new optima.views.ServiceResult({
          model: model
        });
        return html.push(view.render().el);
      }, this);
      return $(this.el).find('table').empty().append(html);
    };

    ServiceResults.prototype.close = function() {
      return this.remove();
    };

    return ServiceResults;

  })(Backbone.View);
});
