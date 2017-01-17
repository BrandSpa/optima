'use strict';
import React from 'react';
import Editor from 'components/editor';

const serviceForm = React.createClass({
  getInitialState() {
    return {
      service: {
        title: '',
        price_1: '',
        price_2: '',
        text: ''
      }
    }
  },

  componentWillReceiveProps(props) {
    const {service} = props;
    if(Object.keys(service).length) this.setState({service});
  },

  handleSubmit(e) {
    e.preventDefault();
    if(typeof this.props.onSubmit == 'function') {
      this.props.onSubmit(this.state.service);
    }
  },

  handleTextChange(html) {
    let ob = {...this.state.service, text: html};
    this.setState({service: ob});
  },

  handleChange(field, e) {
    let service = {...this.state.service, [field]: e.currentTarget.value};
    this.setState({service});
  },

  handleCancel(e) {
    e.preventDefault();
    this.props.onCancel();
  },

  render() {
    let service = this.state.service;

    console.log('render', service);

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group col-md-12">
          <label htmlFor="">Título</label>
          <input
            onChange={this.handleChange.bind(null, 'title')}
            type="text"
            className="form-control"
            value={service.title}
          />
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="">Contenido</label>
          <Editor
            style={{height: '250px'}}
            value={service.text}
            onChange={this.handleTextChange}
            edit={service.id ? true : false}
          />
        </div>

          <div className="form-group col-md-6">
            <label htmlFor="">Precio 1</label>
            <input
              onChange={this.handleChange.bind(this, 'price_1')}
              type="text"
              className="form-control"
              value={service.price_1}
            />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Precio 2</label>
            <input
              onChange={this.handleChange.bind(this, 'price_2')}
              type="text"
              className="form-control"
              value={service.price_2}
            />
        </div>
        <div className={this.props.errors.length ? "alert alert-danger col-md-12" : "hidden"}>{this.props.errors}</div>
        <button className="btn btn-default btn-sm" onClick={this.handleCancel}>Cancelar</button>
        <button className="btn btn-primary btn-sm pull-right">Guardar</button>
      </form>
    );
  }
});

export default serviceForm;