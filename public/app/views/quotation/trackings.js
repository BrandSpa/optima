'use strict';
import React from 'react';
import * as action from 'actions/trackings';
import Tracking from 'views/quotation/tracking';
import Form from 'views/trackings/form_create';

export default React.createClass({
  getInitialState() {
    return {
      tracking: {
        todos: []
      },
    }
  },
  
  handleSubmit(tracking) {
    let model = {...tracking, quotation_id: this.props.quotationId};
    this.props.dispatch(action.store(model));
  },

  render() {
    const trackingNodes = this.props.trackings.items.map(tracking =>
      <Tracking key={tracking.id} tracking={tracking} />
    );

    return (
      <div className="panel">
        <div className="panel-body">
          <Form contacts={this.props.contacts.items} onSubmit={this.handleSubmit} />
          <br/>
          <ul className="list-group">
            {trackingNodes}
          </ul>
        </div>
      </div>
    );
  }
});
