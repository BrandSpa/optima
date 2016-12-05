'use strict';
import React from 'react';
import List from 'views/quotations/list';
import Activities from 'views/activities/list';
import Todos from 'views/todos/section';
import Graphs from 'views/graphs/section';

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <div className="col-md-9">
          <List />
          <Todos />
          <Graphs/>
        </div>
        <div className="col-md-3">
          <Activities />
        </div>
      </div>
    );
  }
});
