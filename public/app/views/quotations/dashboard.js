'use strict';
import React from 'react';
import List from 'views/quotations/list';
import Activities from 'views/activities/list';
import Todos from 'views/todos/section';
import Graphs from 'views/graphs/section';

const dashboard = React.createClass({
  render: function() {
    let {user} = this.props;

    return (
      <div>
        <div className="col-md-9">
          <List />
          <Todos user_id={1} />
          <Graphs/>
        </div>
        <div className="col-md-3">
          <Activities />
        </div>
      </div>
    );
  }
});

export default dashboard;