'use strict';
const React = require('react');

const QuoTimes = React.createClass({

  render() {
    let created_sent_diff;

    if(this.props.solicitud.created_sent_diff) {
      created_sent_diff = `${this.props.solicitud.created_sent_diff} minutos`;
    }

    return (
      <div className="panel">
        <div className="panel-heading"><h5>Tiempos</h5></div>
        <div className="panel-body">
          <b>Creada:</b> {this.props.solicitud.created_at}
          <hr/>
          <b>Enviada:</b> {this.props.solicitud.sent_at}
          <hr/>
          <b>Tiempo:</b> {created_sent_diff}
        </div>
      </div>
    );
  }
});

export default QuoTimes;