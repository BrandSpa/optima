'use strict';
var React = require('react');
var request = require('superagent');
var Company = require('views/companies/company.jsx');
var Form = require('views/companies/form_create.jsx');
var _ = require('lodash');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      companies: [],
      company: {},
      filters: {
        query: null,
        offset: 0
      }
    }
  },

  componentDidMount: function() {
    this.fetch();
  },

  fetch: function(filters) {
    var query;
    if(filters) {
      query = filters;
    } else {
      query = this.state.filters;
    }

    request
    .get('/api/v1/companies')
    .query(query)
    .end(function(err, res) {
      this.setState({companies: res.body});
    }.bind(this));
  },

  loadMore: function() {
    var offset = parseInt(this.state.filters.offset) + 30;

    this.setState({
      filters: {offset: offset}
    });

    this.fetch({offset: offset});
  },

  loadLess: function() {
    var offset = parseInt(this.state.filters.offset) - 30;
    if(offset >= -30) {
      this.setState({
      filters: {offset: offset}
      });

      this.fetch({offset: offset});
    }
  },

  handleEdit: function(company, e) {
    e.preventDefault();
    this.setState({company: company});
  },

  handleSubmit: function(company) {
    if(company.id) {
      request
      .put('/api/v1/companies/' + company.id)
      .send(company)
      .end(function(err, res){
        if(err) return console.log(err.body);
        this.setState({
          companies: [res.body].concat(this.state.companies)
        });
      }.bind(this));
    } else {
      request
      .post('/api/v1/companies')
      .send(company)
      .end(function(err, res){
        this.setState({
          companies: [res.body].concat(this.state.companies)
        });
      }.bind(this));
    }
  },

  handleSearch: function() {
    var val = React.findDOMNode(this.refs.query).value;
    this.setState({filters: {query: val }});
    this.fetch({query: val});
  },

  render: function() {
    var companies = this.state.companies;

    var companyNodes = companies.map(function(company) {
      return (
        <Company
          key={company.id}
          company={company}
          onEdit={this.handleEdit}
        />
      );
    }.bind(this));

    return (
      <div>
        <div className="col-md-8">
        <div className="panel">
          <div className="panel-body">
          <div className="form-group">
            <input
              ref="query"
              type="text"
              className="form-control"
              placeholder="Buscar empresas o contactos"
              onChange={this.handleSearch}
              />
          </div>
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
        <div className="companies-list">
            {companyNodes}
          </div>
      </div>

      <div className="col-md-4">
        <div className="panel">
          <div className="panel-body">
            <Form
              company={this.state.company}
              btnCleanText="Cancelar"
              btnStoreText="Guardar"
              onSubmit={this.handleSubmit}
              />
          </div>
        </div>

      </div>
      </div>

    );
  }
});