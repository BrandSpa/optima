'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as quoAction from 'actions/quotations';
import * as action from 'actions/services';
import * as acitivityAction from 'actions/activities';

const quoServices = React.createClass({
  getInitialState() {
    return {
      disableAdd: true,
      serviceId: null,
      quotationId: null,
      optionSelected: ''
    }
  },

  store(id) {
    let service = {service_id: id};
    let quotationId = this.props.quotations.quotation.id;
    this.props.dispatch( quoAction.storeService(quotationId, service) )
    .then(() => this.props.setActivity({message: 'agrego servicio'}) )
    .then(() => this.props.dispatch(action.cleanItems()))
  },

  handleDelete(id) {
    let quotationId = this.props.quotations.quotation.id;
    this.props.dispatch( quoAction.removeService(id, quotationId) );
  },

  fetch(query = {}) {
    this.props.dispatch(action.fetch(query));
  },

  search(e) {
    let val = e.currentTarget.value;
    this.setState({query: val});
    this.fetch({query: val});
  },

  render() {
    const options = this.props.services.items.map(opt => ({
          value: opt.id,
          label: opt.title
    }));

    const serviceNodes = this.props.quotations.services.map(service => 
      <tr key={service.id}>
        <td>{service.title}</td>
        <td>
          <button
            className="btn btn-default btn-sm"
            onClick={this.handleDelete.bind(null, service.id)}
            disabled={this.props.disabled ? true : false}
          >
          Eliminar
          </button>
        </td>
      </tr>
    );

    return (
      <div className="panel">
        <div className="panel-body">
          <div className="row">
            <div className="form-group col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar"
                onChange={this.search}
              />
              <ul className="list-group">
                {this.props.services.items.map((service, i) => 
                  <li className="list-group-item" key={i}>
                    {service.title} <button className="btn btn-primary btn-sm" onClick={this.store.bind(null, service.id)} > Agregar Servicio </button>
                  </li>
                )}
              </ul>

             <br/>
            </div>
             <hr/>
             <div className="table-responsive col-sm-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceNodes}
                </tbody>
              </table>
          </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect(store => store)(quoServices);
