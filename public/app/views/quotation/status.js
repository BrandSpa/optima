'use strict';
import React from 'react';
import request from 'superagent';
import moment from 'moment';
import alertify from 'alertifyjs';
import {storeActivity} from 'lib/activity';
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

    storeActivity({
      message: `Cambio estado a ${status}`,
      quotation_id: this.props.quotation.id
    });

    switch (status) {
      case 'Replanteada':
         window.location = `/quotations/${this.props.quotation.id}/rethink`;
        break;
      case 'No enviada':
        this.props.handleOpenNoSend();
        break;
      case 'No efectiva':
        this.props.handleOpenNoEffective();
        break;
      default:
        this.props.onStatusChange({status});
    }

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
                onClick={this.handleClick.bind(this, 'No enviada')}
                disabled={this.props.disabled ? true : false}
              >
                No enviada
              </button>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.handleClick.bind(this, 'No efectiva')}
                disabled={this.props.disabled ? true : false}
              >
                No efectiva
              </button>
            </li>

            <li>
              <a
                className="btn btn-default btn-sm"
                onClick={this.handleClick.bind(this, 'Replanteada')}
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
