'use strict';
var React = require('react');
var Timeago = require('components/timeago.jsx');
var request = require('superagent');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      activities: []
    }
  },

  componentDidMount: function() {
    request
      .get('api/v1/activities')
      .end(function(err, res) {
        this.setState({activities: res.body});
      }.bind(this));
  },

  render: function() {
    var activityNodes = this.state.activities.map(function(activity) {
      return (
        <tr key={activity.id}>
          <td>
              {activity.user.name} {activity.user.lastname} {activity.message} <Timeago date={activity.created_at} />
          </td>
          </tr>
      );
    });

    return (
      <div className="quotations-table">
          <h5>Actividad</h5>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                {activityNodes}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
});