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
var typeOptions = require('options/type.json');
var statusOptions = require('options/status.json');
var Select = require('components/form_select.jsx');

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
    var val = React.findDOMNode(this.refs.clientType.refs.select).value;
    this.handleFilters({client_type: val});
  },

  handleType: function() {
    var val = React.findDOMNode(this.refs.type.refs.select).value;
    this.handleFilters({type: val});
  },

  handleStatus: function() {
    var val = React.findDOMNode(this.refs.status.refs.select).value;
    this.handleFilters({status: val});
  },

  handleFilters: function(filter) {
    this.fetch(_.extend(this.state.filters, filter));
  },

  handleShape: function() {
    var shape;
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