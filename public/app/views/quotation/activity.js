'use strict';
import React from 'react';
import moment from 'moment';

const activities = React.createClass({

  render() {
    const activityNodes = this.props.activities.map(activity =>
      <li key={activity.id}>
        <hr/><b>
        {activity.user.name}</b> {`${activity.message} ${moment(activity.created_at).fromNow()}` }
      </li>
    );

    return (
      <div className="panel">
        <div className="panel-body">
        <h5>Actividad</h5>
        <ul className="activities">
        {activityNodes}
        </ul>
        </div>
      </div>
    );
  }
});

export default activities;