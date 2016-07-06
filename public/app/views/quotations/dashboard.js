'use strict';
const React = require('react');
const List = require('views/quotations/list.jsx');
const Activities = require('views/activities/list.jsx');
const Todos = require('views/todos/list.jsx');
const Graphs = require('views/quotations/graphs.jsx');
module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <div className="col-md-10">
          <List />
          <Todos />
          <Graphs />
        </div>
        <div className="col-md-2">
        <Activities />
        </div>
      </div>
    );
  }
});