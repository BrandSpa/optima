'use strict';
import React from 'react';

module.exports = React.createClass({
  getInitialState() {
    return {
      value: ''
    }
  },

  getDefaultProps: function() {
    return {
      options: [],
      value: '',
      default: '',
      styles: ''
    }
  },

  onChange(e) {
    this.props.onSelectChange(e);
  },

  render: function() {
    let optionNodes = this.props.options.map((option, i) => 
      <option key={i} value={option.value}>{option.label}</option>
    );

    let value = this.props.value || this.state.value;

    value = parseInt(value) ? parseInt(value) : value;
    
    return (
      <select
        ref="select"
        onChange={this.onChange}
        className={`form-control ${this.props.styles}`}
        value={value}
        disabled={this.props.disabled ? true : false}
      >
        <option value="">{this.props.default}</option>
        {optionNodes}
      </select>
    );
  }
});
