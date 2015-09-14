'use strict';
var Backbone = require('backbone');
var dashboard = require('controllers/dashboard');
var companies = require('controllers/companies');
var contacts = require('controllers/contacts');
var app = require('controllers/app');
var quotation = require('controllers/quotations');

module.exports = Backbone.Router.extend({
  routes: {
    '': function() {
      dashboard.initialize();
    },

    'company/create': function() {
      companies.create();
    },

    'company/:id/contact/create': function(companyId) {
      contacts.create(companyId);
    },

    'quotations/:id': function(id) {
      quotation.item(id);
    }
  },


  initialize: function() {
    app.initialize();
  }
});
