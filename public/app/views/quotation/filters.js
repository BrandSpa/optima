'use strict';
const React = require('react');
const Select = require('components/form_select.jsx');
const statusOptions = require('options/status.json');
const categoryTypeOptions = require('options/category_type.json');
const advisorOptions = require('options/advisors.json');
const typeOptions = require('options/type.json');
const clientOptions = require('options/client_type.json');
const foundUsOptions = require('options/found_us.json');
const productOptions = require('options/products.json');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      quotation: {},
      disabled: false
    }
  },

  getInitialState: function() {
    return {
      filters: {}
    }
  },

  update: function() {
    const filters = {
      type: React.findDOMNode(this.refs.type.refs.select).value,
      type_category: React.findDOMNode(this.refs.type_category.refs.select).value,
      client_type: React.findDOMNode(this.refs.client_type.refs.select).value,
      found_us: React.findDOMNode(this.refs.found_us.refs.select).value,
      offer: React.findDOMNode(this.refs.offer.refs.select).value,
      advisor: React.findDOMNode(this.refs.advisor.refs.select).value,
    };

    this.props.onChange(filters);
    this.setState({filters: filters});
  },

  render: function() {
    const quotation = this.props.quotation;
    console.log(this.props.disabled);
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="form-group col-sm-4">
              <Select
                ref="type"
                options={typeOptions}
                default="Seleccionar tipo"
                onSelectChange={this.update}
                value={quotation.type}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="type_category"
                options={categoryTypeOptions}
                default="Seleccionar categoría de tipo"
                onSelectChange={this.update}
                value={quotation.type_category}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="client_type"
                options={clientOptions}
                default="Seleccionar tipo de cliente"
                onSelectChange={this.update}
                value={quotation.client_type}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="found_us"
                options={foundUsOptions}
                default="Seleccionar como llegó"
                onSelectChange={this.update}
                value={quotation.found_us}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="offer"
                options={productOptions}
                default="Seleccionar ofrecer producto"
                onSelectChange={this.update}
                value={quotation.offer}
                disabled={this.props.disabled}
              />
            </div>

            <div className="form-group col-sm-4">
              <Select
                ref="advisor"
                options={advisorOptions}
                default="Seleccionar asesor"
                onSelectChange={this.update}
                value={quotation.advisor}
                disabled={this.props.disabled}
              />
            </div>

        </div>
      </div>
    );
  }
});