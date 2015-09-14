'use strict';
var React = require('react');
var ReactQuill = require('react-quill');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      show: false,
      comment: ''
    }
  },

  getInitialState: function() {
    return {
      comment: ''
    }
  },

  componentDidMount: function() {
    this.setState({comment: this.props.comment});
  },

  handleClick: function() {
    this.props.OnSaveComment(this.state.comment);
  },

  handleChange: function(value) {
    this.setState({comment: value});
  },

  handleClose: function() {
    this.props.onClose();
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState(nextProps);
  },

  render: function() {
    return (
      <div className={this.props.show ? "panel" : "hidden"}>
        <div className="panel-body">
        <h5>Comentario</h5>
          <ReactQuill
            theme="snow"
            value={this.state.comment}
            onChange={this.handleChange}
          />

          <button className="btn btn-sm btn-primary" onClick={this.handleClick}>Guardar</button>
          <button className="btn btn-sm btn-default pull-right" onClick={this.handleClose}>Cerrar</button>
        </div>
      </div>
    );
  }
});