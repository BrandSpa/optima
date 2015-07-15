var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuoteCompanyContact = (function(superClass) {
    extend(QuoteCompanyContact, superClass);

    function QuoteCompanyContact() {
      return QuoteCompanyContact.__super__.constructor.apply(this, arguments);
    }

    QuoteCompanyContact.prototype.tagName = 'tr';

    QuoteCompanyContact.prototype.events = {
      'click a.contact-quote': 'quote'
    };

    QuoteCompanyContact.prototype.render = function() {
      var template;
      template = optima.templates.contact_company_quote;
      $(this.el).html(template(this.model.toJSON()));
      return this;
    };

    QuoteCompanyContact.prototype.quote = function(e) {
      var company_id, id;
      e.preventDefault();
      id = this.model.get('id');
      company_id = this.model.get('company_id');
      return pubsub.trigger('quotation:store', {
        company_id: company_id,
        contact_id: id
      });
    };

    return QuoteCompanyContact;

  })(Backbone.View);
});
