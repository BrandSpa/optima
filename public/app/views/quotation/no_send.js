'use strict';
const React = require('react');
const reasonsOptions = require('options/no_send_reasons.json');
const Select = require('components/form_select');

module.exports = React.createClass({
  getDefaultProps() {
    return {
      show: false
    }
  },

  getInitialState() {
    return {
      quotation: {
        status: 'No enviada',
        status_cause: null,
        status_note: null
      }
    }
  },

  componentWillReceiveProps(props) {
    this.setState(props);
  },

  handleChange() {
    const reason = {
      status: 'No enviada',
      status_cause: React.findDOMNode(this.refs.cause.refs.select).value,
      status_note: React.findDOMNode(this.refs.note).value
    };

    this.setState({quotation: reason});
  },

  handleClose() {
    this.props.onClose();
  },

  handleClick() {
    this.props.onSave(this.state.quotation);
  },

  render() {
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
