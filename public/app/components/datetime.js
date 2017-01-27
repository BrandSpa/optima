'use strict';
import React from 'react';
import flatpickr from 'flatpickr';
import uid from 'uid';

const DateTime = React.createClass({
  getInitialState() {
    return {
      id: `flatpickr_${ uid() }`,
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
    let props = this.props;
    const id = `#${this.state.id}`;
    const options = {
      enableTime: props.enableTime,
      time_24hr: props.time_24hr,
      altFormat: props.altFormat,
      altInput: props.altInput,
      onChange: this.handleChange
    };
    
    flatpickr(id, options);
  },

  render() {
    return (
      <input
        id={this.state.id}
        placeholder={this.props.placeholder}
        className={`${this.props.styles}`}
      />
    )
  }
});

export default DateTime;
