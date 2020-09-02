'use strict';
import React from 'react';
import Select from 'components/form_select';
import categoryTypeOptions from 'options/category_type.json';
import advisorOptions from 'options/advisors.json';
import typeOptions from 'options/type.json';
import clientOptions from 'options/client_type.json';
import foundUsOptions from 'options/found_us.json';
import productOptions from 'options/products.json';

const messages = {
  type: 'cambio tipo',
  type_category: 'cambio categoría',
  client_type: 'cambio tipo de cliente',
  found_us: 'cambio como llegó',
  offer: 'cambio ofrecer producto',
  advisor: 'cambio asesor',
};

const quoFilters = React.createClass({
  getDefaultProps: function() {
    return {
      solicitud: {},
      disabled: false
    }
  },

  getInitialState: function() {
    return {
      filters: {}
    }
  },

  handleChange(field = '', e) {
    let val =  e.currentTarget.value;
    let filters = {...this.state.filters, [field]: val};
    let message = messages[field];
    this.props.onChange(filters, message);
    this.setState({filters});
  },

  update: function() {
    const filters = {
      type: 'cambio tipo de cotización',
      type_category: this.refs.type_category.refs.select.value,
      client_type: this.refs.client_type.refs.select.value,
      found_us: this.refs.found_us.refs.select.value,
      offer: this.refs.offer.refs.select.value,
      advisor: this.refs.advisor.refs.select.value,
    };

    this.props.onChange(filters);
    this.setState({filters: filters});
  },

  render: function() {
    const solicitud = this.props.solicitud;

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="form-group col-sm-4">
              <Select
                ref="type"
                options={typeOptions}
                default="Seleccionar tipo"
                onSelectChange={this.handleChange.bind(null, 'type')}
                value={solicitud.type}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="type_category"
                options={categoryTypeOptions}
                default="Seleccionar categoría de tipo"
                onSelectChange={this.handleChange.bind(null, 'type_category')}
                value={solicitud.type_category}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="client_type"
                options={clientOptions}
                default="Seleccionar tipo de cliente"
                onSelectChange={this.handleChange.bind(null, 'client_type')}
                value={solicitud.client_type}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="found_us"
                options={foundUsOptions}
                default="Seleccionar como llegó"
                onSelectChange={this.handleChange.bind(null, 'found_us')}
                value={solicitud.found_us}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="offer"
                options={productOptions}
                default="Seleccionar ofrecer producto"
                onSelectChange={this.handleChange.bind(null, 'offer')}
                value={solicitud.offer}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="advisor"
                options={advisorOptions}
                default="Seleccionar asesor"
                onSelectChange={this.handleChange.bind(null, 'advisor')}
                value={solicitud.advisor}
                disabled={this.props.disabled}
              />
            </div>

        </div>
      </div>
    );
  }
});

export default quoFilters;