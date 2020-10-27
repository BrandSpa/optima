'use strict';
import React from 'react';
import * as action from '../../actions/solicitudes';
import { storeActivity } from '../../lib/activity';

const QuoStatus = React.createClass({
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
    e.preventDefault();
    let message = `Cambio estado a ${status}`;

    switch (status) {
      case 'Replanteada':
         window.location = `/solicitudes/${this.props.solicitud.id}/rethink`;
        break;
      case 'No enviada':
        this.props.handleOpenNoSend(message);
        break;
      case 'No efectiva':
        this.props.handleOpenNoEffective(message);
        break;
      default:
        this.props.onStatusChange({status}, message);
    }
  },

  handleSend() {
    const id = this.props.solicitud.id;
    let message = 'Cambio estado a enviada';
    this.setState({sending: true});
    
    this.props.dispatch(action.sendMail(id)).then((actionRes) => {
        this.setState({sending: false});
        if(actionRes.type == 'SOLICITUDES_FAIL') {
          console.error('quo fail', actionRes);
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
                className="btn btn-danger btn-sm"
                onClick={this.handleClick.bind(this, 'No enviada')}
                disabled={this.props.disabled ? true : false}
              >
                No enviada
              </button>
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
          </ul>
        </div>
      </div>
    );
  }
});

export default QuoStatus;