'use strict';
import React from 'react';
import flatpickr from 'flatpickr';

const DateTime = React.createClass({
  getInitialState() {
    return {
      lastDate: '',
      active: false
    }
  },

  getDefaultProps() {
    return {
      styles: '',
      placeholder: '',
      format: '',
      altFormat: '',
      enableTime: false,
      time_24hr: false,
      altInput: false
    }
  },

  triggerChange(dateObj, dateStr) {
    if(typeof this.props.onChange === 'function') {
      this.props.onChange(dateObj, dateStr);
    }
  },

  handleChange(dateObj, dateStr) {
    this.setState({lastDate: dateStr});
    this.triggerChange(dateObj, dateStr);
  },

  shouldComponentUpdate() {
		return false
	},

  componentDidMount() {
    let {props} = this;

    const options = {
      enableTime: props.enableTime,
      time_24hr: props.time_24hr,
      altFormat: props.altFormat,
      altInput: props.altInput,
      onChange: this.handleChange
    };
    
    new flatpickr(this.node, options);
  },

  render() {
    return (
      <input
        ref={node => this.node = node} 
        placeholder={this.props.placeholder}
        className={`${this.props.styles}`}
      />
    )
  }
});

export default DateTime;
