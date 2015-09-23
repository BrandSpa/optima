'use strict';
var React = require('react');
var moment = require('moment');

module.exports = React.createClass({

  render: function() {
    var created_sent_diff;

    if(this.props.quotation.created_sent_diff) {
      created_sent_diff = this.props.quotation.created_sent_diff + " minutos";
    }

    return (
      <div className="panel">
        <div className="panel-body">
          {moment(this.props.quotation.created_at).fromNow()}
          <br/>
          {created_sent_diff}
        </div>
      </div>
    );
  }
});
