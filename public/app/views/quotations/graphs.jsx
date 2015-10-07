'use strict';
var React = require('react');
var request = require('superagent');
var moment = require('moment');
var Status = require('views/graphs/status.jsx');
var FindUs = require('views/graphs/how_find_us.jsx');
var NoEffective = require('views/graphs/no_effective.jsx');
var Advisors = require('views/graphs/advisor.jsx');
var ClientType = require('views/graphs/client_type.jsx');
var SentDiff = require('views/graphs/sent_diff.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      graphsData: {
        status: []
      }
    }
  },

  componentDidMount: function() {
    request
      .get('/api/v1/reports')
      .query({
        date_start: moment().startOf('month').format('YYYY-MM-DD'),
        date_end: moment().endOf('month').format('YYYY-MM-DD')
      })
      .end(function(err, res) {
        this.setState({graphsData: res.body});
      }.bind(this));
  },

  render: function() {
    return (
      <div className="row">

      <div className="col-md-4">
        <div className="panel">
          <div className="panel-body" style={{textAlign: 'center'}}>
            <h4>{this.state.graphsData.total_quotations}</h4>
            <h5>Cotizaciones</h5>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="panel">
          <div className="panel-body" style={{textAlign: 'center'}}>
            <h4>{this.state.graphsData.total_quotations_money}</h4>
            <h5>Cotizaciones en pesos</h5>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="panel">
          <div className="panel-body" style={{textAlign: 'center'}}>
            <h4>{this.state.graphsData.average_sent}</h4>
            <h5>Promedio minutos enviada</h5>
          </div>
        </div>
      </div>



        <Status
          graphsData={this.state.graphsData} />

        <FindUs
          graphsData={this.state.graphsData} />

         <NoEffective
          graphsData={this.state.graphsData} />

        <Advisors
          graphsData={this.state.graphsData} />

        <ClientType
          graphsData={this.state.graphsData} />
        <SentDiff
          graphsData={this.state.graphsData} />
      </div>
    )
  }
});