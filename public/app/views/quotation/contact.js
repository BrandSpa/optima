'use strict';
import React from 'react';
import request from 'superagent';
import Form from 'views/contacts/form_create';
import Select from 'components/form_select';

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      company: {}
    }
  },

  getInitialState: function() {
    return {
      contact: {},
      contacts: [],
      contactSelected: null,
      showForm: false,
      changeContact: false
    }
  },

  fetchContacts: function() {
    request
      .get('/api/v1/contacts')
      .query({company_id: this.props.company.id})
      .end((err, res) => this.setState({contacts: res.body}));
  },

  componentWillReceiveProps: function(props) {
    // this.fetchContacts();
    this.setState({contact: props.contact});
  },

  handleContact: function(e) {
    let id = e.currentTarget.value;
    this.props.changeContact(id);
    this.setState({
      contactSelected: parseInt(id),
      changeContact: true
    });
  },

  changeContact: function() {
    const contact = this.state.contactSelected;
    this.props.changeContact(contact);
  },

  showForm: function() {
    this.setState({showForm: !this.state.showForm});
  },

  handleSubmit: function(contact) {
    const contactData = {...contact, company_id: this.props.company.id};

    request
      .post('/api/v1/contacts')
      .send(contactData)
      .end((err, res) => {
        if(err) return this.setState({errorMessages: err.response.body});
        this.fetchContacts();
        this.showForm();
      });
  },

  getContacts() {
    let company = this.props.company;
    request
    .get('/api/v1/contacts')
    .query({company_id: company.id})
    .end((err, res) => {
      console.log(res.body);
    });
  },

  show(field) {
    if(field && field != "") {
      return ""
    }

    return "hidden";
  },

  render: function() {
    const contact = this.state.contact;
    const company = this.props.company;
    let contactSelect;

    const contactOptions = this.state.contacts.map(function(contact, i) {
      return {value: contact.id, label: `${contact.name} ${contact.lastname}`}
    });

    let contactNodes = this.state.contacts.map(contact => <li className="list-item">{contact.name}</li>);

    return (
      <div className="panel">
        <div className="panel-body">
          <button className="btn btn-primary btn-sm" onClick={this.showForm}>Agregar contacto</button>
          <hr/>
          <div className={this.state.showForm ? "" : "hidden"}>
            <Form
              size="col-md-12"
              btnText="Guardar"
              onSubmit={this.handleSubmit}
              />
          </div>
          <div className="row"> </div>
          <span className={this.show(company.name)}>{company.name}<hr/></span>
          <b className={this.show(contact.name)}>{contact.name} {contact.lastname}<hr/></b>
          <span className={this.show(contact.email)}>{contact.email}<hr/></span>
          <span className={this.show(contact.phone_1)}>{contact.phone_1}<hr/></span>
          <span className={this.show(contact.phone_2)}> {contact.phone_2}<hr/></span>
          <span className={this.show(contact.mobile_1)}>{contact.mobile_1}<hr/></span>
          <span className={this.show(contact.mobile_2)}> {contact.mobile_2}</span>

          <div className="form-group">
            <Select
              options={contactOptions}
              default="Cambiar Contacto"
              onSelectChange={this.handleContact}
              value={this.state.contactSelected}
            />
          </div>

        </div>
      </div>
    );
  }
});
