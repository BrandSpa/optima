'use strict';
import React from 'React';

export default React.createClass({
  handleEdit(service, e) {
    if(typeof this.props.onEdit == 'function') {
      this.props.onEdit(service);
    }
  },

  render() {
    let service = this.props.service;

    return (
        <tr key={service.id}>
          <td>{service.title}</td>
          <td>{service.price_1}</td>
          <td>{service.price_2}</td>
          <td>
          <button className="btn btn-default btn-sm" onClick={this.handleEdit.bind(this, service)}>Editar</button>
          </td>
      </tr>
    )
  }
});
