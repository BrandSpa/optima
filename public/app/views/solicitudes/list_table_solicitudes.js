'use strict';
import React from 'react';
import Item from './item';

module.exports = React.createClass({
  getDefaultProps() {
    return {
      solicitudes: []
    }
  },

  render() {
    var solicitudNodes = this.props.solicitudes.map(solicitud => 
      <Item key={solicitud.id} solicitud={solicitud} />
    );

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
              <th>Ubicación</th>
              <th>Creada</th>
              <th>Prioridad</th>
              <th>Asesor Asignado</th>
              <th>Pendiente por</th>
            </tr>
          </thead>
          <tbody>
            {solicitudNodes}
          </tbody>
        </table>
      </div>
    );
  }
});
