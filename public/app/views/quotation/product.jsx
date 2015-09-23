'use strict';
var React = require('react');
var ReactIntl = require('react-intl');
var FormattedNumber = ReactIntl.FormattedNumber;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      product: {}
    }
  },

  render: function() {
    var product = this.props.product;
    var period = product.period;

    var plural = {
      "Mes": "Meses",
      "Semana": "Semanas",
      "Día": "Días",
      "15 días": "15 días",
      "a 3 días": "a 3 días",
      "Hora": "Horas",
      "Servicio": "Servicios",
      "Venta": "Ventas"
    };

    if(product.lapse > 1) {
     period = plural[product.period]
    }

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.lapse} {period}</td>
        <td>{product.quantity}</td>
        <td><FormattedNumber value={product.price}/></td>
        <td><FormattedNumber value={product.total}/></td>
        <td>
        <ul className="list-inline">
          <li>
            <button
              className="btn btn-default btn-xs"
              onClick={this.props.onEdit.bind(null, product)}>Editar
            </button>
          </li>

          <li>
            <button
              className="btn btn-default btn-xs"
              onClick={this.props.onDuplicate.bind(null, product.id)}>Duplicar
            </button>
          </li>

          <li>
            <button
            className="btn btn-default btn-xs"
            onClick={this.props.onOrder.bind(null, product)}
            >Pedir
          </button>
          </li>

          <li>
            <button
              className="btn btn-default btn-xs"
              onClick={this.props.onDelete.bind(null, product.id)}
              >Eliminar
            </button>
          </li>
        </ul>
        </td>
      </tr>
    );
  }
});