'use strict';
var React = require('react');
var Form = require('views/contacts/form_create.jsx');
var _ = require('lodash');
var request = require('superagent');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      company: {},
    }
  },

  getInitialState: function() {
    return {
      contact: {},
      contacts: [],
      showForm: false
    }
  },

  componentDidMount: function(props) {
    var company = this.props.company;
    if(company && company.contacts) {
      this.setState({contacts: company.contacts});
    }
  },

  handleSubmit: function(contact) {
    var contactData = _.extend({company_id: this.props.company.id}, contact);
    if(contact.id) {
      this.updateContact(contactData);
    } else {
      this.storeContact(contactData);
    }
  },

  updateContact: function(contactData) {
    request
      .put('/api/v1/contacts/' + contactData.id)
      .send(contactData)
      .end(function(err, res) {
        if(err) return this.setState({errorMessages: err.response.body});
        this.setState({
          contact: {}
        });
        this.showForm();
      }.bind(this));
  },

  storeContact: function(contactData) {
    request
      .post('/api/v1/contacts')
      .send(contactData)
      .end(function(err, res) {
        if(err) return this.setState({errorMessages: err.response.body});
        this.setState({contacts: this.state.contacts.concat([res.body])});
        this.showForm();
      }.bind(this));
  },

  showForm: function() {
    var show;
    if(this.state.showForm) {
      show = false;
    } else {
      show = true;
    }
    this.setState({showForm: show});
  },

  handleEditContact: function(contact, e) {
    e.preventDefault();
    this.setState({
      contact: contact,
      showForm: true
    });
  },

  handleDeleteContact: function(contact, e) {
    e.preventDefault();
    var id = contact.id;
    request
      .del('/api/v1/contacts/' + id)
      .end(function(err, res) {
        this.setState({
          contacts: _.reject(this.state.contacts, function(contact) { returncontact.id == id} )
        });
      }.bind(this));
  },

  render: function() {
    var company = this.props.company;
    var contactNodes = this.state.contacts.map(function(contact) {
      return (
        <tr key={contact.id}>
          <td>{contact.name} {contact.lastname}</td>
          <td>{contact.email}</td>
          <td>{contact.phone_1} {contact.phone_2}</td>
          <td>
            <button
              onClick={this.handleEditContact.bind(null, contact)}
              className="btn btn-default btn-xs">Editar</button>
          </td>
        </tr>
      );
    }.bind(this));

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

          <tr>
            <td>{company.name}</td>
            <td>{company.nit}</td>
            <td>{company.address}</td>
            <td>{company.phone_1}</td>
            <td> <button onClick={this.props.onEdit.bind(null, company)} className="btn btn-default btn-xs">Editar</button></td>
          </tr>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfonos</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {contactNodes}
          </tbody>

        </table>

        <button className="btn btn-primary btn-sm" onClick={this.showForm}>Agregar contacto</button>
        <div className={this.state.showForm ? "" : "hidden"}>
          <Form
            contact={this.state.contact}
            btnText="Guardar"
            onSubmit={this.handleSubmit}
          />
        </div>
        </div>
      </div>
    );
  }
});