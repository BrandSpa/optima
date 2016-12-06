'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/reports';
import Advisor from 'views/graphs/advisor';
import Status from 'views/graphs/status';
import HowFindUs from 'views/graphs/how_find_us';
import ClientType from 'views/graphs/client_type';
import NoEffective from 'views/graphs/no_effective';
import SentDiff from 'views/graphs/sent_diff';
import Filters from 'views/graphs/filters';

const section = React.createClass({
  getInitialState() {
    return {
      filters: {},
    }
  },

  componentDidMount() {
    this.props.dispatch(action.fetch());
  },

  handleFilters(query) {
    this.props.dispatch(action.fetch(query));
  },

  render() {
    const {data} = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <Filters onChange={this.handleFilters}/>
        </div>

        <Status graphsData={data}/>
        <HowFindUs graphsData={data}/>
        <Advisor graphsData={data}/>
        <ClientType graphsData={data}/>
        <NoEffective graphsData={data}/>
        <SentDiff graphsData={data}/>
      </div>
    )
  }
});

export default connect(store => store.reports)(section);