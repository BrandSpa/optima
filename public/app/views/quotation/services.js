'use strict';
import React from 'react';
import {connect} from 'react-redux';
import Select from 'components/form_select';
import * as quoAction from 'actions/quotations';

const quoServices = React.createClass({
  getInitialState() {
    return {
      disableAdd: true,
      serviceId: null,
      quotationId: null,
      optionSelected: ''
    }
  },

  handleChange(e) {
    let id = e.currentTarget.value;

    this.setState({
      optionSelected: id,
      serviceId: id,
      disableAdd: false
    });
  },

  store() {
    let service = {service_id: this.state.serviceId};
    let quotationId = this.props.quotations.quotation.id;
    this.props.dispatch( quoAction.storeService(quotationId, service) );
  },

  handleDelete(id) {
    let quotationId = this.props.quotations.quotation.id;
    this.props.dispatch( quoAction.removeService(id, quotationId) );
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
             <Select
                placeholder="Servicios"
                value={this.state.optionSelected}
                options={options}
                onSelectChange={this.handleChange}
                disabled={this.props.disabled ? true : false}
              />
             <br/>
            <button
              className="btn btn-primary btn-sm"
              disabled={this.state.disableAdd}
              onClick={this.store}
            >
              Agregar Servicio
            </button>
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
