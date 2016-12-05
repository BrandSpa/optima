'use strict';
import React from 'react';

module.exports = React.createClass({
  handleChange: function() {
    this.props.onTextareaChange();
  },

  render: function() {
    return (
      <textarea 
        className="form-control" 
        ref="textarea" 
        placeholder={this.props.placeholder} 
        onChange={this.handleChange} 
        value={this.props.value}>
      </textarea>
    );
  }
});
