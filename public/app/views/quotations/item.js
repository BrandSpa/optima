'use strict';
import React from 'react';
import Tooltip from '../../components/tooltip';

export default React.createClass({
  getDefaultProps() {
    return {
      id: '', 
      status: '', 
      rethink_from: null, 
      advisor: '',
      client_type: '', 
      type: '',
      created_at: '', 
      priority: 1, 
      user: {}, 
      company: {},
      contact: {},
      todos: []
    }
  },

  getInitialState() {
    return {
      showTooltip: false
    }
  },

  toogleTooltip(e) {
    e.preventDefault();
    this.setState({showTooltip: !this.state.showTooltip});
  },

  showStatusCase() {
    const {quotation} = this.props;
    if(quotation.status_cause && quotation.status == 'No efectiva') return quotation.status_cause;
    if(quotation.status_cause && quotation.status == 'No enviada') return quotation.status_cause;
    return '';
  },

  render() {
    const {quotation} = this.props;
    
    const {
      id, 
      status, 
      rethink_from, 
      advisor,
      client_type, 
      type,
      created_at, 
      priority, 
      user, 
      company,
      contact,
      todos
    } = quotation;

    return (
      <tr key={id}>
      <td><a href={`/quotations/${id}`}>{id}</a></td>
      <td>
        <span className={`label label-${status.replace(' ', '_')}`}>
          {status} {this.showStatusCase()}
        </span>
        {rethink_from ? <a className="label label-Replanteada" href={`/quotations/${rethink_from}`}>{rethink_from}</a> : ""}
      </td>
      <td>{advisor}</td>
      <td>{client_type}</td>
      <td>{type}</td>
      <td
        style={{position: 'relative'}} 
        onMouseOver={this.toogleTooltip} 
        onMouseOut={this.toogleTooltip}>
        {company.name}
        <Tooltip show={this.state.showTooltip} >
          <ul className="list-group">
            {company.address ? <li className="list-group-item">{company.address}</li> : ''}
            {company.nit ? <li className="list-group-item">{company.nit}</li> : '' }
            {company.phone ? <li className="list-group-item">{company.phone}</li> : '' }
          </ul>
        </Tooltip>
      </td>
      <td >{`${contact.name} ${contact.lastname}`}</td>
      <td>{created_at} por {user.name}</td>
      <td><span className={`center priority priority--${priority > 0 ? priority : 1}`}></span></td>
      <td>{todos.length}</td>
      <td>
        <a href={`/quotations/${id}/pdf/${id}`} target="_new">PDF</a> •
        <a href={`/quotations/${id}/pdfbn`} target="_blank" > PDF BN</a> •
        <a href={`/quotations/${id}/pdflogos`} target="_blank"> PDF con logos</a>
      </td>
    </tr>
    )
  }
});
