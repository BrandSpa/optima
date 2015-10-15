'use strict';
var React = require('react');
var Form = require('views/companies/form_create.jsx');
var Typeahead = require('react-typeahead').Typeahead;
var request = require('superagent');
var _ = require('underscore');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      companyOptions: [],
      companies: []
    }
  },

  searchCompanies: function(e) {
    var query = e.target.value;
    request
    .get('/api/v1/companies')
    .query({query: query})
    .end(function(err, res) {
      this.setState({
        companies: res.body,
        companyOptions: _.pluck(res.body, 'name'),
      });
    }.bind(this));
  },

  continue: function(company) {
    localStorage.setItem('company', JSON.stringify(company));
    location.hash = "#company/" + company.id + "/contact/create";
  },

  storeSelected: function(e) {
    var name = e;
    var company = _.where(this.state.companies, {name: name});
    this.continue(company[0]);
  },

  store: function(company) {
    request
      .post('/api/v1/companies')
      .send(company)
      .end(function(err, res) {
        if(err) return console.log(err.response.text);
        console.log("store", res.body);
        // this.continue(res.body);
      }.bind(this));
  },

  update: function(company) {
    request
      .put('/api/v1/companies/' + company.id)
      .send(company)
      .end(function(err, res) {
        if(err) return console.log(err.response.text);
        console.log("update", res.body);
        return this.continue(res.body);
      }.bind(this));
  },

  handleSubmit: function(company) {

    if (company && company.id) {
      return this.update(company);
    } else {
      // return this.store(company);
    }
  },

  render: function() {
    var classes = {
      input: "form-control autocomplete",
      results: 'list-group',
      listItem: 'list-group-item',
      token: 'btn btn-primary btn-sm'
    };

    return (
      <div>
      <div className="col-md-12">
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