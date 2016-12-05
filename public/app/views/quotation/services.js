'use strict';
import React from 'react';
import request from 'superagent';
import _ from 'lodash';
import Select from 'components/form_select';

module.exports = React.createClass({
  getInitialState() {
    return {
      options: [],
      services: [],
      disableAdd: true,
      serviceId: null,
      quotationId: null,
      optionSelected: ''
    }
  },

  componentDidMount() {
    this.fetchOptions();
  },

  componentWillReceiveProps(props) {
    this.setState(props);
    this.fetchServices(props.quotationId);
  },

  fetchOptions() {
    request
      .get('/api/v1/services')
      .end((err, res) => {
        const options = res.body.map(opt => ({
          value: opt.id,
          label: opt.title
        }));

       this.setState({options});

      });
  },

  fetchServices(id) {
    request
      .get(`/api/v1/quotations/${id}/services`)
      .end((err, res) => this.setState({
      services: res.body
    }));
  },

  handleChange(e) {
    let id = e.currentTarget.value;

    this.setState({
      serviceId: id,
      disableAdd: false
    });
  },

  store(id) {
    request
      .post(`/api/v1/quotations/${this.state.quotationId}/services`)
      .send({service_id: this.state.serviceId})
      .end((err, res) => this.fetchServices(this.state.quotationId));
  },

  handleDelete(id) {
    request
      .del(`/api/v1/services/${id}`)
      .send({quotation_id: this.state.quotationId})
      .end((err, res) => this.setState({
      services: _.reject(this.state.services, service => service.id == id)
    }));
  },

  render() {
    const serviceNodes = this.state.services.map(service => <tr key={service.id}>
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
                options={this.state.options}
                onSelectChange={this.handleChange}
                disabled={this.props.disabled ? true : false}
              />
             <br/>
             <button
              className="btn btn-primary btn-sm"
              disabled={this.state.disableAdd}
              onClick={this.store}>Agregar Servicio</button>
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
