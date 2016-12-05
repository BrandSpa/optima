'use strict';
import React from 'react';
import request from 'superagent';
import Advisor from 'views/graphs/advisor';
import Status from 'views/graphs/status';
import HowFindUs from 'views/graphs/how_find_us';
import ClientType from 'views/graphs/client_type';
import NoEffective from 'views/graphs/no_effective';
import SentDiff from 'views/graphs/sent_diff';
import Filters from 'views/graphs/filters';

export default React.createClass({
  getInitialState() {
    return {
      filters: {},
      graphsData: []
    }
  },

  componentDidMount() {
    this.fetch();
  },

  fetch(query) {
    let filters = query ? query : {};

    request
    .get('/api/v1/reports')
    .query(filters)
    .end((err, res) => {
      this.setState({ graphsData: res.body });
    });
  },

  handleFilters(query) {
    this.fetch(query);
  },

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Filters onChange={this.handleFilters}/>
        </div>

        <Status graphsData={this.state.graphsData}/>
        <HowFindUs graphsData={this.state.graphsData}/>
        <Advisor graphsData={this.state.graphsData}/>
        <ClientType graphsData={this.state.graphsData}/>
        <NoEffective graphsData={this.state.graphsData}/>
        <SentDiff graphsData={this.state.graphsData}/>
      </div>
    )
  }
});
