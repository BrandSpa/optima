'use strict';
import React from 'react';

export default React.createClass({
  getDefaultProps() {
    return {
      contact: {}
    }
  },

  handleClick() {
    const {onEdit, contact} = this.props;
    if (typeof onEdit === 'function') {
      onEdit(contact);
    }
  },

  render() {
    const {
      name, 
      lastname, 
      email, 
      phone_1, 
      phone_2, 
      mobile_1, 
      mobile_2, 
      company
    } = this.props.contact;

    return (
      <tr>
        <td>{name} {lastname}</td>
        <td>{email}</td>
        <td>{phone_1} {phone_2}</td>
        <td>{mobile_1} {mobile_2}</td>
        <td>{company ? company.name : ''}</td>
        <td>
          <button className="btn btn-sm" onClick={this.handleClick}>Editar</button>
        </td>
      </tr>
    );
  }
});

