var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  optima.models.Contact = (function(superClass) {
    extend(Contact, superClass);

    function Contact() {
      return Contact.__super__.constructor.apply(this, arguments);
    }

    Contact.prototype.urlRoot = '/api/v1/contacts';

    return Contact;

  })(Backbone.Model);
  return optima.collections.Contacts = (function(superClass) {
    extend(Contacts, superClass);

    function Contacts() {
      return Contacts.__super__.constructor.apply(this, arguments);
    }

    Contacts.prototype.model = optima.models.Contact;

    Contacts.prototype.url = '/api/v1/contacts';

    return Contacts;

  })(Backbone.Collection);
});
