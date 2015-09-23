'use strict';
var React = require('react');
var AppHeader = require('views/app_header.jsx');
var Dashboard = require('views/quotations/dashboard.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sidebarOpen: true
    }
  },

  render: function() {
    return (
      <div id="app">
        <AppHeader />
        {this.props.children ? this.props.children : <Dashboard />}
      </div>
    );
  }
});
