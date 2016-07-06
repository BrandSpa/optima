'use strict';
const React = require('react');
const Select = require('components/form_select.jsx');
const ListTable = require('views/quotations/list_table.jsx');
const request = require('superagent');
const _ = require('underscore');
const statusOptions = require('options/status.json');
const advisorOptions = require('options/advisors.json');
const typeOptions = require('options/type.json');
const clientOptions = require('options/client_type.json');
const DateTimeField = require('react-bootstrap-datetimepicker');
const moment = require('moment');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      quotations: [],
      query: {
        offset: 0,
        query: null,
        status: null,
        advisor: null,
        client_type: null,
        quotation_type: null,
        from: null,
        until: null
      },
    }
  },

  componentDidMount: function() {
    request
    .get('/api/v1/quotations', function(err, resp) {
      this._onChange(resp.body);
    }.bind(this));
  },

  handleFrom: function(date) {
    const query = _.extend(this.state.query, {date_start: date + " 00:00:00", offset: 0});
    this.filter(query);
  },

  handleUntil: function(date) {
    const query = _.extend(this.state.query, {date_end: date + " 00:00:00", offset: 0});
    this.filter(query);
  },

  search: function() {
    const query = {
      query: React.findDOMNode(this.refs.query).value,
      status: React.findDOMNode(this.refs.selectStatus.refs.select).value,
      advisor: React.findDOMNode(this.refs.advisor.refs.select).value,
      client_type: React.findDOMNode(this.refs.client.refs.select).value,
      quotation_type: React.findDOMNode(this.refs.type.refs.select).value,
      offset: 0
    };

    this.setState({query: query});
    this.filter(query);
  },

  filter: function(query) {
    request
      .get('/api/v1/quotations')
      .query(query)
      .end(function(err, resp) {
        this._onChange(resp.body);
      }.bind(this));
  },

  loadMore: function() {
    const offset = this.state.query.offset + 10;
    var query = _.extend(this.state.query, {offset: offset});
    this.setState({
      query: query
    });

    this.filter(query);
  },

  loadLess: function() {
    const offset = this.state.query.offset - 10;

    if ( offset >= 0) {
      var query = _.extend(this.state.query, {offset: offset});
      this.setState({
        query: query
      });

      this.filter(query);
    }
  },

  _onChange: function(quotations) {
    this.setState({
      quotations: quotations
    });
  },

  render: function() {
    return (
      <div className="panel quotations-table">
        <div className="panel-body">
          <a href="#company/create" className="btn btn-primary btn-sm">Nueva cotización</a>
          <span className="pull-right">BD-COM-03</span>
          <hr />
          <div className="row">
          <div className="form-group col-md-6">
            <input placeholder="Buscar cotizaciones" ref="query" className="form-control" onChange={this.search} />
          </div>

          <div className="form-group col-md-3">
              <DateTimeField
                defaultText="Seleccionar desde"
                dateTime={moment().format('YYYY-MM-DD')}
                format="YYYY-MM-DD"
                inputFormat="DD-MM-YYYY"
                mode="date"
                onChange={this.handleFrom}
                value={this.state.query.from}
                />
            </div>

            <div className="form-group col-md-3">
              <DateTimeField
                defaultText="Seleccionar hasta"
                dateTime={moment().format('YYYY-MM-DD')}
                format="YYYY-MM-DD"
                inputFormat="DD-MM-YYYY"
                mode="date"
                onChange={this.handleUntil}
                value={this.state.query.until}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-sm-3">
              <Select
                ref="selectStatus"
                options={statusOptions}
                default="Seleccionar estado"
                value={this.state.query.status}
                onSelectChange={this.search}
              />
            </div>

            <div className="form-group col-sm-3">
              <Select
                ref="advisor"
                options={advisorOptions}
                default="Seleccionar asesor"
                value={this.state.query.advisor}
                onSelectChange={this.search}
              />
            </div>

            <div className="form-group col-sm-3">
              <Select
                ref="client"
                options={clientOptions}
                default="Seleccionar cliente"
                value={this.state.query.client_type}
                onSelectChange={this.search}
              />
            </div>

            <div className="form-group col-sm-3">
              <Select
                ref="type"
                options={typeOptions}
                 default="Seleccionar tipo"
                 value={this.state.query.quotation_type}
                 onSelectChange={this.search}
                 />
            </div>
          </div>

           <div className="btn-group" role="group">
            <button
              className="btn btn-default btn-sm"
              onClick={this.loadLess}><i className="fa fa-chevron-left"></i></button>
            <button
              className="btn btn-default btn-sm"
              onClick={this.loadMore}><i className="fa fa-chevron-right"></i></button>
            </div>

          <ListTable quotations={this.state.quotations} />

          <div className="btn-group" role="group">
            <button
            className="btn btn-default btn-sm"
            onClick={this.loadLess}><i className="fa fa-chevron-left"></i></button>
            <button
              className="btn btn-default btn-sm"
              onClick={this.loadMore}><i className="fa fa-chevron-right"></i></button>
            </div>

        </div>
      </div>
    )
  }
});
