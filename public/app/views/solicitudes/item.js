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
      found_us: ''
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
    const {solicitud} = this.props;
    if(solicitud.status_cause && solicitud.status == 'No efectiva') return solicitud.status_cause;
    if(solicitud.status_cause && solicitud.status == 'No enviada') return solicitud.status_cause;
    return '';
  },

  render() {
    const {solicitud} = this.props;
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
      found_us
    } = solicitud;

    return (
      <tr key={id}>
      <td><a href={`/solicitudes/${id}`}>{id}</a></td>
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
      <td >{`${found_us ? found_us : ''}`}</td>
      <td>{created_at} por {user.name}</td>
      <td><span className={`center priority priority--${priority > 0 ? priority : 1}`}></span></td>
      <td>
        
      </td>
      <td>
        
      </td>
    </tr>
    )
  }
});
