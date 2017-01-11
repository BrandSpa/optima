'use strict';
import React from 'react';

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      options: [],
      value: '',
      default: '',
      styles: ''
    }
  },

  render: function() {
    let optionNodes = this.props.options.map((option, i) => 
      <option key={i} value={option.value}>{option.label}</option>
    );

    let value = this.props.value || '';

    value = parseInt(value) ? parseInt(value) : value;
    
    return (
      <select
        ref="select"
        onChange={e => this.props.onSelectChange(e)}
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
