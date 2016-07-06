'use strict';
var React = require('react');

module.exports = React.createClass({

  handleChange: function() {
    this.props.onInputChange();
  },

  render: function() {
    return (
      <input
        type="text"
        ref="input"
        className="form-control"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
});