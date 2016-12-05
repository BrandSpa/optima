'use strict';
import React from 'react';
import request from 'superagent';
import Item from 'views/activities/item';

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
    const activityNodes = this.state.activities.map(activity => <Item key={activity.id} activity={activity} />);

    return (
      <div className="panel" style={{position: 'fixed', margin: '0 30px 0 0'}}>
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
