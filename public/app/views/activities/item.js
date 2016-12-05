'use strict';
import React from 'react';
import Timeago from '../../components/timeago';

export default React.createClass({
  
  render() {
    let activity = this.props.activity;

    return (
      <tr>
        <td>
        <b>{`${activity.user.name} ${activity.user.lastname}`} </b>{activity.message} <Timeago date={activity.created_at} />
        </td>
      </tr>
    )
  }
});
