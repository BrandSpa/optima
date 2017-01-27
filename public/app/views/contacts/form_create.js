'use strict';
import React from 'react';
import cleanObject from '../../lib/clean_object';
import Input from '../../components/form_input';
import Select from '../../components/form_select';
import Textarea from '../../components/form_textarea';
import payMethodOptions from '../../options/pay_methods.json';
import foundUsOptions from '../../options/found_us.json';
import howCallOptions from '../../options/how_call.json';
import genderOptions from '../../options/gender.json';

const contactForm = React.createClass({
  getInitialState() {
    return {
      contact: {
        company_id: null,
        comment: ''
      }
    }
  },

  handleChange(field, e) {
    const val = e.currentTarget.value;
    const contact = {...this.state.contact, [field]: val};
    this.setState({contact});
  },

  componentWillReceiveProps(props) {
    if(props.contact && Object.keys(props.contact).length) {
      this.setState({contact: props.contact});
    } else {
      this.setState({contact: cleanObject(this.state.contact)});
    }

    if(props.company_id) {
      this.setState({
        contact: {...this.state.contact, company_id: props.company_id}
      });
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    if(typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.state.contact);
    }
  },

  clean(e) {
    e.preventDefault();
    this.setState({contact: cleanObject(this.state.contact) });
    if(this.props.onCancel) {
      this.props.onCancel();
    }
  },

  render() {
    const contact = this.state.contact;
    const size = this.props.size || 'col-md-6';
    const btnText = this.props.btnText || <i className="fa fa-chevron-right"></i>;

    return (
    <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="name"
              onChange={this.handleChange.bind(null, 'name')}
              value={contact.name}
              placeholder="Nombre"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="lastname"
              onChange={this.handleChange.bind(null, 'lastname')}
              value={contact.lastname}
              placeholder="Apellido"
            />
          </div>

          <div className={"form-group " + size}>
            <Select
              ref="gender"
              options={genderOptions}
              default="Seleccionar género"
              onSelectChange={this.handleChange.bind(null, 'gender')}
              value={contact.gender}
            />
          </div>

          <div className={"form-group " + size}>
             <input
              className="form-control"
              ref="email"
              onChange={this.handleChange.bind(null, 'email')}
              value={contact.email}
              placeholder="Correo"
            />
          </div>

          <div className={"form-group " + size}>
             <input
              className="form-control"
              ref="title"
              onChange={this.handleChange.bind(null, 'title')}
              value={contact.title}
              placeholder="Título"
            />
          </div>

          <div className={"form-group " + size}>
             <input
              className="form-control"
              ref="position"
              onChange={this.handleChange.bind(null, 'position')}
              value={contact.position}
              placeholder="Posición"
            />
          </div>

          <div className={"form-group " + size}>
             <input
              className="form-control"
              ref="phone_1"
              onChange={this.handleChange.bind(null, 'phone_1')}
              value={contact.phone_1}
              placeholder="Teléfono"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="phone_2"
              onChange={this.handleChange.bind(null, 'phone_2')}
              value={contact.phone_2}
              placeholder="Teléfono"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="mobile_1"
              onChange={this.handleChange.bind(null, 'mobile_1')}
              value={contact.mobile_1}
              placeholder="Celular"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="mobile_2"
              onChange={this.handleChange.bind(null, 'mobile_2')}
              value={contact.mobile_2}
              placeholder="Celular"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="fax"
              onChange={this.handleChange.bind(null, 'fax')}
              value={contact.fax}
              placeholder="Fax"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              onChange={this.handleChange.bind(null, 'birthday')}
              value={contact.birthday}
              placeholder="Cumpleaños: 07/07/1980"
            />
          </div>

          <div className={"form-group " + size}>
            <Select
              ref="pay_method"
              options={payMethodOptions}
              default="Seleccionar método de pago"
              onSelectChange={this.handleChange.bind(null, 'pay_method')}
              value={contact.pay_method}
            />
          </div>

          <div className={"form-group " + size}>
            <Select
              ref="found_us"
              options={foundUsOptions}
              default="Seleccionar como nos encontro"
              onSelectChange={this.handleChange.bind(null, 'found_us')}
              value={contact.found_us}
            />
          </div>

          <div className={"form-group " + size}>
            <Select
              ref="who_call"
              options={howCallOptions}
              default="Seleccionar quien llamó"
              onSelectChange={this.handleChange.bind(null, 'who_call')}
              value={contact.who_call}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            onChange={this.handleChange.bind(null, 'comment')}
            value={contact.comment}
            placeholder="Comentario"
          />
        </div>

        <div className="form-group col-md-12">
          <button onClick={this.clean} className="btn btn-default btn-sm pull-left">Cancelar</button>
          <button className="btn btn-primary btn-sm pull-right">{btnText}</button>
        </div>
        
      </form>
    );
  }
});

export default contactForm;