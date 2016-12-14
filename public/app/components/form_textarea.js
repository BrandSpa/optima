'use strict';
import React from 'react';

module.exports = React.createClass({
  getDefaultProps() {
    return {
      value: ''
    }
  },

  handleChange: function() {
    this.props.onTextareaChange();
  },

  render: function() {
    let {value} = this.props;
    
    return (
      <textarea 
        className="form-control" 
        ref="textarea" 
        placeholder={this.props.placeholder} 
        onChange={this.handleChange} 
        value={value}
      />

    );
  }
});
