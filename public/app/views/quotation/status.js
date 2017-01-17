'use strict';
import React from 'react';
import * as action from 'actions/quotations';
import {storeActivity} from 'lib/activity';

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
    let message = `Cambio estado a ${status}`;

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
        this.props.onStatusChange(status, message);
    }

  },

  handleSend() {
    const id = this.props.quotation.id;
    let message = 'Cambio estado a enviada';
    this.setState({sending: true});
    
    this.props.dispatch(action.sendMail(id)).then((actionRes) => {
        this.setState({sending: false});
        if(actionRes.type == 'QUOTATIONS_FAIL') {
          console.log(actionRes);
        } else {
          return this.props.onStatusChange('Enviada', message);
        }
    });
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
                onClick={this.handleClick.bind(null, 'Enviada')} 
                disabled={this.props.disabled ? true : false}
                >
                Enviada
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

            <li>
              <a
                className="btn btn-default btn-sm"
                disabled={this.props.disabled ? true : false}
                onClick={this.handleClick.bind(this, 'Nula')}
              >
                Anular
              </a>
            </li>

             <li>
              <a
                className="btn btn-default btn-sm"
                disabled={this.props.disabled ? true : false}
                onClick={this.handleClick.bind(this, 'Por confirmar')}
              >
                Por confirmar
              </a>
            </li>

          </ul>
        </div>
      </div>
    );
  }
});
