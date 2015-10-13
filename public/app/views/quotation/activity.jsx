'use strict';
var React = require('react');
var request = require('superagent');
var _ = require('lodash');
var moment = require('moment');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      activities: []
    }
  },

  componentWillReceiveProps: function(props) {
    console.log(props.quotationId);
    if(props.quotationId) {
     request
        .get('/api/v1/activities')
        .query({quotation_id: props.quotationId})
        .end(function(err, res) {
          this.setState({activities: res.body})
        }.bind(this));
    }

  },



  render: function() {
    var activityNodes = this.state.activities.map(function(activity) {
      return (
        <li><hr/>{activity.user.name} {activity.message} {moment(activity.created_at).fromNow()}</li>
      );
    });

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