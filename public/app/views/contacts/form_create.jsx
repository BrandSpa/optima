'use strict';
var React = require('react');
var _ = require('underscore');
var Input = require('components/form_input.jsx');
var Select = require('components/form_select.jsx')
var Textarea = require('components/form_textarea.jsx')
var payMethodOptions = require('options/pay_methods.json');
var foundUsOptions = require('options/found_us.json');
var howCallOptions = require('options/how_call.json');
var genderOptions = require('options/gender.json');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      contact: {}
    }
  },

  handleChange: function() {
    var ref = this.refs;

    var contact = _.extend(this.state.contact, {
      name: React.findDOMNode(ref.name).value,
      lastname: React.findDOMNode(ref.lastname).value,
      gender: React.findDOMNode(ref.gender.refs.select).value,
      email: React.findDOMNode(ref.email).value,
      title: React.findDOMNode(ref.title).value,
      position: React.findDOMNode(ref.position).value,
      phone_1: React.findDOMNode(ref.phone_1).value,
      phone_2: React.findDOMNode(ref.phone_2).value,
      mobile_1: React.findDOMNode(ref.mobile_1).value,
      mobile_2: React.findDOMNode(ref.mobile_2).value,
      fax: React.findDOMNode(ref.fax).value,
      pay_method: React.findDOMNode(ref.pay_method.refs.select).value,
      found_us: React.findDOMNode(ref.found_us.refs.select).value,
      how_call: React.findDOMNode(ref.how_call.refs.select).value,
      comment: React.findDOMNode(ref.comment.refs.textarea).value,
    });

    this.setState({contact: contact});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state.contact);
    this.props.onSubmit(this.state.contact);
  },

  render: function() {
    var contact = this.state.contact;

    return (
    <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="form-group col-lg-6">
            <Input
              ref="name"
              onInputChange={this.handleChange}
              value={contact.name}
              placeholder="Nombre"
            />
          </div>

          <div className="form-group col-lg-6">
            <Input
              ref="lastname"
              onInputChange={this.handleChange}
              value={contact.lastname}
              placeholder="Apellido"
            />
          </div>

          <div className="form-group col-lg-6">
            <Select
              ref="gender"
              options={genderOptions}
              default="Seleccionar género"
              onSelectChange={this.handleChange}
              value={contact.gender}
            />
          </div>

          <div className="form-group col-lg-6">
             <Input
              ref="email"
              onInputChange={this.handleChange}
              value={contact.email}
              placeholder="Correo"
            />
          </div>

          <div className="form-group col-lg-6">
             <Input
              ref="title"
              onInputChange={this.handleChange}
              value={contact.title}
              placeholder="Título"
            />
          </div>

          <div className="form-group col-lg-6">
             <Input
              ref="position"
              onInputChange={this.handleChange}
              value={contact.position}
              placeholder="Posición"
            />
          </div>

          <div className="form-group col-lg-6">
             <Input
              ref="phone_1"
              onInputChange={this.handleChange}
              value={contact.phone_1}
              placeholder="Teléfono"
            />
          </div>

          <div className="form-group col-lg-6">
            <Input
              ref="phone_2"
              onInputChange={this.handleChange}
              value={contact.phone_2}
              placeholder="Teléfono"
            />
          </div>

          <div className="form-group col-lg-6">
            <Input
              ref="mobile_1"
              onInputChange={this.handleChange}
              value={contact.mobile_1}
              placeholder="Celular"
            />
          </div>

          <div className="form-group col-lg-6">
            <Input
              ref="mobile_2"
              onInputChange={this.handleChange}
              value={contact.mobile_2}
              placeholder="Celular"
            />
          </div>

          <div className="form-group col-lg-6">
            <Input
              ref="fax"
              onInputChange={this.handleChange}
              value={contact.fax}
              placeholder="Fax"
            />
          </div>

          <div className="form-group col-lg-6">
            <Select
              ref="pay_method"
              options={payMethodOptions}
              default="Seleccionar método de pago"
              onSelectChange={this.handleChange}
              value={contact.pay_method}
            />
          </div>

          <div className="form-group col-lg-6">
            <Select
              ref="found_us"
              options={foundUsOptions}
              default="Seleccionar como nos encontro"
              onSelectChange={this.handleChange}
              value={contact.found_us}
            />
          </div>

          <div className="form-group col-lg-6">
            <Select
              ref="how_call"
              options={howCallOptions}
              default="Seleccionar quien llamó"
              onSelectChange={this.handleChange}
              value={contact.how_call}
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
        <button className="btn btn-primary pull-right"><i className="fa fa-chevron-right"></i></button>
      </form>
    );
  }
});