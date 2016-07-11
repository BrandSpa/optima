'use strict';
const React = require('react');
const request = require('superagent');
const Company = require('views/companies/company');
const Form = require('views/companies/form_create');
const Sticky = require('react-sticky');

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
      .put(`/api/v1/companies/${company.id}`)
      .send(company)
      .end((err, res) => {
        if(err) return console.log(err.body);
        this.setState({
          companies: [res.body].concat(this.state.companies)
        });
      });
    } else {
      request
      .post('/api/v1/companies')
      .send(company)
      .end((err, res) => this.setState({
        companies: [res.body].concat(this.state.companies)
      }));
    }
  },

  handleSearch: function() {
    const val = React.findDOMNode(this.refs.query).value;
    this.setState({filters: {query: val }});
    this.fetch({query: val});
  },

  render: function() {
    const companies = this.state.companies;

    const companyNodes = companies.map(company => <Company
      key={company.id}
      company={company}
      onEdit={this.handleEdit}
    />);

    return (
      <div>
        <div className="col-md-12">
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

        <Sticky>
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
        </Sticky>

        <div className="companies-list">
            {companyNodes}
          </div>
      </div>


      </div>

    );
  }
});
