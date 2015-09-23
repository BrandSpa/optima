'use strict';
var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div id="app-header">
        <nav className="navbar top-bar">
          <button className="btn btn-default"><i className="fa fa-bars"></i></button>
        </nav>
      </div>
    );
  }
});
