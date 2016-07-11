'use strict';
const React = require('react');
const _ = require('lodash');
const request = require('superagent');
const moment = require('moment');
const DateTimeField = require('react-bootstrap-datetimepicker');

const clientOptions = require('options/client_type.json');
const typeOptions = require('options/type.json');
const statusOptions = require('options/status.json');
const Status = require('views/graphs/status');
const FindUs = require('views/graphs/how_find_us');
const NoEffective = require('views/graphs/no_effective');
const Advisors = require('views/graphs/advisor');
const ClientType = require('views/graphs/client_type');
const SentDiff = require('views/graphs/sent_diff');
const Select = require('components/form_select');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      graphsData: {},
      filters: {
        date_start: moment().startOf('month').format('YYYY-MM-DD'),
        date_end: moment().endOf('month').format('YYYY-MM-DD'),
        client_type: null,
        type: null,
        status: null
      },
      shape: 'Bar'
    }
  },

  componentDidMount: function() {
    this.fetch();
  },

  fetch: function(filters) {
    var filters = filters || this.state.filters;
    
    request
      .get('/api/v1/reports')
      .query(filters)
      .end(function(err, res) {
        this.setState({
          graphsData: res.body,
          filters: filters
        });
      }.bind(this));
  },

  handleFrom: function(date) {
    this.handleFilters({date_start: date});
  },

  handleUntil: function(date) {
    this.handleFilters({date_end: date});
  },

  handleClientType: function() {
    const val = React.findDOMNode(this.refs.clientType.refs.select).value;
    this.handleFilters({client_type: val});
  },

  handleType: function() {
    const val = React.findDOMNode(this.refs.type.refs.select).value;
    this.handleFilters({type: val});
  },

  handleStatus: function() {
    const val = React.findDOMNode(this.refs.status.refs.select).value;
    this.handleFilters({status: val});
  },

  handleFilters: function(filter) {
    this.fetch(_.extend(this.state.filters, filter));
  },

  handleShape: function() {
    let shape;
    if(this.state.shape == "Bar") {
      shape = "Line";
    } else {
      shape = "Bar"
    }

    this.setState({shape: shape});
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

            <div className="form-group col-sm-3">
              <label htmlFor="">Tipo</label>
              <Select
                ref="type"
                options={typeOptions}
                default="Seleccionar tipo"
                value={this.state.filters.type}
                onSelectChange={this.handleType}
              />
            </div>

            <div className="form-group col-sm-3">
              <label htmlFor="">Status</label>
              <Select
                ref="status"
                options={statusOptions}
                default="Seleccionar status"
                value={this.state.filters.type}
                onSelectChange={this.handleStatus}
              />
            </div>

            <div className="form-group col-sm-3">
                <button className="btn btn-default" onClick={this.handleShape}>Cambiar Visualización</button>
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
          graphsData={this.state.graphsData}
          shape={this.state.shape}
        />

        <FindUs
          graphsData={this.state.graphsData}
          shape={this.state.shape}
        />

         <NoEffective
          graphsData={this.state.graphsData}
          shape={this.state.shape}
        />

        <Advisors
          graphsData={this.state.graphsData}
          shape={this.state.shape}
        />

        <ClientType
          graphsData={this.state.graphsData}
          shape={this.state.shape}
        />

        <SentDiff
          graphsData={this.state.graphsData}
          shape={this.state.shape}
        />
      </div>
    )
  }
});
