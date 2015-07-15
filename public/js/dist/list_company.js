var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuoteCompanyContacts = (function(superClass) {
    extend(QuoteCompanyContacts, superClass);

    function QuoteCompanyContacts() {
      return QuoteCompanyContacts.__super__.constructor.apply(this, arguments);
    }

    QuoteCompanyContacts.prototype.el = $('#contact-quote-create-modal');

    QuoteCompanyContacts.prototype.initialize = function() {
      return this.listenTo(this.collection, 'reset', this.render);
    };

    QuoteCompanyContacts.prototype.render = function() {
      var el;
      el = $(this.el);
      return this.collection.each(function(model) {
        var view;
        view = new optima.views.QuoteCompanyContact({
          model: model
        });
        return $(el).find('table').append(view.render().el);
      });
    };

    return QuoteCompanyContacts;

  })(Backbone.View);
});
