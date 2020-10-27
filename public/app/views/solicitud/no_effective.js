'use strict';
const React = require('react');
const Select = require('components/form_select');
const reasonsOptions = require('options/no_effective_reasons.json');

const QuoNoEffective = React.createClass({
  getDefaultProps() {
    return {
      show: false
    }
  },

  getInitialState() {
    return {
      solicitud: {
        status: 'No efectiva',
        status_cause: null,
        status_note: ''
      }
    }
  },

  componentWillReceiveProps(props) {
    this.setState(props);
  },

  handleChange() {
    const reason = {
      status: 'No efectiva',
      status_cause: this.refs.cause.refs.select.value,
      status_note: this.refs.note.value
    };

    this.setState({solicitud: reason});
  },

  handleClose() {
    this.props.onClose();
  },

  handleClick() {
    this.props.onSave(this.state.solicitud);
  },

  render() {
    return (
      <div className={this.props.show ? "panel" : "hidden"}>
        <div className="panel-body">
        <h5>No efectiva</h5>
          <div className="form-group">
              <Select
                ref="cause"
                options={reasonsOptions}
                default="Seleccionar razón"
                onSelectChange={this.handleChange}
                value={this.state.solicitud.status_cause}
              />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              ref="note"
              placeholder="Nota"
              onChange={this.handleChange}
              value={this.state.solicitud.status_note ? this.state.solicitud.status_note : ''}>
            </textarea>

          </div>
            <button className="btn btn-sm btn-primary" onClick={this.handleClick}>Guardar</button>
          <button className="btn btn-sm btn-default pull-right" onClick={this.handleClose}>Cerrar</button>
        </div>
      </div>
    );
  }
});

export default QuoNoEffective;
