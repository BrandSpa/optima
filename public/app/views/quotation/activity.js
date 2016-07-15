'use strict';
const React = require('react');
const request = require('superagent');
const moment = require('moment');

module.exports = React.createClass({
  getInitialState() {
    return {
      activities: []
    }
  },

  componentWillReceiveProps(props) {
    console.log(props.quotationId);
    if(props.quotationId) {
     request
        .get('/api/v1/activities')
        .query({quotation_id: props.quotationId})
        .end((err, res) => this.setState({activities: res.body}));
    }

  },


  render() {
    const activityNodes = this.state.activities.map(activity => <li><hr/><b>{activity.user.name}</b> {activity.message} {moment(activity.created_at).fromNow()}</li>);

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
