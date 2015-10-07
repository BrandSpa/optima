'use strict';
var React = require('react');
var _ = require('lodash');
var request = require('superagent');
var moment = require('moment');
var Status = require('views/graphs/status.jsx');
var FindUs = require('views/graphs/how_find_us.jsx');
var NoEffective = require('views/graphs/no_effective.jsx');
var Advisors = require('views/graphs/advisor.jsx');
var ClientType = require('views/graphs/client_type.jsx');
var SentDiff = require('views/graphs/sent_diff.jsx');
var DateTimeField = require('react-bootstrap-datetimepicker');
var clientOptions = require('options/client_type.json');
var Select = require('components/form_select.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      graphsData: {},
      filters: {
        date_start: moment().startOf('month').format('YYYY-MM-DD'),
        date_end: moment().endOf('month').format('YYYY-MM-DD'),
        client_type: null,
        type: null
      }
    }
  },

  componentDidMount: function() {
    this.fetch();
  },

  fetch: function() {
    request
      .get('/api/v1/reports')
      .query(this.state.filters)
      .end(function(err, res) {
        this.setState({graphsData: res.body});
      }.bind(this));
  },

  handleFrom: function(date) {
    this.handleFilters({date_start: date});
  },

  handleUntil: function(date) {
    this.handleFilters({date_start: date});
  },

  handleClientType: function() {
    var val = React.findDOMNode(this.refs.clientType.refs.select).value;
    this.handleFilters({client_type: val});
  },

  handleFilters: function(filter) {
    this.setState({filters: _.extend(this.state.filters, filter)});
    this.fetch();
  },

  render: function() {
    return (
      <div className="row">
      <div className="col-md-12">
        <div className="panel">
          <div className="panel-body">
            <div className="form-group col-md-3">
              <label htmlFor="">Desde</label>
              <DateTimeField
                dateTime={this.state.filters.date_start}
                format="YYYY-MM-DD"
                inputFormat="DD-MM-YYYY"
                mode="date"
                onChange={this.handleFrom}
                value={this.state.filters.date_start}
                />
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="">Hasta</label>
              <DateTimeField
                dateTime={this.state.filters.date_end}
                format="YYYY-MM-DD"
                inputFormat="DD-MM-YYYY"
                mode="date"
                onChange={this.handleUntil}
                value={this.state.filters.date_end}
              />
            </div>

            <div className="form-group col-sm-3">
              <label htmlFor="">Tipo de cliente</label>
              <Select
                ref="clientType"
                options={clientOptions}
                default="Seleccionar cliente"
                value={this.state.filters.client_type}
                onSelectChange={this.handleClientType}
              />
            </div>

          </div>
        </div>
      </div>

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