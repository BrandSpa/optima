'use strict';
import React from 'react';
import moment from 'moment';
require('moment/locale/es');

export default React.createClass({
  getDefaultProps: function() {
    return {
      date: Date.now()
    }
  },

  render: function() {
    var created = moment(this.props.date).fromNow();
    return (
       <span className="timeago" >{created}</span>
    );
  }
});
