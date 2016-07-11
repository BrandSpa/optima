'use strict';
import React from 'react';
import Form from 'views/companies/form_create';
import {Typeahead} from 'react-typeahead';
import request from 'superagent';
import _ from 'underscore';

module.exports = React.createClass({

  getInitialState() {
    return {
      companyOptions: [],
      companies: []
    }
  },

  searchCompanies(e) {
    const query = e.target.value;
    request
    .get('/api/v1/companies')
    .query({query})
    .end((err, res) => this.setState({
      companies: res.body,
      companyOptions: _.pluck(res.body, 'name'),
    }));
  },

  continue(company) {
    localStorage.setItem('company', JSON.stringify(company));
    location.hash = `#company/${company.id}/contact/create`;
  },

  storeSelected(e) {
    const name = e;
    const company = _.where(this.state.companies, {name});
    this.continue(company[0]);
  },

  store(company) {
    request
      .post('/api/v1/companies')
      .send(company)
      .end((err, res) => {
        if(err) return console.log(err.response.text);
        console.log("store", res.body);
        // this.continue(res.body);
      });
  },

  update(company) {
    request
      .put(`/api/v1/companies/${company.id}`)
      .send(company)
      .end((err, res) => {
        if(err) return console.log(err.response.text);
        console.log("update", res.body);
        return this.continue(res.body);
      });
  },

  handleSubmit(company) {

    if (company && company.id) {
      return this.update(company);
    } else {
      // return this.store(company);
    }
  },

  render() {
    const classes = {
      input: "form-control autocomplete",
      results: 'list-group',
      listItem: 'list-group-item',
      token: 'btn btn-primary btn-sm'
    };

    return (
      <div>
      <div className="col-md-6">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="form-group">
            <Typeahead
              customClasses={classes}
              options={this.state.companyOptions}
              maxVisible={10}
              placeholder="Buscar empresas"
              onKeyUp={this.searchCompanies}
              onOptionSelected={this.storeSelected}
            />
          </div>

          <hr/>
          <Form onSubmit={this.handleSubmit} />
        </div>
      </div>
      </div>

      </div>
    );
  }
});
