'use strict';
import React from 'react';
import timeago from 'timeago.js';
const es = require('timeago.js/locales/es');

export default React.createClass({
  getDefaultProps: function() {
    return {
      date: Date.now()
    }
  },

  render: function() {
    timeago.register('es', es);
    var created = new timeago().format(this.props.date, 'es');
    console.log(created);
    return (
       <span className="timeago" >{created}</span>
    );
  }
});

