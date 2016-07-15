'use strict';
const React = require('react');
const request = require('superagent');
const moment = require('moment');
const alertify = require('alertifyjs');
alertify.set('notifier','position', 'top-right');

module.exports = React.createClass({
  getDefaultProps() {
    return {
      disabled: false
    }
  },

  getInitialState() {
    return {
      sending: false
    }
  },

  handleClick(status, e) {
    e.preventDefault(status, e);
    this.props.onStatusChange({status});
  },

  handleSend() {
    const id = this.props.quotation.id;
    this.setState({sending: true});

    request
    .post(`/api/v1/quotations/${id}/sendmail`)
    .end(function(err, res) {
      this.setState({sending: false});
      if(err) return alertify.error("complete los filtros");

      return this.props.onStatusChange({
        status: 'Enviada',
        created_sent_diff: this._getDiff()
      });
    }.bind(this));
  },

  _getDiff() {
    const now = moment().format();
    return moment(now).diff(this.props.quotation.created_at, 'minutes');
  },

  render() {
    const sending = this.state.sending ? "disabled" : "";
    const messageSend = this.state.sending ? "Enviando..." : "Enviar";

    return (
      <div className="panel">
        <div className="panel-body">
          <ul className="list-inline">
            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleSend} disabled={sending}
                >
                {messageSend}
              </button>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleClick.bind(null, 'Entregada')}
                disabled={this.props.disabled ? true : false}
                >
                Entregada
              </button>
            </li>

             <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleClick.bind(null, 'Efectiva')}
                disabled={this.props.disabled ? true : false}
                >
                Efectiva
              </button>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.props.handleOpenNoSend}
                disabled={this.props.disabled ? true : false}
              >
                No enviada
              </button>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.props.handleOpenNoEffective}
                disabled={this.props.disabled ? true : false}
              >
                No efectiva
              </button>
            </li>

            <li>
              <a
                className="btn btn-default btn-sm"
                href={`/quotations/${this.props.quotation.id}/rethink`}
              >
                Replantear
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});
