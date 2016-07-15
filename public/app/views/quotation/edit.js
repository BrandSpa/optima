'use strict';
import React from 'react';

module.exports = React.createClass({
  getDefaultProps() {
    return {
      quotation: {
        id: 0
      }
    }
  },

  getInitialState() {
    return {
      quotation: {}
    }
  },

  openComment() {
    this.props.onShowComment();
  },
  openMails() {
    this.props.onShowMails();
  },

  handleServiceApproval() {
    const quotation = this.props.quotation;
    if(quotation.service_approval === 0) {
      this.props.onServiceApproval(1);
    } else {
      this.props.onServiceApproval(0);
    }
  },

  render() {
    const quotation = this.props.quotation;
    let serviceApprovalText = 'Quitar aprobación de servicio';
    if(quotation.service_approval === 0) {
      serviceApprovalText = 'Agregar aprobación de servicio';
    }

    return (
      <div className="panel">
        <div className="panel-body">
          <ul className="list-inline">
            <li>
                <a className="btn btn-default btn-sm" href={`/quotations/${quotation.id}/pdf/${quotation.id}`} target="_new" >PDF</a>
            </li>
            <li><a className="btn btn-default btn-sm" href={`/quotations/${quotation.id}/pdfbn`} target="_blank" > PDF BN</a></li>
            <li>
              <a className="btn btn-default btn-sm" href={`/quotations/${quotation.id}/pdflogos`}  target="_blank"> PDF con logos</a>
            </li>
            <li>
              <a
                href={`/quotations/${quotation.id}/duplicate`}
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
