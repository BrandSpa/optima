'use strict';
import React from 'react';
import { connect } from 'react-redux';
import * as action from 'actions/solicitudes';
import * as serviceAction from 'actions/services';
import * as activityAction from 'actions/activities';
import * as productAction from 'actions/products';
import * as trackingAction from 'actions/trackings';
import * as contactAction from 'actions/contacts';

import Contact from 'views/solicitud/contact';
import Filters from 'views/solicitud/filters';
import Edit from 'views/solicitud/edit';
import Status from 'views/solicitud/status';
import Products from 'views/solicitud/products';
import Services from 'views/solicitud/services';
import Comment from 'views/solicitud/comment';
import Mail from 'views/solicitud/mails';
import NoEffective from 'views/solicitud/no_effective';
import NoSend from 'views/solicitud/no_send';
import Times from 'views/solicitud/times';
import Trackings from 'views/solicitud/trackings';
import Todos from 'views/todos/section';
import Asesores from 'views/solicitud/asesores'
import Area from 'views/solicitud/areas'
import Alert from 'components/alert';
import Toast from 'lib/alert';

export const SolicitudSection = React.createClass({
  alert: null,

  getInitialState: function() {
    return {
      showComment: false,
      showMail: false,
      showNoEffective: false,
      showNoSend: false,
      showErrors: false,
      disabled: false
    }
  },

  componentWillMount: function() {
    this.fetchQuotation();
  },

  componentWillReceiveProps(props) {
    console.log('uta',this.props.solicitudes)
    if(this.props.solicitudes.solicitud) {
      if(parseInt(props.params.id) !== parseInt(this.props.solicitudes.solicitud.id)) {
        this.fetchQuotation();
      }
    }
  },

  setActivity(message) {
    let {user, solicitudes} = this.props;

    Toast(message);

    let activity = {
      message,
      user_id: user.user.id,
      solicitudes_id: solicitudes.solicitud.id
    };

    return this.props.dispatch(activityAction.store(activity));
  },

  fetchQuotation: function() {
    const {params, dispatch} = this.props;

    dispatch(action.fetchOne(params.id))
    .then(actionRes => { 
      let query = {solicitudes_id: params.id};
      this.handleDisabled(actionRes.payload.status);
      dispatch(productAction.fetch(query));
      dispatch(serviceAction.cleanItems());
      dispatch(action.fetchServices(params.id));
      dispatch(activityAction.fetch(query));
      dispatch(trackingAction.fetch(query));
      dispatch(contactAction.fetch(query));
    });
  },

  handleShowComment: function() {
    let show = true;
    if(this.state.showComment) {
      show = false;
    }

    this.setState({showComment: show});
  },

  handleShowMail() {
    this.setState({showMail: !this.state.showMail});
  },

  handleShowNoEffective() {
    this.setState({showNoEffective: !this.state.showNoEffective});
  },

  handleShowNoSend() {
    this.setState({showNoSend: !this.state.showNoSend});
  },
  
  handleOptions(filters, message) {
    let {quotations} = this.props;
    
    this.setActivity(message).then(() => {
      const data = {...quotations.quotation, ...filters};
      this._update(data);
    }) 
  },

  handleSaveComment: function(comment) {
    this.setActivity('edito el comentario').then(() => {
      this._update({comment: comment});
      this.setState({showComment: false});
    });
  },

  handleSaveMail(mail) {
    this.setActivity('edito el mail').then(() => {
      this._update(mail);
      this.setState({showMail: false});
    });
  },

  handleSendMail(mail) {
    const {id} = this.props.quotations.quotation;
    let quo = {...this.props.quotations.quotation, ...mail};

    return this.props.dispatch(action.update(quo))
      .then(() => this.props.dispatch(action.sendMail(id)))
      .then(res => {
        if(res.type == 'SOLICITUDES_FAIL') {
          console.log('inside');
          Toast(res.payload[0]);
          return;
        }

        this.setActivity('envio el mail');
        return res;
      });
  },

  handleServiceApproval(serviceApproval) {
    this._update({service_approval: serviceApproval})
  },

  handleSaveNoEffective(status) {
    let message = `Cambio estado a ${status.status}`;
    this.setActivity(message).then(() => {
      this._update(status);
        this.setState({
          showNoEffective: false,
          showNoSend: false
        });
    });
    
  },

  handleStatus(status, message) {
    this.setActivity(message).then(() => {
      this._update(status);
    });
  },

  changeContact(contactId) {
    this._update({contact_id: contactId});
  },

  changeAsesor(asesorId) {
    this._update({asesor_id: asesorId});
  },

  changeArea(areaId) {
    this._update({area_id: areaId});
  },

  _update(data) {
    let quo = {...this.props.solicitudes.solicitud, ...data};
    this.props.dispatch(action.update(quo))
    .then(this.handleUpdate);
  },

  handleUpdate(actionRes) {
    if(actionRes.type == 'QUOTATIONS_FAIL') {
      return this.setState({showErrors: true});
    } else {
      // return this.handleDisabled(actionRes.payload.status);
    }
  },

  handleDisabled(status) {
    let disabled = false;

    // if(status == 'Efectiva') {
    //   disabled = true;
    // } else {
    //   disabled = false;
    // }

    this.setState({
      showErrors: false,
      errors: [],
      disabled
    });
  },

  handlePriority(priority, e) {
    e.preventDefault();
    this._update({priority});
  },

  render() {
    let { solicitud } = this.props.solicitudes;
    let { user } = this.props.user;

    return (
      solicitud ? 
      <div id={`solicitud-${solicitud.id}`}>
      
      <div className="col-md-12">
        <div className="panel">
          <div className="panel-body quo-header">
          <div>
             <h4>
              Solicitud {solicitud.id}  {solicitud.rethink_from ? <a href={`/solicituds/${solicitud.rethink_from}`}>replanteada de {solicitud.rethink_from}</a> : ""} • {solicitud.status} •
            </h4>
          </div>
          <div className="quo-header__priority">
            <h5>
              Prioridad:
              <a 
                className="btn btn-sm" 
                onClick={this.handlePriority.bind(null, '1')} 
                disabled={solicitud.priority == 1 ? true : false}
              >
                <div 
                  className={solicitud.priority == 1 ? 'priority priority--1 priority--active' : 'priority priority--1 '}
                ></div>
              </a>
              <a
                className="btn btn-sm" 
                onClick={this.handlePriority.bind(null, '2')} 
                disabled={solicitud.priority == 2 ? true : false}
              >
                <div className={solicitud.priority == 2 ? 'priority priority--2 priority--active' : 'priority priority--2 '}></div>
              </a>
              <a
                className="btn btn-sm" 
                onClick={this.handlePriority.bind(null, '3')} 
                disabled={solicitud.priority == 3 ? true : false}
              >
               <div className={solicitud.priority == 3 ? 'priority priority--3 priority--active' : 'priority priority--3 '}></div>
              </a> 
            </h5>
          </div>
    
          </div>
        </div>

        </div>

        <div className="col-md-9">

          <Filters
            onChange={this.handleOptions}
            solicitud={solicitud}
            user={user}
            disabled={this.state.disabled}
          />

          <Edit
            solicitud={solicitud}
            onShowComment={this.handleShowComment}
            onShowMails={this.handleShowMail}
            onServiceApproval={this.handleServiceApproval}
            />

          <Comment
            show={this.state.showComment}
            onClose={this.handleShowComment}
            comment={solicitud.comment}
            OnSaveComment={this.handleSaveComment}
            />

          <Mail
            show={this.state.showMail}
            onClose={this.handleShowMail}
            solicitud={solicitud}
            onSaveMail={this.handleSaveMail}
            onSendMail={this.handleSendMail}
          />

          <Products
            {...this.props}
            solicitudId={solicitud.id}
            disabled={this.state.disabled}
          />

          <Services
            {...this.props}
            solicitudId={solicitud.id}
            disabled={this.state.disabled}
            setActivity={this.setActivity}
          />

          <Status
            {...this.props}
            solicitud={solicitud}
            handleOpenNoEffective={this.handleShowNoEffective}
            handleOpenNoSend={this.handleShowNoSend}
            onStatusChange={this.handleStatus}
            disabled={this.state.disabled}
          />

          <NoEffective
            solicitud={solicitud}
            show={this.state.showNoEffective}
            onSave={this.handleSaveNoEffective}
          />

          <NoSend
            solicitud={solicitud}
            show={this.state.showNoSend}
            onSave={this.handleSaveNoEffective}
          />

          <Trackings 
            {...this.props} 
            solicitudId={solicitud.id} 
            onStatusChange={this.handleStatus}
          />
          {
            false ? 
             <div id={`todos-${solicitud.id}`}>
             <Todos solicitudes_id={this.props.params.id} />
            </div>

            : null
          }
         
        
        </div>

        <div className="col-md-3">

            <Contact
              {...this.props}
              changeContact={this.changeContact}
            />

            <Asesores 
            {...this.props}
            solicitud={solicitud} 
            changeAsesor={this.changeAsesor}
            />

            <Area  
            {...this.props}
            solicitud={solicitud} 
            changeArea={this.changeArea}
            />

            <Times solicitud={solicitud} />

        </div>
      </div>
      : null
    );
  }
});

export default connect(store => store)(SolicitudSection);