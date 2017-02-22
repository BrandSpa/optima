'use strict';
import React from 'react';
import * as action from '../../actions/contacts';
import * as quoAction from '../../actions/quotations';
import Form from '../../views/contacts/form_create';
import Select from '../../components/form_select';
import clearObject from '../../lib/clean_object';

const QuoContact = React.createClass({

  getInitialState() {
    return {
      showForm: false,
      contact: {}
    }
  },

  changeContact(e) {
   let id = e.currentTarget.value;
    this.props.changeContact(id);
  },

  editContact() {
    this.setState({contact: this.props.quotations.contact});
    this.showForm();
  },

  showForm() {
    this.setState({showForm: !this.state.showForm});
  },

  handleCancelForm() {
    this.setState({contact: clearObject(this.state.contact)});
    this.showForm();
  },

  handleSubmit(contact) {
    const contactData = {...contact, company_id: this.props.quotations.company.id};

    if(contactData.id) {
      this.props.dispatch(action.update(contactData))
      .then((res) => this.props.dispatch(quoAction.updateContact(res.payload)))
      .then(() => {
          this.setState({contact: clearObject(this.state.contact)});
         this.showForm();
      });
    } else {
      this.props.dispatch(action.store(contactData)).then(() => {
        this.showForm();
      });
    }
  },

  show(field) {
    if(field && field != "") {
      return ""
    }
    return "hidden";
  },

  render() {
    const {contact, company} = this.props.quotations;
    let contactSelect;

    const contactOptions = this.props.contacts.items.map((contact, i) => {
      return {value: contact.id, label: `${contact.name} ${contact.lastname}`}
    });

    return (
      <div className="panel">
        <div className="panel-body">
          <button 
            className="btn btn-primary btn-sm" 
            onClick={this.showForm}
          >
            Agregar contacto
          </button> <button className="btn btn-primary btn-sm" onClick={this.editContact}>Editar contacto</button>
          <hr/>
          <div className={this.state.showForm ? "" : "hidden"}>
            <Form
              size="col-md-12"
              btnText="Guardar"
              contact={this.state.contact}
              onSubmit={this.handleSubmit}
              onCancel={this.handleCancelForm}
              />
          </div>
          <div className="row"> </div>
          <b className={this.show(company.name)}>{company.name}<hr/></b>
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
              onSelectChange={this.changeContact}
              value=''
            />
          </div>

        </div>
      </div>
    );
  }
});

export default QuoContact;