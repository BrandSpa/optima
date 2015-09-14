'use strict';
var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      product: {}
    }
  },

  render: function() {
    var product = this.props.product;

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.period}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td>{product.total}</td>
        <td>
          <button className="btn btn-default btn-xs">Editar</button>
          <button className="btn btn-default btn-xs">Duplicar</button>
          <button className="btn btn-default btn-xs">Pedir</button>
          <button className="btn btn-default btn-xs">Eliminar</button>
        </td>
      </tr>
    );
  }
});