'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/reports';
import numeral from 'numeral';
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
      type: 'line'
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
      <div>
        <div className="col-md-12">
          <Filters onChange={this.handleFilters}/>
        </div>

        <div className="col-md-3">
          <div className="panel">
            <div className="panel-body">
              <b>Cotizaciones: </b> {data.total_quotations}
            </div>
          </div>
        </div>
          <div className="col-md-3">
          <div className="panel">
            <div className="panel-body">
              <b>Total: </b>{numeral(data.total_quotations_money).format('0,0') }
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="panel">
            <div className="panel-body">
              <b>Promedio cotizaciones enviadas: </b>{data.average_sent} Minutos
            </div>
          </div>
         
        </div>
        <div className="col-md-3">
        </div>
        
        <Status type={this.state.type} graphsData={data}/>
        <HowFindUs type={this.state.type} graphsData={data}/>
        <Advisor type={this.state.type} graphsData={data}/>
        <ClientType type={this.state.type} graphsData={data}/>
        <NoEffective type={this.state.type} graphsData={data}/>
        <SentDiff type={this.state.type} graphsData={data}/>
      </div>
    )
  }
});

export default connect(store => store.reports)(section);