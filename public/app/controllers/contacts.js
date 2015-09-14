'use strict';
var React = require('react');
var Create = require('views/contacts/create_panel.jsx');

module.exports = {
  create: function(companyId) {
    React.render(<Create companyId={companyId} />, document.getElementById('main-content'));
  }
};