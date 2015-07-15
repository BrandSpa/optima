var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.CompanyContacts = (function(superClass) {
    extend(CompanyContacts, superClass);

    function CompanyContacts() {
      return CompanyContacts.__super__.constructor.apply(this, arguments);
    }

    CompanyContacts.prototype.el = $('#company-contacts-modal');

    CompanyContacts.prototype.render = function(model) {
      var template;
      template = optima.templates.company_contacts;
      $(this.el).find('.modal-content').html(template(model.toJSON()));
      return $(this.el).modal();
    };

    return CompanyContacts;

  })(Backbone.View);
});
