'use strict';
import React from 'react';
import _ from 'lodash';
import request from 'superagent';
import Company from 'views/companies/company';
import Form from 'views/companies/form_create';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      companies: [],
      company: {},
      errors: null,
      cleanForm: false,
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
    let query;
    if(filters) {
      query = filters;
    } else {
      query = this.state.filters;
    }

    request
    .get('/api/v1/companies')
    .query(query)
    .end((err, res) => this.setState({companies: res.body}));
  },

  loadMore: function() {
    const offset = parseInt(this.state.filters.offset) + 30;

    this.setState({
      filters: {offset: offset}
    });

    this.fetch({offset: offset});
  },

  loadLess: function() {
    const offset = parseInt(this.state.filters.offset) - 30;
    if(offset >= 0) {
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
      this.update(company);
    } else {
      this.store(company);
    }
  },

  update(company) {
    request
    .put(`/api/v1/companies/${company.id}`)
    .send(company)
    .end((err, res) => {
      if(err) return console.log(err.body);
      this.setState({
        companies: [res.body].concat(this.state.companies)
      });
    });
  },

  cleanObj(obj) {
    return Object.keys(obj).reduce((ob, key) => {
      ob[key] = '';
      return _.extend(ob, ob);
    }, {});
  },

  store(company) {
    request
    .post('/api/v1/companies')
    .send(company)
    .end((err, res) => {
      if(err) {
        let errs = JSON.parse(err.response.text);
        this.setState({errors: errs});
      } else {
        this.setState({
          companies: [res.body].concat(this.state.companies),
          company: this.cleanObj(company),
          errors: null,
          cleanForm: true
        });
      }

    });
  },

  handleSearch: function() {
    const val = this.refs.query.value;
    this.setState({filters: {query: val }});
    this.fetch({query: val});
  },

  render: function() {
    let companies = this.state.companies;

    let companyNodes = companies.map(company =>
      <Company
        key={company.id}
        company={company}
        onEdit={this.handleEdit}
      />
    );

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
              onClick={this.loadLess}
              disabled={!this.state.filters.offset}
              ><i className="fa fa-chevron-left"></i></button>
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
        <div className="panel" style={{position: 'fixed', margin: '0 30px 0 0'}}>
          <div className="panel-body">
          <div className="alert alert-danger">
          {this.state.errors}
          </div>
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
