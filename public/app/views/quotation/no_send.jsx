'use strict';
var React = require('react');
var reasonsOptions = require('options/no_send_reasons.json');
var Select = require('components/form_select.jsx');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      show: false
    }
  },

  getInitialState: function() {
    return {
      quotation: {
        status: 'No enviada',
        status_cause: null,
        status_note: null
      }
    }
  },

  componentWillReceiveProps: function(props) {
    this.setState(props);
  },

  handleChange: function() {
    var reason = {
      status: 'No enviada',
      status_cause: React.findDOMNode(this.refs.cause.refs.select).value,
      status_note: React.findDOMNode(this.refs.note).value
    };

    this.setState({quotation: reason});
  },

  handleClose: function() {
    this.props.onClose();
  },

  handleClick: function() {
    this.props.onSave(this.state.quotation);
  },
  render: function() {
    return (
      <div className={this.props.show ? "panel" : "hidden"}>
        <div className="panel-body">
        <h5>No enviada</h5>
          <div className="form-group">
              <Select
                ref="cause"
                options={reasonsOptions}
                default="Seleccionar razón"
                onSelectChange={this.handleChange}
                value={this.state.quotation.status_cause}
              />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              ref="note"
              placeholder="Nota"
              onChange={this.handleChange}
              value={this.state.quotation.status_note}>
            </textarea>

          </div>
            <button className="btn btn-sm btn-primary" onClick={this.handleClick}>Guardar</button>
          <button className="btn btn-sm btn-default pull-right" onClick={this.handleClose}>Cerrar</button>
        </div>
      </div>
    );
  }
});