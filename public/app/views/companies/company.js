'use strict';
const React = require('react');
const Form = require('views/contacts/form_create.jsx');
const _ = require('lodash');
const request = require('superagent');

module.exports = React.createClass({
  getDefaultProps() {
    return {
      company: {},
    }
  },

  getInitialState() {
    return {
      contact: {},
      contacts: [],
      showForm: false
    }
  },

  componentDidMount(props) {
    const company = this.props.company;
    if(company && company.contacts) {
      this.setState({contacts: company.contacts});
    }
  },

  handleSubmit(contact) {
    const contactData = _.extend({company_id: this.props.company.id}, contact);
    if(contact.id) {
      this.updateContact(contactData);
    } else {
      this.storeContact(contactData);
    }
  },

  updateContact(contactData) {
    request
      .put('/api/v1/contacts/' + contactData.id)
      .send(contactData)
      .end((err, res) => {
        if(err) return this.setState({errorMessages: err.response.body});
        this.setState({
          contact: {}
        });
        this.showForm();
      });
  },

  storeContact(contactData) {
    request
      .post('/api/v1/contacts')
      .send(contactData)
      .end((err, res) => {
        if(err) return this.setState({errorMessages: err.response.body});
        this.setState({contacts: this.state.contacts.concat([res.body])});
        this.showForm();
      });
  },

  showForm() {
    let show;
    if(this.state.showForm) {
      show = false;
    } else {
      show = true;
    }
    this.setState({showForm: show});
  },

  handleEditContact(contact, e) {
    e.preventDefault();
    this.setState({
      contact,
      showForm: true
    });
  },

  handleDeleteContact(contact, e) {
    e.preventDefault();
    const id = contact.id;
    request
      .del('/api/v1/contacts/' + id)
      .end((err, res) => this.setState({
      contacts: _.reject(this.state.contacts, contact => returncontact.id == id )
    }));
  },

  render() {
    const company = this.props.company;
    const contactNodes = this.state.contacts.map(contact => <tr key={contact.id}>
                <td>{contact.name} {contact.lastname}</td>
                <td>{contact.email}</td>
                <td>{contact.phone_1} {contact.phone_2}</td>
                <td>
        <button
          onClick={this.handleEditContact.bind(null, contact)}
          className="btn btn-default btn-xs">Editar</button>
      </td>
              </tr>);

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