'use strict';
const React = require('react');
const Form = require('views/services/form_create');
const List = require('views/services/list');

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
