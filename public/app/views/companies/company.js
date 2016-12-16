'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/contacts'; 
import * as companyAction from 'actions/companies'; 
import Form from 'views/contacts/form_create';
import Contact from 'views/companies/contact';

const Company = React.createClass({
  getDefaultProps() {
    return {
      company: {}
    }
  },

  getInitialState() {
    return {
      showForm: false
    }
  },

  handleSubmit(contact) {
    const contactData = {...contact, company_id: this.props.company.id};

    if(contact.id) {
       this.props.dispatch(action.update(contact))
       .then(this.handleSubmitResponse);
    } else {
      this.props.dispatch(action.store(contact))
      .then(this.handleSubmitResponse);
    }
  },

  handleSubmitResponse(actionRes) {
    
    if(actionRes.type !== 'CONTACTS_FAIL') {
      if(actionRes.type == 'CONTACTS_UPDATE') {
        this.props.dispatch(companyAction.updateContact(this.props.company, actionRes.payload));
      }

      this.showForm();
    }
  },

  showForm() {
    this.setState({showForm: !this.state.showForm});
  },

  handleEditContact(contact, e) {
    if(e) e.preventDefault();
    this.showForm();
    this.props.dispatch(action.setContact(contact));
    
  },

  render() {
    const {company} = this.props;
    const {name, nit, address, phone} = company;
    const {showForm} = this.state;

    return (
      <div className="panel">
      <div className="panel-body">
        <table className="table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>NIT</th>
              <th>Dirección</th>
              <th>Telefono</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{nit}</td>
              <td>{address}</td>
              <td>{phone}</td>
              <td><button onClick={this.props.onEdit.bind(null, company)} className="btn btn-sm">Editar</button></td>
            </tr>
          </tbody>
        </table>

        <hr/>

        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefonos</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          {company.contacts.map(contact => 
               <tr>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone_1}</td>
              <td><button className="btn btn-sm" onClick={this.handleEditContact.bind(null, contact)}>Editar</button></td>
            </tr>
          )}
         
          </tbody>
        </table>

        <div className={this.state.showForm ? '' : 'hidden'} >
        <br/>
          <div className={this.props.contacts.errors.length ? "alert alert-danger" : ""}>
            {this.props.contacts.errors}
          </div>
          <Form
            contact={this.props.contacts.contact}
            btnText="Guardar"
            onSubmit={this.handleSubmit}
          />
        </div>
        </div>
      </div>
    );
  }
});

export default connect(props => props)(Company);
