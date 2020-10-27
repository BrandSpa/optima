'use strict';
import React from 'react';
import List from 'views/quotations/list';
import Activities from 'views/activities/list';
import Todos from 'views/todos/section';
import Graphs from 'views/graphs/section';

const dashboard = React.createClass({
  render: function() {
    let {user, solicitudes} = this.props;

    return (
      <div>
        <div className="col-md-9">
        <List solicitudes={this.props.solicitudes} />
          {
            solicitudes? 
              ''
            : <Todos user_id={user.id} />
          }
          
        </div>
        <div className="col-md-3">
          <Activities />
        </div>
      </div>
    );
  }
});

export default dashboard;