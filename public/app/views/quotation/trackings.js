'use strict';
import React from 'react';
import Tracking from 'views/quotation/tracking';
import Form from 'views/trackings/form_create';
import request from 'superagent';
import _ from 'lodash';

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
      .end((err, res) => this.setState({trackings: res.body}));
  },

  handleSubmit(tracking) {
    request
      .post('/api/v1/trackings')
      .send(_.extend(tracking, {quotation_id: this.props.quotationId}))
      .end((err, res) => {
        if(err) return console.log(err.body);
        this.setState({
          trackings: this.state.trackings.concat([res.body])
        });
      });
  },

  render() {
    const trackingNodes = this.state.trackings.map(tracking =>
      <Tracking key={tracking.id} tracking={tracking} />
    );

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
