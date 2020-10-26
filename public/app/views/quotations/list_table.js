'use strict';
import React from 'react';
import Item from './item';

module.exports = React.createClass({
  getDefaultProps() {
    return {
      quotations: []
    }
  },

  render() {
    var quotationNodes = this.props.quotations.length > 0 ? 
      this.props.quotations.map(quotation => 
        <Item key={quotation.id} quotation={quotation} />
      )
    : null;

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="thead">
              <th>#</th>
              <th>Estado</th>
              <th>Asesor</th>
              <th>Cliente</th>
              <th>Tipo</th>
              <th>Empresa</th>
              <th>Contacto</th>
              <th>Creada</th>
              <th>Prioridad</th>
              <th>Tareas</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {quotationNodes}
          </tbody>
        </table>
      </div>
    );
  }
});
