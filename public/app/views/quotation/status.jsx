'use strict';
var React = require('react');
var request = require('superagent');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sending: false
    }
  },

  handleClick: function(status, e) {
    e.preventDefault(status, e);
    this.props.onStatusChange(status);
  },

  handleSend: function() {
    var id = this.props.quotation.id;
    this.setState({sending: true});

    request
    .post('/api/v1/quotations/' + id + '/sendmail')
    .end(function(err, res) {
      if(err) return console.log(err.body);
      this.setState({sending: false});
      return this.props.onStatusChange({status: 'Enviada'});
    }.bind(this));
  },

  render: function() {
    var sending = this.state.sending ? "disabled" : "";
    var messageSend = this.state.sending ? "Enviando..." : "Enviar";

    return (
      <div className="panel">
        <div className="panel-body">
          <ul className="list-inline">
            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleSend} disabled={sending}>
                {messageSend}
              </button>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleClick.bind(null, 'Entregada')}>
                Entregada
              </button>
            </li>

             <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleClick.bind(null, 'Efectiva')}>
                Efectiva
              </button>
            </li>
            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleClick.bind(null, 'No enviada')}>
                No enviada
              </button>
            </li>
            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleClick.bind(null, 'No efectiva')}>
                No efectiva
              </button>
            </li>
            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleClick.bind(null, 'Replantear')}>
                Replantear
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});