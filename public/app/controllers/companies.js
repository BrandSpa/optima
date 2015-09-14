'use strict';
var React = require('react');
var Create = require('views/companies/create_panel.jsx');

module.exports = {
  create: function() {
    React.render(<Create />, document.getElementById('main-content'));
  }
};
