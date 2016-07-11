'use strict';
const React = require('react');
const Tracking = require('views/quotation/tracking');
const Form = require('views/trackings/form_create');
const request = require('superagent');
const _ = require('lodash');

module.exports = React.createClass({
  getInitialState() {
    return {
      tracking: {
        todos: []
      },
      trackings: [],
    }
  },
  componentWillReceiveProps(props) {
    this._fetch(props.quotationId);
  },

  _fetch(id) {
    request
      .get('/api/v1/trackings')
      .query({quotation_id: id})
      .end(function(err, res) {
        this.setState({trackings: res.body})
      }.bind(this));
  },

  handleSubmit(tracking) {
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

  render() {
    const trackingNodes = this.state.trackings.map(function(tracking) {

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
