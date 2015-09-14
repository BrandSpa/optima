'use strict';
var React = require('react');
var Product = require('views/quotation/product.jsx');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      products: []
    }
  },

  render: function() {
    var productNodes = this.props.products.map(function(product) {
      return <Product key={product.id} product={product} />
    });

    return (
      <div className="panel panel-default">
        <div className="panel-body">
         <button className="btn btn-primary btn-sm">Agregar producto</button>
         <hr />
          <div className="table-responsive">
          <table className="table table-striped">
            <tr>
              <th>Producto</th>
              <th>Tiempo</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th>Opciones</th>
            </tr>
            <tbody>
              {productNodes}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});
