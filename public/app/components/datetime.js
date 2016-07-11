'use strict';
import React from 'React';
import flatpickr from 'flatpickr';
import uid from 'uid';

export default React.createClass({
  getInitialState() {
    return {
      id: `flatpickr-${ uid() }`,
      lastDate: ''
    }
  },

  getDefaultProps() {
    return {
      id: ``,
      styles: '',
      placeholder: '',
      format: '',
      enableTime: false,
      time_24hr: false,
      altInput: false,
      altFormat: ''
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

  componentDidMount() {
    let props = this.props;

    flatpickr(`#${this.state.id}`, {
      enableTime: props.enableTime,
      time_24hr: props.time_24hr,
      altFormat: props.altFormat,
      altInput: props.altInput,
      onChange: this.handleChange
    });
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
