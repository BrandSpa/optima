'use strict';
import React from 'react';

export default React.createClass({
  render() {
    const {contact} = this.props;
    const {
      name, 
      lastname, 
      email, 
      phone_1, 
      phone_2
    } = contact;
    
    return (
      <tr>
        <td>{name} {lastname}</td>
        <td>{email}</td>
        <td>{phone_1} {phone_2}</td>
        <td>
        <button
          onClick={this.props.onEdit(contact)}
          className="btn btn-default btn-xs">Editar</button>
        </td>
      </tr>
    )
  }
});
