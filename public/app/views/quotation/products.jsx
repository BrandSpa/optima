'use strict';
var React = require('react');
var Product = require('views/quotation/product.jsx');
var FormCreate = require('views/products/form_create.jsx');
var request = require('superagent');
var _ = require('underscore');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      id: null,
      disabled: false
    }
  },

  getInitialState: function() {
    return {
      products: [],
      product: {},
      showForm: false
    }
  },

  componentWillReceiveProps: function(props) {
    this._fetch(props.quotationId);
  },

  _fetch: function(id) {
    request
      .get('/api/v1/products/')
      .query({'quotation_id': id})
      .end(function(err, res) {
        if(err) return console.log(err.response.text);
        this.setState({products: res.body});
      }.bind(this));
  },

  _handleSubmit: function(product) {
    this.setState({product: product});
    if(product.id) {
      this._update();
    } else {
      this._store();
    }
  },

  _update: function(data) {
    var product = this.state.product;

    if(data) {
      product = data;
    }

    request
      .put('/api/v1/products/' + this.state.product.id)
      .send(this.state.product)
      .end(function(err, res) {
        if(err) return console.log(err.body);
       this.setState({
          product: {},
          showForm: false
        });
      }.bind(this));
  },

  _store: function() {
    request
      .post('/api/v1/products')
      .send(this.state.product)
      .end(function(err, res) {
        if(err) return console.log(err.body);
        this.setState({
          products: this.state.products.concat([res.body]),
          product: {},
          showForm: false
        });
      }.bind(this));
  },

  handleDuplicate: function(id, e) {
    e.preventDefault();

    request
    .post('/api/v1/products/' + id  + '/duplicate')
    .end(function(err, res) {
      this.setState({
        products: this.state.products.concat([res.body])
      });
    }.bind(this));
  },

  handleEdit: function(product) {
    this.setState({
      product: product,
      showForm: true
    });
  },

  handleOrder: function(product) {
    var order = true;
    if(product.ordered && product.ordered == true || product.ordered == 1) {
      order = false;
    }

    var product = _.extend(product, {ordered: order});
    this.setState({product: product});

    request
    .put('/api/v1/products/' + product.id)
    .send(product)
    .end(function(err, res) {
      this.setState({product: {}});
    });
  },

  handleDelete: function(id, e) {
     e.preventDefault();
     var products = _.reject(this.state.products, function(company) {
         return company.id === id
    });

    request
    .del('/api/v1/products/' + id)
    .end(function(err, res) {
      this.setState({
        products: products
      });
    }.bind(this));
  },

  showForm: function(e) {
    var show;
    if(this.state.showForm === true) {
      show = false
      this.setState({product: {}});
    } else {
      show = true;
    }
    this.setState({showForm: show});
  },

  render: function() {
    var products = this.state.products;
    var productNodes = products.map(function(product) {
      return (
        <Product
          key={product.id}
          product={product}
          onEdit={this.handleEdit}
          onDuplicate={this.handleDuplicate}
          onOrder={this.handleOrder}
          onDelete={this.handleDelete}
          disabled={this.props.disabled}
        />
      )
    }.bind(this));
    var showTable = false;
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

            <div className={showTable ? "table-responsive" : "hidden"}>
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
        <h5>Producto</h5>
          <FormCreate
            onSubmit={this._handleSubmit}
            product={this.state.product}
            quotationId={this.props.quotationId}
            onClose={this.showForm} />
        </div>
      </div>

      </div>
    );
  }
});
