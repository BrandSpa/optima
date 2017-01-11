'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/activities';
import Item from 'views/activities/item';

const activities = React.createClass({

  componentDidMount() {
    this.props.dispatch(action.fetch())
  },

  render() {
    const activityNodes = this.props.items.map(activity => <Item key={activity.id} activity={activity} />);

    return (
      <div className="panel" style={{position: 'fixed', margin: '0 30px 0 0'}}>
        <div className="panel-heading"><h5>Actividad</h5></div>
        <div className="panel-body">
          <div className="quotations-table">
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

export default connect(store => store.activities)(activities);