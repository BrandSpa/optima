'use strict';
const React = require('react');
const ReactQuill = require('react-quill');
const Input = require('components/form_input.jsx');
const _ = require('underscore');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      quotation: {
        mail_message: '',
        mail_recipient_1: '',
        mail_recipient_2: ''
      },
      show: false
    }
  },

  getInitialState: function() {
    return {
      quotation: {},
      show: false
    }
  },

  handleClose: function() {
    this.props.onClose();
  },

  handleTextChange: function(text) {
    this.setState({
      quotation: _.extend(this.state.quotation, {mail_message: text})
    });
  },

  handleChange: function() {
    this.setState(_.extend(this.state.quotation, {
      quotation: {
        'mail_recipient_1': React.findDOMNode(this.refs.mail_recipient_1).value,
        'mail_recipient_2': React.findDOMNode(this.refs.mail_recipient_2).value
      }
    }));
  },

  handleClick: function() {
    this.props.onSaveMail(this.state.quotation);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState(nextProps);
  },

  render: function() {
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
          <ReactQuill
            ref="mail_message"
            theme="snow"
            value={quotation.mail_message}
            onChange={this.handleTextChange}
          />

          <button className="btn btn-sm btn-primary" onClick={this.handleClick}>Guardar</button>
          <button className="btn btn-sm btn-default pull-right" onClick={this.handleClose}>Cerrar</button>
        </div>
      </div>
    );
  }
});