'use strict';
var React = require('react');
var Select = require('components/form_select.jsx');
var ListTable = require('views/quotations/list_table.jsx');
var request = require('superagent');
var _ = require('underscore');
var statusOptions = require('options/status.json');
var advisorOptions = require('options/advisors.json');
var typeOptions = require('options/type.json');
var clientOptions = require('options/client_type.json');
var DateTimeField = require('react-bootstrap-datetimepicker');
var moment = require('moment');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      quotations: [],
      offset: 0,
      query: {
        query: '',
        status: '',
        advisor: '',
        client_type: '',
        quotation_type: '',
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

  sendRequest: function() {
    var query = _.extend(this.state.query, {offset: this.state.offset});

    if ( this.state.offset >= 0) {
      request
        .get('/api/v1/quotations')
        .query(query)
        .end(function(err, resp) {

          this._onChange(resp.body);
        }.bind(this));
    }
  },

  handleFrom: function(date) {
    var dateEnd = moment().endOf('month').format('YYYY-MM-DD', date);

    var query = _.extend(this.state.query, {date_start: date});
    this.filter(query);
  },

  handleUntil: function(date) {
    var query = _.extend(this.state.query, {date_end: date});
    this.filter(query);
  },

  search: function() {
    var query = {
      query: React.findDOMNode(this.refs.query).value,
      status: React.findDOMNode(this.refs.selectStatus.refs.select).value,
      advisor: React.findDOMNode(this.refs.advisor.refs.select).value,
      client_type: React.findDOMNode(this.refs.client.refs.select).value,
      quotation_type: React.findDOMNode(this.refs.type.refs.select).value
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

  loadMore: function(){
    this.state.offset = this.state.offset + 10;
    this.sendRequest();
  },

  loadLess: function() {
    if ( this.state.offset >= 10) {
      this.state.offset = this.state.offset - 10;
    }
    this.sendRequest();
  },

  _onChange: function(quotations) {
    this.setState({quotations: quotations});
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
                format="YYYY-MM-DD"
                inputFormat="DD-MM-YYYY"
                mode="date"
                onChange={this.handleFrom}
                value={this.state.query.date_start}
                />
            </div>

            <div className="form-group col-md-3">
              <DateTimeField
                defaultText="Seleccionar hasta"
                format="YYYY-MM-DD"
                inputFormat="DD-MM-YYYY"
                mode="date"
                onChange={this.handleUntil}
                value={this.state.query.date_end}
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
