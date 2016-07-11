'use strict';
const React = require('react');
const AppHeader = require('views/app_header');
const Dashboard = require('views/quotations/dashboard');

module.exports = React.createClass({
  getInitialState() {
    return {
      sidebarOpen: true
    }
  },

  render() {
    return (
      <div id="app">
        <AppHeader />
        {this.props.children ? this.props.children : <Dashboard />}
      </div>
    );
  }
});
