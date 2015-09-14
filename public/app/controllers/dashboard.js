'use strict';
var React = require('react');
var Dashboard = require('views/quotations/dashboard.jsx');

module.exports = {
  initialize: function() {
    React.render(<Dashboard />, document.getElementById('main-content'));
  }
};
