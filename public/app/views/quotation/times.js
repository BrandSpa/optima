'use strict';
const React = require('react');

module.exports = React.createClass({

  render() {
    let created_sent_diff;

    if(this.props.quotation.created_sent_diff) {
      created_sent_diff = `${this.props.quotation.created_sent_diff} minutos`;
    }

    return (
      <div className="panel">
        <div className="panel-body">

          <br/>
          {created_sent_diff}
        </div>
      </div>
    );
  }
});
