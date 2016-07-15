'use strict';
import React from 'react';
import Editor from 'components/editor';
import _ from 'underscore';

module.exports = React.createClass({
  getInitialState() {
    return {
      service: {
        title: '',
        text: '',
        price_1: '',
        price_2: '',
      }
    }
  },

  componentWillReceiveProps(props) {
    this.setState({service: props.service});
  },

  handleSubmit(e) {
    e.preventDefault();
    if(typeof this.props.onSubmit == 'function') {
      this.props.onSubmit(this.state.service);
    }
  },

  handleTextChange(html) {
    let ob = _.extend(this.state.service, {text: html});
    this.setState({service: ob});
  },

  handleChange(field, e) {
    let ob = {};
    ob[field] = e.currentTarget.value;
    ob = _.extend(this.state.service, ob);
    this.setState({service: ob});
  },

  render() {
    let service = this.state.service;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group col-md-12">
          <label htmlFor="">Título</label>
          <input
            onChange={this.handleChange.bind(this, 'title')}
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

        <button className="btn btn-default btn-sm">Cancelar</button>
        <button className="btn btn-primary btn-sm pull-right">Guardar</button>
      </form>
    );
  }
});
