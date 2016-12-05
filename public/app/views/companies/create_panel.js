'use strict';
import React from 'react';
import request from 'superagent';
import _ from 'underscore';
import page from 'page';
import Form from 'views/companies/form_create';
import ListContacts from 'views/contacts/list';
import Loader from 'components/loader';
import Autocomplete from 'components/autocomplete';

module.exports = React.createClass({

  getInitialState() {
    return {
      companyOptions: [],
      companies: [],
      contacts: [],
      loading: false
    }
  },

  searchCompanies(name) {
    this.setState({loading: true});

      request
      .get('/api/v1/companies')
      .query({query_name: name})
      .end((err, res) => this.setState({
        companies: res.body,
        loading: false
        })
      )
  },

  continue(company) {
    localStorage.setItem('company', JSON.stringify(company));
    location.hash = `#company/${company.id}/contact/create`;
  },

  storeSelected(result) {
    request
    .get('/api/v1/contacts')
    .query({company_id: result[0].id})
    .end((err, res) => {
      this.setState({contacts: res.body});
    });
  },

  store(company) {
    request
      .post('/api/v1/companies')
      .send(company)
      .end((err, res) => {
        if(err) return console.log(err.response.text);
        console.log("store", res.body);
      });
  },

  createQuotation(contact, e) {
    e.preventDefault();
    request
    .post('/api/v1/quotations')
    .send({company_id: contact.company_id, contact_id: contact.id})
    .end((err, res) => {
      page(`/quotations/${res.body.id}`);
    });
  },

  render() {
    const classes = {
      input: "form-control autocomplete",
      results: 'list-group',
      listItem: 'list-group-item',
      token: 'btn btn-primary btn-sm'
    };

    let companiesOptions = this.state.companyOptions.map((name, i) =>
      <li key={i} className="list-group-item" onClick={this.storeSelected.bind(this, name)}>
        {name}
      </li>
    );

    return (
      <div className="col-md-6" style={{float: 'none',margin: '0 auto'}}>
        <div className="col-md-12">
        <div className="panel">
          <div className="panel-body">

            <Autocomplete
              collection={this.state.companies}
              search={this.searchCompanies}
              selected={this.storeSelected}
              loading={this.state.loading}
            />

            <buttton className="btn btn-default pull-right btn-sm">Nueva Empresa</buttton>
          </div>
        </div>

      <div className="panel" style={this.state.contacts.length ? {display: 'block'} : {display: 'none'}}>
        <div className="panel-body">
        <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Opciones</th>
                </tr>
              </thead>

              <tbody>
                {this.state.contacts.map(contact =>
                  <tr key={contact.id}>
                    <td>{`${contact.name} ${contact.lastname}`}</td>
                    <td>{contact.email}</td>
                    <td><button className="btn btn-primary btn-sm" onClick={this.createQuotation.bind(this, contact)}>Crear Cotización</button></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <buttton className="btn btn-default pull-right btn-sm">Nuevo Contacto</buttton>
        </div>
      </div>
      </div>

      </div>
    );
  }
});
