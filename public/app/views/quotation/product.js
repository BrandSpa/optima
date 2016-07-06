'use strict';
const React = require('react');
const FormattedNumber = require('react-intl').FormattedNumber;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      product: {}
    }
  },

  render: function() {
    const product = this.props.product;
    let period = product.period;

    const plural = {
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
              onClick={this.props.onEdit.bind(null, product)}
              disabled={this.props.disabled ? true : false}
            >
              Editar
            </button>
          </li>

          <li>
            <button
              className="btn btn-default btn-xs"
              onClick={this.props.onDuplicate.bind(null, product.id)}
              disabled={this.props.disabled ? true : false}
            >
              Duplicar
            </button>
          </li>

          <li>
            <button
            className="btn btn-default btn-xs"
            onClick={this.props.onOrder.bind(null, product)}
            >{product.ordered ? "Pedir" : "Pedido" }
          </button>
          </li>

          <li>
            <button
              className="btn btn-default btn-xs"
              onClick={this.props.onDelete.bind(null, product.id)}
              disabled={this.props.disabled ? true : false}
            >
              Eliminar
            </button>
          </li>
        </ul>
        </td>
      </tr>
    );
  }
});