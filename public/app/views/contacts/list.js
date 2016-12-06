'use strict';
import React from 'react';
import Contact from 'views/contacts/contact';

export default React.createClass({
  render() {
    let {contacts} = this.props;
    let contactNodes = contacts.map(contact => 
      <Contact key={contact.id} contact={contact} onEdit={this.props.handleEdit} />
    );

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfonos</th>
              <th>Celulares</th>
              <th>Empresa</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {contactNodes}
          </tbody>
        </table>
      </div>
    )
  }
});


