'use strict';
var React = require('react');
var List = require('views/quotations/list.jsx');
var Activities = require('views/activities/list.jsx');
var Todos = require('views/todos/list.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <div className="col-md-10">
          <List />
          <Todos />
        </div>
        <div className="col-md-2">
        <Activities />
        </div>
      </div>
    );
  }
});