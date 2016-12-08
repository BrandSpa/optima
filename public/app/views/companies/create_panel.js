'use strict';
import React from 'react';
import {connect} from 'react-redux';
import request from 'superagent';
import page from 'page';
import * as action from 'actions/companies';
import * as contactAction from 'actions/contacts';
import * as quoAction from 'actions/quotations';
import Form from 'views/companies/form_create';
import ListContacts from 'views/contacts/list';
import Loader from 'components/loader';
import Autocomplete from 'components/autocomplete';

const createPanel = React.createClass({

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
    let query = {query_name: name};
    this.props.dispatch(action.fetch(query));
    this.setState({loading: false});
  },

  continue(company) {
    localStorage.setItem('company', JSON.stringify(company));
    location.hash = `#company/${company.id}/contact/create`;
  },

  storeSelected(result) {
    let query = {company_id: result[0].id};
    this.props.dispatch(contactAction.fetch(query));
    this.props.dispatch(action.cleanItems());
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
    let quo = {company_id: contact.company_id, contact_id: contact.id};
    this.props.dispatch(quoAction.store(quo))
    .then(res => page(`/quotations/${res.payload.id}`) );
  },

  handleSubmitCompany(company) {
    this.props.dispatch(action.store(company));
  },

  render() {
    const classes = {
      input: "form-control autocomplete",
      results: 'list-group',
      listItem: 'list-group-item',
      token: 'btn btn-primary btn-sm'
    };


    return (
      <div className="col-md-6" style={{float: 'none',margin: '0 auto'}}>
        <div className="col-md-12">
        <div className="panel">
          <div className="panel-body">

            <Autocomplete
              collection={this.props.companies.items}
              search={this.searchCompanies}
              selected={this.storeSelected}
              loading={this.state.loading}
            />

            <buttton className="btn btn-default pull-right btn-sm">Nueva Empresa</buttton>
            <div className="col-sm-12">
               <Form btnStoreText="Guardar" onSubmit={this.handleSubmitCompany}/>
            </div>
           
          </div>
        </div>

      <div className="panel" style={this.props.contacts.items.length ? {display: 'block'} : {display: 'none'}}>
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
                {this.props.contacts.items.map(contact =>
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

export default connect(store => { 
  return {companies: store.companies, contacts: store.contacts};
})(createPanel);