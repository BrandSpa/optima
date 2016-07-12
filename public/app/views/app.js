'use strict';
import React from 'react';
import AppHeader from 'views/app_header';
import Dashboard from 'views/quotations/dashboard';

module.exports = React.createClass({
  render() {
    return (
      <div id="app">
        <AppHeader />
        {this.props.children ? this.props.children : <Dashboard />}
      </div>
    );
  }
});
