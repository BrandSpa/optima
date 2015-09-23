'use strict';
var React = require('react');
var request = require('superagent');
var moment = require('moment');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sending: false
    }
  },

  handleClick: function(status, e) {
    e.preventDefault(status, e);
    this.props.onStatusChange({status: status});
  },

  handleSend: function() {
    var id = this.props.quotation.id;
    this.setState({sending: true});

    request
    .post('/api/v1/quotations/' + id + '/sendmail')
    .end(function(err, res) {
      if(err) return console.log(err.body);
      this.setState({sending: false});
      return this.props.onStatusChange({
        status: 'Enviada',
        created_sent_diff: this._getDiff()
      });
    }.bind(this));
  },

  _getDiff: function() {
    var now = moment().format();
    return moment(now).diff(this.props.quotation.created_at, 'minutes');
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
                onClick={this.props.handleOpenNoSend}>
                No enviada
              </button>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.props.handleOpenNoEffective}>
                No efectiva
              </button>
            </li>

            <li>
              <a
                className="btn btn-default btn-sm"
                href={"/quotations/" + this.props.quotation.id + "/rethink"} >
                Replantear
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});