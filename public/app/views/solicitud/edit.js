'use strict';
import React from 'react';

const QuoEdit = React.createClass({
  getDefaultProps() {
    return {
      solicitud: {
        id: 0
      }
    }
  },

  getInitialState() {
    return {
      solicitud: {}
    }
  },

  openComment() {
    this.props.onShowComment();
  },
  openMails() {
    this.props.onShowMails();
  },

  handleServiceApproval() {
    const solicitud = this.props.solicitud;
    if(solicitud.service_approval === 0) {
      this.props.onServiceApproval(1);
    } else {
      this.props.onServiceApproval(0);
    }
  },

  render() {
    const solicitud = this.props.solicitud;
    let serviceApprovalText = 'Quitar aprobación de servicio';
    if(solicitud.service_approval === 0) {
      serviceApprovalText = 'Agregar aprobación de servicio';
    }

    return (
      <div className="panel">
        <div className="panel-body">
          <ul className="list-inline">
            <li>
              <a
                className="btn btn-default btn-sm"
                href={`/solicitudes/${solicitud.id}/pdf/${solicitud.id}`}
                target="_new" >PDF</a>
            </li>
            <li>
              <a
              className="btn btn-default btn-sm"
              href={`/solicitudes/${solicitud.id}/pdfbn`}
              target="_blank" > PDF BN</a></li>
            <li>
              <a
                className="btn btn-default btn-sm"
                href={`/solicitudes/${solicitud.id}/pdflogos`}
                target="_blank"> PDF con logos</a>
            </li>
            <li>
              <a
                href={`/solicitudes/${solicitud.id}/duplicate`}
                className="btn btn-default btn-sm">Duplicar</a>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.openComment}>
              Editar Comentario
              </button>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.openMails}
              >
                Editar Mail
              </button>
              </li>
              <li>
              <a
                href={`/solicitudes/${solicitud.id}/toquotation`}
                className="btn btn-default btn-sm">Crear cotización</a>
            </li>
              <li>
                <button
                  className="btn btn-default btn-sm"
                  onClick={this.handleServiceApproval}
                >
                {serviceApprovalText}
                </button>
              </li>
            </ul>
        </div>
      </div>
    );
  }
});

export default QuoEdit;
