'use strict';
import React from 'react';
import moment from 'moment';

const QuoActivity =  React.createClass({

  render() {
    const activityNodes = this.props.activities.map(activity =>
      <li key={activity.id}>
        <hr/><b>
        {activity.user ? activity.user.name : this.props.user.name}</b> {activity.message} <i>{moment(activity.created_at).fromNow()}</i>
      </li>
    );

    return (
      <div className="panel">
        <div className="panel-heading"><h5>Actividad</h5></div>
        <div className="panel-body">
        <ul className="activities">
        {activityNodes}
        </ul>
        </div>
      </div>
    );
  }
});

export default QuoActivity;