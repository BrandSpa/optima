'use strict';
import React from 'react';
import Tracking from 'views/quotation/tracking';
import Form from 'views/trackings/form_create';

export default React.createClass({
  getInitialState() {
    return {
      tracking: {
        todos: []
      },
      trackings: [],
    }
  },


  _fetch(id) {
    // request
    //   .get('/api/v1/trackings')
    //   .query({quotation_id: id})
    //   .end((err, res) => this.setState({trackings: res.body}));
  },

  handleSubmit(tracking) {
    let model = {...tracking, quotation_id: this.props.quotationId};
    console.log(model);
  },

  render() {
    const trackingNodes = this.props.trackings.items.map(tracking =>
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
