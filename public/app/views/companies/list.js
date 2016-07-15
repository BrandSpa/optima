'use strict';
import React from 'react';
import _ from 'lodash';
import request from 'superagent';
import Company from 'views/companies/company';
import Form from 'views/companies/form_create';
import Filters from 'views/companies/filters';
import updateItem from 'lib/update_item';

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

  handleSearch: function(val) {
    this.setState({filters: {query: val }});
    this.fetch({query: val});
  },

  loadMore: function(offset) {
    this.setState({
      filters: {offset: offset}
    });

    this.fetch({offset: offset});
  },

  loadLess: function(offset) {
    this.setState({ filters: {offset: offset} });
    this.fetch({offset: offset});
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

  updateItem(companyUpdated) {
    let companies = this.state.companies.map(company => {
      if(company.id == companyUpdated.id) {
        return _.extend(company, companyUpdated);
      } else {
        return company;
      }
    });

    return companies;
  },

  update(company) {
    request
    .put(`/api/v1/companies/${company.id}`)
    .send(company)
    .end((err, res) => {
      if(err) return console.log(err.body);
      let companies = updateItem(this.state.companies, res.body, 'id');
      this.setState({
        companies: companies
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
          <Filters
            onSearch={this.handleSearch}
            onNext={this.loadMore}
            onPrev={this.loadLess}
            offset={this.state.filters.offset}
          />

          <div className="companies-list">
            {companyNodes}
          </div>

        </div>

        <div className="col-md-4">
          <div className="panel sidebar__right-fixed">
            <div className="panel-body">
            <div className={this.state.errors ? "alert alert-danger" : ""}>
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
