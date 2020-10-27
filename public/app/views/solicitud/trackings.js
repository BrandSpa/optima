'use strict';
import React from 'react';
import * as action from 'actions/trackings';
import Tracking from 'views/solicitud/tracking';
import Form from 'views/trackings/form_create';

const quoTrackings = React.createClass({
  getInitialState() {
    return {
      tracking: {
        todos: []
      },
    }
  },
  
  handleSubmit(tracking) {
    let model = {...tracking, solicitudes_id: this.props.solicitudId};
    this.props.dispatch(action.store(model)).then(this.changeStatus);
  },

  changeStatus(res) {
    if(res.type == "TRACKINGS_STORE" && this.props.solicitudes.solicitud.status == 'Enviada' ) {

      this.props.onStatusChange({status: 'Seguimiento', message: 'cambio estado a seguimiento'});
    }
  },

  render() {
    const trackingNodes = this.props.trackings.items.map(tracking =>
      <Tracking key={tracking.id} tracking={tracking} />
    );

    return (
      <div className="panel">
        <div className="panel-heading"><h5>Seguimiento</h5></div>
        <div className="panel-body">
          <Form contacts={this.props.contacts.items} onSubmit={this.handleSubmit} />
          <br/>

          <ul className="list-group col-md-12">
            {trackingNodes}
          </ul>
        </div>
      </div>
    );
  }
});

export default quoTrackings;