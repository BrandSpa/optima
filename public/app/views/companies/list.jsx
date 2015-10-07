'use strict';
var React = require('react');
var request = require('superagent');
var Company = require('views/companies/company.jsx');
var Form = require('views/companies/form_create.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      companies: [],
      company: {}
    }
  },

  componentDidMount: function() {
    request
    .get('/api/v1/companies')
    .end(function(err, res) {
      this.setState({companies: res.body});
    }.bind(this));
  },

  handleEdit: function(company, e) {
    e.preventDefault();
    this.setState({company: company});
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
            <input type="text" className="form-control" placeholder="Buscar"/>
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
              />
          </div>
        </div>

      </div>
      </div>

    );
  }
});