'use strict';
import React from 'react';
import Product from 'views/quotation/product';
import FormCreate from 'views/products/form_create';
import * as action from 'actions/products';
import _ from 'underscore';
import cleanObject from 'lib/clean_object';
import {storeActivity} from 'lib/activity';

export default React.createClass({
  getDefaultProps: function() {
    return {
      id: null,
      disabled: false
    }
  },

  getInitialState() {
    return {
      product: {},
      showForm: false,
      errors: []
    }
  },

  _handleSubmit(product) {
    this.setState({product: product});
    if(product.id) {
      this.props.dispatch(action.update(product))
      .then(this.handleStoreReponse);
    } else {
      this.props.dispatch(action.store(product))
      .then(this.handleStoreReponse);
    }
  },

  handleStoreReponse(actionRes) {
    const {payload} = actionRes;
    if(actionRes.type == "PRODUCTS_FAIL") {
      let errors = Object.keys(payload).map(key => payload[key]);
      this.setState({ errors: errors });
    } else {
      this.cleanProduct();
    }
  },

  handleDuplicate: function(id, e) {
    e.preventDefault();

    request
    .post(`/api/v1/products/${id}/duplicate`)
    .end((err, res) => {
      this.setState({
        products: this.state.products.concat([res.body])
      });
    });
  },

  handleEdit: function(product) {
    this.setState({
      product: product,
      showForm: true
    });
  },

  handleOrder: function(product) {
    let order = true;

    if(product.ordered && product.ordered == true || product.ordered == 1) {
      order = false;
    }

    var product = _.extend(product, {ordered: order});
    this.setState({product: product});

    request
    .put(`/api/v1/products/${product.id}`)
    .send(product)
    .end((err, res) => {
      this.setState({product: {}});
    });
  },

  handleDelete: function(id, e) {
     e.preventDefault();
     const products = _.reject(this.state.products, function(company) {
         return company.id === id
    });

    request
    .del(`/api/v1/products/${id}`)
    .end((err, res) => {
      this.setState({
        products: products
      });
    });
  },

  showForm: function(e) {
    let show = !this.state.showForm;
    if(show) this.cleanProduct();
    this.setState({showForm: show});
  },

  cleanProduct() {
    this.setState({
      product: cleanObject(this.state.product),
      errors: []
    });
  },

  render: function() {
    let products = this.props.products.items;
    let productNodes = products.map(product =>
        <Product
          key={product.id}
          product={product}
          onEdit={this.handleEdit}
          onDuplicate={this.handleDuplicate}
          onOrder={this.handleOrder}
          onDelete={this.handleDelete}
          disabled={this.props.disabled}
        />
    );

    let showTable = false;

    if(products.length > 0) {
      showTable = true;
    }

    return (
      <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <button
            className="btn btn-primary btn-sm"
            onClick={this.showForm}
            disabled={this.props.disabled}
          >
            Agregar producto
          </button>

            <div className="table-responsive">
            <hr />
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Tiempo</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productNodes}
                </tbody>
              </table>
            </div>
        </div>
      </div>

      <div className={this.state.showForm ? "panel panel-default" : "hidden"}>
        <div className="panel-body">
          <FormCreate
            onSubmit={this._handleSubmit}
            product={this.state.product}
            quotationId={this.props.quotationId}
            onClose={this.showForm}
            errors={this.state.errors}
            />
        </div>
      </div>

      </div>
    );
  }
});
