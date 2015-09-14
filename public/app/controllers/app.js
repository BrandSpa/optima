'use strict';
var React = require('react');
var Header = require('views/app_header.jsx');
var Nav = require('views/app_nav.jsx');

module.exports = {
  initialize: function(sad) {
    React.render(<Header />, document.getElementById('app-header'));
    React.render(<Nav />, document.getElementById('app-menu'));
  }
};
