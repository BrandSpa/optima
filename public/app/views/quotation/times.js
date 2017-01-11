'use strict';
const React = require('react');

module.exports = React.createClass({

  render() {
    let created_sent_diff;

    if(this.props.quotation.created_sent_diff) {
      created_sent_diff = `${this.props.quotation.created_sent_diff} minutos`;
    }

    return (
      <div className="panel">
        <div className="panel-heading"><h5>Tiempos</h5></div>
        <div className="panel-body">
          <b>Creada:</b> {this.props.quotation.created_at}
          <hr/>
          <b>Enviada:</b> {this.props.quotation.sent_at}
          <hr/>
          <b>Tiempo:</b> {created_sent_diff}
        </div>
      </div>
    );
  }
});
