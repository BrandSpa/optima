'use strict';
import React from 'react';
import Item from 'views/services/item';

module.exports = React.createClass({

  getDefaultProps() {
    return {
      services: []
    }
  },

  handleEdit(service) {
    this.props.onEdit(service);
  },

  render() {
    var serviceNodes = this.props.services.map(service =>
      <Item
        key={service.id}
        service={service}
        onEdit={this.handleEdit}
      />
    );

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Precio 1</th>
              <th>Precio 2</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {serviceNodes}
          </tbody>

        </table>
      </div>
    );
  }
});
