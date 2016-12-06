'use strict';
import React from 'react';
import cleanObject from 'lib/clean_object';
import Input from 'components/form_input';
import Select from 'components/form_select';
import Textarea from 'components/form_textarea';
import payMethodOptions from 'options/pay_methods.json';
import foundUsOptions from 'options/found_us.json';
import howCallOptions from 'options/how_call.json';
import genderOptions from 'options/gender.json';

module.exports = React.createClass({
  getInitialState() {
    return {
      contact: {}
    }
  },

  handleChange() {
    const ref = this.refs;

    const contact = {...this.state.contact,
      name: ref.name.value,
      lastname: ref.lastname.value,
      gender: ref.gender.refs.select.value,
      email: ref.email.value,
      title: ref.title.value,
      position: ref.position.value,
      phone_1: ref.phone_1.value,
      phone_2: ref.phone_2.value,
      mobile_1: ref.mobile_1.value,
      mobile_2: ref.mobile_2.value,
      fax: ref.fax.value,
      pay_method: ref.pay_method.refs.select.value,
      found_us: ref.found_us.refs.select.value,
      who_call: ref.who_call.refs.select.value,
      comment: ref.comment.refs.textarea.value,
    };

    this.setState({contact});
  },

  componentWillReceiveProps(props) {
    if(Object.keys(props.contact).length) {
      this.setState({contact: props.contact});
    } else {
      this.setState({contact: cleanObject(this.state.contact)});
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    if(typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.state.contact);
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
              onChange={this.handleChange}
              value={contact.name}
              placeholder="Nombre"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="lastname"
              onChange={this.handleChange}
              value={contact.lastname}
              placeholder="Apellido"
            />
          </div>

          <div className={"form-group " + size}>
            <Select
              ref="gender"
              options={genderOptions}
              default="Seleccionar género"
              onSelectChange={this.handleChange}
              value={contact.gender}
            />
          </div>

          <div className={"form-group " + size}>
             <input
              className="form-control"
              ref="email"
              onChange={this.handleChange}
              value={contact.email}
              placeholder="Correo"
            />
          </div>

          <div className={"form-group " + size}>
             <input
              className="form-control"
              ref="title"
              onChange={this.handleChange}
              value={contact.title}
              placeholder="Título"
            />
          </div>

          <div className={"form-group " + size}>
             <input
              className="form-control"
              ref="position"
              onChange={this.handleChange}
              value={contact.position}
              placeholder="Posición"
            />
          </div>

          <div className={"form-group " + size}>
             <input
              className="form-control"
              ref="phone_1"
              onChange={this.handleChange}
              value={contact.phone_1}
              placeholder="Teléfono"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="phone_2"
              onChange={this.handleChange}
              value={contact.phone_2}
              placeholder="Teléfono"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="mobile_1"
              onChange={this.handleChange}
              value={contact.mobile_1}
              placeholder="Celular"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="mobile_2"
              onChange={this.handleChange}
              value={contact.mobile_2}
              placeholder="Celular"
            />
          </div>

          <div className={"form-group " + size}>
            <input
              className="form-control"
              ref="fax"
              onChange={this.handleChange}
              value={contact.fax}
              placeholder="Fax"
            />
          </div>

          <div className={"form-group " + size}>
            <Select
              ref="pay_method"
              options={payMethodOptions}
              default="Seleccionar método de pago"
              onSelectChange={this.handleChange}
              value={contact.pay_method}
            />
          </div>

          <div className={"form-group " + size}>
            <Select
              ref="found_us"
              options={foundUsOptions}
              default="Seleccionar como nos encontro"
              onSelectChange={this.handleChange}
              value={contact.found_us}
            />
          </div>

          <div className={"form-group " + size}>
            <Select
              ref="who_call"
              options={howCallOptions}
              default="Seleccionar quien llamó"
              onSelectChange={this.handleChange}
              value={contact.who_call}
            />
          </div>
        </div>

        <div className="form-group">
          <Textarea
            ref="comment"
            onTextareaChange={this.handleChange}
            value={contact.comment}
            placeholder="Comentario"
          />
        </div>

        <button className="btn btn-default btn-sm pull-left">Cancelar</button>
        <button className="btn btn-primary btn-sm pull-right">{btnText}</button>
      </form>
    );
  }
});
