'use strict';
import React from 'react';
import Editor from 'components/editor';

module.exports = React.createClass({
  getDefaultProps() {
    return {
      show: false,
      comment: ''
    }
  },

  getInitialState() {
    return {
      comment: ''
    }
  },

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  },

  handleClick() {
    this.props.OnSaveComment(this.state.comment);
  },

  handleChange(value) {
    this.setState({comment: value});
  },

  handleClose() {
    this.props.onClose();
  },

  render() {
    return (
      <div className={this.props.show ? "panel" : "hidden"}>
        <div className="panel-body">
        <h5>Comentario</h5>

          <Editor
            value={this.state.comment}
            onChange={this.handleChange}
          />

          <div className="row"></div>
          <p></p>

          <button
            className="btn btn-sm btn-primary"
            onClick={this.handleClick}>
            Guardar
          </button>
          
          <button
            className="btn btn-sm btn-default pull-right"
            onClick={this.handleClose}>
            Cerrar
          </button>
        </div>
      </div>
    );
  }
});
