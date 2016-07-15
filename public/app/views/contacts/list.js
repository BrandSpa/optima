'use strict';
import React from 'React';
import Contact from 'views/contacts/contact';

export default React.createClass({
  render() {
    let contacts = this.props.contacts;
    let contactNodes = contacts.map(contact => <Contact key={contact.id} contact={contact} onEdit={this.handleEdit} />);

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
