'use strict';
import React from 'react';
import Product from 'views/quotation/product';
import FormCreate from 'views/products/form_create';
import * as action from 'actions/products';
import * as activityAction from 'actions/activities';
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
    this.setState({product});

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
    this.props.dispatch(action.duplicate(id));
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

    var product = {...product, ordered: order};
    this.setState({product});

    this.props.dispatch(action.update(product))
    .then(this.handleStoreReponse);
  },

  handleDelete: function(id, e) {
     e.preventDefault();
     this.props.dispatch(action.remove(id));
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

  dragStart(e) {
    this.dragged = e.currentTarget;
    this.startY =  e.clientY;
  },

  dragOver(e) {
    e.preventDefault();
    e.currentTarget.style.opacity = '.2';
    this.over = e.currentTarget;
    this.direction = '';

    if(this.startY > e.clientY) {
      this.direction = 'up';
    } else {
      this.direction = 'down';
    }
  },

  dragLeave(e) {
    e.currentTarget.style.opacity = '1';
  },

  dragEnd(e) {
    this.dragged.style.display = 'table-row';
    this.over.style.opacity = '1';
    const toPosition = parseInt(this.over.dataset.position);
    const id = this.dragged.dataset.id;

    let products = this.props.products.items
      .map((product, i)=> {  
        let position = i; 
        if(id == product.id) {
          return {...product, position: toPosition};
        }

        position = this.getPosition(position, toPosition);

        return {...product, position};
      })
      .sort(this.sortByPosition);

    products.forEach(product => this.props.dispatch(action.update(product)));
  },

  getPosition(position, toPosition) {
    if(this.direction == 'down') {
      position =  toPosition >= position ? position - 1 : position;
    } else {
      position =  toPosition <= position ? position + 1 : position;
    }

    return position;
  },

  sortByPosition(left, right) {
    let a = left.position;
    let b = right.position;
    if (a > b) return 1;
    if (a < b) return -1;
  },

  render: function() {
    let products = this.props.products.items;
    let productNodes = products.sort(this.sortByPosition).map((product, i) =>
      <Product
        product={product}
        index={i}
        key={product.id}
        onEdit={this.handleEdit}
        onDuplicate={this.handleDuplicate}
        onOrder={this.handleOrder}
        onDelete={this.handleDelete}
        disabled={this.props.disabled}
        onDragEnd={this.dragEnd}
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        onDragLeave={this.dragLeave}
      />
    )

    let showTable = false;

    if(products.length > 0) {
      showTable = true;
    }

    return (
      <div>
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
      <div className="panel panel-default">
        <div className="panel-heading"><h5>Productos</h5></div>
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
      </div>
    );
  }
});
