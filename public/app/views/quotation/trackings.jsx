'use strict';
var React = require('react');
var Tracking = require('views/quotation/tracking.jsx');
var Form = require('views/trackings/form_create.jsx');
var request = require('superagent');
var _ = require('lodash');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tracking: {
        todos: []
      },
      trackings: [],
    }
  },
  componentWillReceiveProps: function(props) {
    this._fetch(props.quotationId);
  },

  _fetch: function(id) {
    request
      .get('/api/v1/trackings')
      .query({quotation_id: id})
      .end(function(err, res) {
        this.setState({trackings: res.body})
      }.bind(this));
  },

  handleSubmit: function(tracking) {
    request
      .post('/api/v1/trackings')
      .send(_.extend(tracking, {quotation_id: this.props.quotationId}))
      .end(function(err, res) {
        if(err) return console.log(err.body);
        this.setState({
          trackings: this.state.trackings.concat([res.body])
        });
      }.bind(this));
  },

  render: function() {
    var trackingNodes = this.state.trackings.map(function(tracking) {

      return (
         <li className="list-group-item">
          <Tracking  key={tracking.id} tracking={tracking} />
        </li>
      );
    });

    return (
      <div className="panel">
        <div className="panel-body">
          <Form onSubmit={this.handleSubmit} />
          <br/>
          <ul className="list-group">
            {trackingNodes}
          </ul>
        </div>
      </div>
    );
  }
});
