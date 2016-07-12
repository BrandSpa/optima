'use strict';
const React = require('react');
const Form = require('views/contacts/form_create');
const _ = require('lodash');
const request = require('superagent');
import Contact from 'views/companies/contact';

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
    this.setState({showForm: !this.state.showForm});
  },

  handleEditContact(contact, e) {
    if(e) e.preventDefault();

    // this.setState({
    //   contact,
    //   showForm: true
    // });
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
    let company = this.props.company;

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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{company.name}</td>
              <td>{company.nit}</td>
              <td>{company.address}</td>
              <td>{company.phone}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={this.props.onEdit.bind(null, company)} className="btn btn-primary btn-sm">Editar</button>

        <div className={this.state.showForm ? "" : "hidden"}>
        <br/>
        <div className={this.state.errorMessages ? 'alert alert-danger' : ''}>{this.state.errorMessages ? this.state.errorMessages : ''}</div>
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
