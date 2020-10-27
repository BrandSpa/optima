'use strict';
import React from 'react';
import Editor from '../../components/editor';

const QuoMails = React.createClass({
  getDefaultProps() {
    return {
      solicitud: {
        mail_message: '',
        mail_recipient_1: '',
        mail_recipient_2: ''
      },
      show: false,
      loading: false
    }
  },

  getInitialState() {
    return {
      solicitud: {},
      show: false
    }
  },

  handleClose() {
    this.props.onClose();
  },

  handleTextChange(text) {
    this.setState({
      solicitud: {...this.state.solicitud, mail_message: text}
    });
  },

  handleMail() {
    this.setState({loading: true});
    this.props.onSendMail(this.state.solicitud)
      .then(() => this.setState({loading: false}));
  },

  handleChange() {
    let solicitud = {
      ...this.state.solicitud,
      mail_recipient_1: this.refs.mail_recipient_1.value,
      mail_recipient_2: this.refs.mail_recipient_2.value
    };

    this.setState({solicitud});
  },

  handleClick() {
    this.props.onSaveMail(this.state.solicitud);
  },

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  },

  render() {
    const solicitud = this.state.solicitud;

    return (
      <div className={this.state.show ? "panel"   : "hidden" }>
        <div className="panel-body">
        <h5>Email</h5>
          <div className="row">

            <div className="form-group col-sm-6">
              <input
                className="form-control"
                ref="mail_recipient_1"
                placeholder="Para"
                value={solicitud.mail_recipient_1}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-sm-6">
              <input
                className="form-control"
                ref="mail_recipient_2"
                placeholder="Para"
                value={solicitud.mail_recipient_2}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <Editor
            value={solicitud.mail_message}
            onChange={this.handleTextChange}
          />

          <div className="row"></div>

            <p></p>

          <button className="btn btn-sm btn-primary mail-save" onClick={this.handleClick}>Guardar</button>
          <span style={{margin: '0 7px'}}></span>
          <button className="btn btn-sm btn-primary mail-send" onClick={this.handleMail} disabled={this.state.loading}>{this.state.loading ? 'Enviado...' : 'Enviar Mail'}</button>
          <button className="btn btn-sm btn-default pull-right mail-close" onClick={this.handleClose}>Cerrar</button>
        </div>
      </div>
    );
  }
});

export default QuoMails;