'use strict';
import React from 'react';
import _ from 'lodash';

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      options: [],
      value: '',
      default: '',
      onSelectChange() {
        console.error('onSelectChange not implemented');
      }
    }
  },

  handleChange: function(e) {
    if(typeof this.props.onSelectChange === 'function') {
      this.props.onSelectChange(e);
    }
  },

  render: function() {
    let optionNodes = this.props.options.map(function(option, i) {
      return (<option key={i} value={option.value}>{option.label}</option>);
    });

    let value = this.props.value;

    value = parseInt(value) ? parseInt(value) : value;

    return (
      <select
        ref="select"
        onChange={e => this.handleChange(e)}
        className="form-control"
        value={value}
        defaultValue=""
        disabled={this.props.disabled ? true : false}>
        <option value="">{this.props.default}</option>
        {optionNodes}
      </select>
    );
  }
});
