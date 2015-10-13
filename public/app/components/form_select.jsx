'use strict';
var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      options: [],
      value: '',
      default: '',
      onSelectChange: function() {
        console.error('onSelectChange not implemented');
      }
    }
  },

  handleChange: function() {
    this.props.onSelectChange();
  },

  render: function() {
    var optionNodes = this.props.options.map(function(option, i) {
      return (<option key={i} value={option.value}>{option.label}</option>);
    });

    return (
      <select
        ref="select"
        onChange={this.handleChange}
        className="form-control"
        value={this.props.value}
        disabled={this.props.disabled ? true : false}>
      <option value="">{this.props.default}</option>
        {optionNodes}
      </select>
    );
  }
});