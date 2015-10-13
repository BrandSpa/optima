'use strict';
var React = require('react');
var request = require('superagent');
var _ = require('underscore');
var Contact = require('views/quotation/contact.jsx');
var Filters = require('views/quotation/filters.jsx');
var Edit = require('views/quotation/edit.jsx');
var Status = require('views/quotation/status.jsx');
var Products = require('views/quotation/products.jsx');
var Services = require('views/quotation/services.jsx');
var Comment = require('views/quotation/comment.jsx');
var Mail = require('views/quotation/mails.jsx');
var NoEffective = require('views/quotation/no_effective.jsx');
var NoSend = require('views/quotation/no_send.jsx');
var Times = require('views/quotation/times.jsx');
var Trackings = require('views/quotation/trackings.jsx');
var Activities = require('views/quotation/activity.jsx');
var moment = require('moment');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      quotation: {},
      products: [],
      showComment: false,
      showMail: false,
      showNoEffective: false,
      showNoSend: false,
      disabled: false
    }
  },

  componentDidMount: function() {
    this.fetchQuotation();
  },

  fetchQuotation: function() {
    request
      .get('/api/v1/quotations/' + this.props.params.id)
      .end(function(err, res) {
        if(err) return console.log(err.response.text);
        this.setState({quotation: res.body});
      }.bind(this));
  },

  handleShowComment: function() {
    var show = true;
    if(this.state.showComment) {
      show = false;
    }

    this.setState({showComment: show});
  },

  handleShowMail: function() {
    var show = true;
    if(this.state.showMail) {
      show = false;
    }

    this.setState({showMail: show});
  },

  handleShowNoEffective: function() {
    var show = true;
    if(this.state.showNoEffective) {
      show = false;
    }

    this.setState({showNoEffective: show});
  },

  handleShowNoSend: function() {
    var show = true;
    if(this.state.showNoSend) {
      show = false;
    }

    this.setState({showNoSend: show});
  },

  handleOptions: function(filters) {
    var data = _.extend(this.state.quotation, filters);
    this._update(data);
  },

  handleSaveComment: function(comment) {
    this._update({comment: comment});
    this.setState({showComment: false});
  },

  handleSaveMail: function(mail) {
    this._update(mail);
    this.setState({showMail: false});
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

  handleStatus: function(status) {
    this._update(status);
  },

  changeContact: function(contactId) {
    this._update({contact_id: contactId});
  },

  _update: function(data) {
    request
      .put('/api/v1/quotations/' + this.props.params.id)
      .send(data)
      .end(function(err, res) {
        if(err) console.log(err.body);
        this.setState({quotation: res.body});
      }.bind(this));
      this.handleDisabled();
  },

  handleDisabled: function() {
    var disabled = false;
    var quotation = this.state.quotation;
    console.log(quotation.status);

    // if(quotation.status && quotation.status !== 'Borrador') {
    //   disabled = true;
    // }
    // this.setState({disabled: disabled});
  },

  render: function() {
    var quotation = this.state.quotation;
    var products = this.state.products;

    return (
      <div>
        <div className="col-md-12">
        <h4 style={{margin: "0 0 15px 0"}}>
          Cotización {quotation.id} {quotation.status} <small>{moment(quotation.created_at).fromNow()}</small> <small className={quotation.sent_at ? "" : "hidden"}>enviada {moment(quotation.sent_at).fromNow()}</small>
        </h4>
        </div>

        <div className="col-md-9">

          <Filters
            onChange={this.handleOptions}
            quotation={quotation}
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

          <Status
            quotation={quotation}
            handleOpenNoEffective={this.handleShowNoEffective}
            handleOpenNoSend={this.handleShowNoSend}
            onStatusChange={this.handleStatus}
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

          <Products
            quotationId={quotation.id}
          />

          <Services
            quotationId={quotation.id}
          />

          <Trackings
            quotationId={quotation.id}
          />

        </div>

        <div className="col-md-3">
          <Contact
            contact={quotation.contact}
            company={quotation.company}
            changeContact={this.changeContact}
            />
            <Activities
              quotationId={quotation.id}
            />
        </div>
      </div>
    );
  }
});