'use strict';
import React from 'react';
import List from 'views/quotations/list';
import Activities from 'views/activities/list';
import Todos from 'views/todos/section';
import Graphs from 'views/quotations/graphs';

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
