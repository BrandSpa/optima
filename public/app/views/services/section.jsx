'use strict';
var React = require('react');
var Form = require('views/services/form_create.jsx');
var List = require('views/services/list.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <div className="col-md-12">
      <div className="panel">
        <div className="panel-body">
          <Form />
          <List />
        </div>
      </div>
    </div>
    );
  }
});