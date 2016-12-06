'use strict';
import React from 'react';
import AppHeader from 'views/app_header';

module.exports = React.createClass({
  render() {
    return (
      <div id="app">
        <AppHeader />
        {this.props.children}
      </div>
    );
  }
});
