'use strict';
const React = require('react');
const Timeago = require('components/timeago.jsx');
const request = require('superagent');

module.exports = React.createClass({
  getInitialState() {
    return {
      activities: []
    }
  },

  componentDidMount() {
    request
      .get('api/v1/activities')
      .end((err, res) => this.setState({activities: res.body}));
  },

  render() {
    const activityNodes = this.state.activities.map(activity => <tr key={activity.id}>
                <td>
          {activity.user.name} {activity.user.lastname} {activity.message} <Timeago date={activity.created_at} />
      </td>
                </tr>);

    return (
      <div className="panel">
        <div className="panel-body">
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
        </div>
      </div>

    );
  }
});