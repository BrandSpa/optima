'use strict';
import React from 'react';
import _ from 'underscore';
import Editor from 'components/editor';

module.exports = React.createClass({
  getDefaultProps() {
    return {
      quotation: {
        mail_message: '',
        mail_recipient_1: '',
        mail_recipient_2: ''
      },
      show: false
    }
  },

  getInitialState() {
    return {
      quotation: {},
      show: false
    }
  },

  handleClose() {
    this.props.onClose();
  },

  handleTextChange(text) {
    this.setState({
      quotation: _.extend(this.state.quotation, {mail_message: text})
    });
  },

  handleChange() {
    this.setState(_.extend(this.state.quotation, {
      quotation: {
        mail_recipient_1: this.refs.mail_recipient_1.value,
        mail_recipient_2: this.refs.mail_recipient_2.value
      }
    }));
  },

  handleClick() {
    this.props.onSaveMail(this.state.quotation);
  },

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  },

  render() {
    const quotation = this.state.quotation;

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
                value={quotation.mail_recipient_1}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-sm-6">
              <input
                className="form-control"
                ref="mail_recipient_2"
                placeholder="Para"
                value={quotation.mail_recipient_2}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <Editor
            value={quotation.mail_message}
            onChange={this.handleTextChange}
          />

          <div className="row"></div>

            <p></p>

          <button className="btn btn-sm btn-primary" onClick={this.handleClick}>Guardar</button>
          <button className="btn btn-sm btn-default pull-right" onClick={this.handleClose}>Cerrar</button>
        </div>
      </div>
    );
  }
});
