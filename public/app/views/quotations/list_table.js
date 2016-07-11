'use strict';
import React from 'react';
import Timeago from 'components/timeago';

module.exports = React.createClass({
  getDefaultProps() {
    return {
      quotations: []
    }
  },

  render() {
    var count = this.props.quotations.length;

    var quotationNodes = this.props.quotations.map(function(quotation) {
      return (
        <tr key={quotation.id}>
        <td><a href={`/#quotations/${quotation.id}`}>{quotation.id}</a></td>
        <td>
          <span className={`label label-${quotation.status}`}>
            {quotation.status}
          </span>
          {quotation.rethink_from ? <a className="label label-Replanteada" href={`/#quotations/${quotation.rethink_from}`}>{quotation.rethink_from}</a> : ""}
        </td>
        <td>{quotation.advisor}</td>
        <td>{quotation.client_type}</td>
        <td>{quotation.type}</td>
        <td>{quotation.company.name}</td>
        <td>{`${quotation.contact.name} ${quotation.contact.lastname}`}</td>
        <td><Timeago date={quotation.created_at} /> por {quotation.user.name}</td>
        <td>
          <a href={`/quotations/${quotation.id}/pdf/${quotation.id}`} target="_new">PDF</a>
          <a href={`/quotations/${quotation.id}/pdfbn`} target="_blank" > PDF BN</a>
          <a href={`/quotations/${quotation.id}/pdflogos`} target="_blank"> PDF con logos</a>
        </td>
      </tr>);
    });

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
