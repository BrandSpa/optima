'use strict';
import React from 'react';
import moment from 'moment';

export default React.createClass({

  render() {
    const activityNodes = this.props.activities.map(activity =>
      <li key={activity.id}>
        <hr/><b>
        {activity.user ? activity.user.name : this.props.user.name}</b> {activity.message} <i>{moment(activity.created_at).fromNow()}</i>
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
