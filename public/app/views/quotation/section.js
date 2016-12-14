'use strict';
import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

import * as action from 'actions/quotations';
import * as serviceAction from 'actions/services';
import * as activityAction from 'actions/activities';
import * as productAction from 'actions/products';
import * as trackingAction from 'actions/trackings';
import * as contactAction from 'actions/contacts';

import Contact from 'views/quotation/contact';
import Filters from 'views/quotation/filters';
import Edit from 'views/quotation/edit';
import Status from 'views/quotation/status';
import Products from 'views/quotation/products';
import Services from 'views/quotation/services';
import Comment from 'views/quotation/comment';
import Mail from 'views/quotation/mails';
import NoEffective from 'views/quotation/no_effective';
import NoSend from 'views/quotation/no_send';
import Times from 'views/quotation/times';
import Activities from 'views/quotation/activity';
import Trackings from 'views/quotation/trackings';
import Alert from 'components/alert';



const quotationSection = React.createClass({
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


  fetchQuotation: function() {
    const {params, dispatch} = this.props;

    dispatch(action.fetchOne(params.id))
    .then(actionRes => { 
      let query = {quotation_id: params.id};
      this.handleDisabled(actionRes.payload.status);
      dispatch(productAction.fetch(query));
       dispatch(action.fetchServices(params.id));
      dispatch(activityAction.fetch(query));
      dispatch(trackingAction.fetch(query));
      dispatch(contactAction.fetch(query));
      dispatch(serviceAction.fetch());
    });
  },

  setActivity(message) {
    let {user, quotations} = this.props;

    let activity = {
      message,
      user_id: user.user.id,
      quotation_id: quotations.quotation.id
    };

    return this.props.dispatch(activityAction.store(activity));
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

  handleSaveMail: function(mail) {
    this.setActivity('edito el mail').then(() => {
      this.alert.show();
      this._update(mail);
      this.setState({showMail: false});
    });
  },

  handleServiceApproval: function(serviceApproval) {
    this._update({service_approval: serviceApproval})
  },

  handleSaveNoEffective: function(status) {
    this._update(status);
    this.setState({
      showNoEffective: false,
      showNoSend: false
    });
  },

  handleStatus: function(status, message) {
    this.setActivity(message).then(() => {
      this._update(status);
    });
  },

  changeContact: function(contactId) {
    this._update({contact_id: contactId});
  },

  _update(data) {
    let quo = {...this.props.quotations.quotation, ...data};
    this.props.dispatch(action.update(this.props.params.id, quo))
    .then(this.handleUpdate);
  },

  handleUpdate(actionRes) {
    if(actionRes.type == 'QUOTATIONS_FAIL') {
      console.log(actionRes.type);
      return this.setState({showErrors: true});
    } else {
      return this.handleDisabled(actionRes.payload.status);
    }
  },

  handleDisabled(status) {
    let disabled = false;

    if(status !== 'Borrador') {
      disabled = true;
    }

    this.setState({
      disabled: disabled,
      showErrors: false
    });
  },

  render() {
    let {quotation} = this.props.quotations;
    let {user} = this.props.user;

    return (
      <div>
      <Alert 
        show={this.state.showErrors}
        message={this.props.quotations.errors} 
      />

        <div className="col-md-12">
        <div className="panel">
          <div className="panel-body quo-header">
          <div>
             <h4>
              Cotización {quotation.id} • {quotation.status} •
            </h4>
          </div>
          <div className="quo-header__priority">
            <h5>Prioridad: <div className={`priority priority--${quotation.priority}`}></div></h5>
          </div>
    
          </div>
        </div>

        </div>

        <div className="col-md-9">

          <Filters
            onChange={this.handleOptions}
            quotation={quotation}
            user={user}
            disabled={this.state.disabled}
          />

          <Edit
            quotation={quotation}
            onShowComment={this.handleShowComment}
            onShowMails={this.handleShowMail}
            onServiceApproval={this.handleServiceApproval}
            />

          <Comment
            show={this.state.showComment}
            onClose={this.handleShowComment}
            comment={quotation.comment}
            OnSaveComment={this.handleSaveComment}
            />

          <Mail
            show={this.state.showMail}
            onClose={this.handleShowMail}
            quotation={quotation}
            onSaveMail={this.handleSaveMail}
          />

          <Products
            {...this.props}
            quotationId={quotation.id}
            disabled={this.state.disabled}
          />

          <Services
            quotationId={quotation.id}
            disabled={this.state.disabled}
          />

          <Status
            {...this.props}
            quotation={quotation}
            handleOpenNoEffective={this.handleShowNoEffective}
            handleOpenNoSend={this.handleShowNoSend}
            onStatusChange={this.handleStatus}
            disabled={this.state.disabled}
          />

          <NoEffective
            quotation={quotation}
            show={this.state.showNoEffective}
            onSave={this.handleSaveNoEffective}
          />

          <NoSend
            quotation={quotation}
            show={this.state.showNoSend}
            onSave={this.handleSaveNoEffective}
          />

          <Trackings {...this.props} quotationId={quotation.id} />

        </div>

        <div className="col-md-3">
          <div >

            <Contact
              {...this.props}
              changeContact={this.changeContact}
            />
            <Times quotation={quotation} />
              <Activities
                quotationId={quotation.id}
                activities={this.props.activities.items}
                user={this.props.user.user}
              />

            </div>
        </div>
      </div>
    );
  }
});

export default connect(store => store)(quotationSection);