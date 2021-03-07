'use strict';
import React from 'react';
import {connect} from 'react-redux';
import page from 'page';
import * as action from 'actions/companies';
import * as contactAction from 'actions/contacts';
import * as quoAction from 'actions/quotations';
import FormCompany from 'views/companies/form_create';
import FormContact from 'views/contacts/form_create';
import ListContacts from 'views/contacts/list';
import Loader from 'components/loader';
import Autocomplete from 'components/autocomplete';

const createPanel = React.createClass({

  getInitialState() {
    return {
      companyOptions: [],
      companies: [],
      contacts: [],
      loading: false,
      showCompanyForm: false,
      showContactForm: false
    }
  },

  componentDidMount() {
    this.props.dispatch(action.cleanItems());
    this.props.dispatch(contactAction.cleanItems());
  },

  searchCompanies(name) {
    this.setState({loading: true});
    let query = {query_name: name};
    this.props.dispatch(action.fetch(query));
    this.setState({loading: false});
  },

  storeSelected(company) {
    const {dispatch} = this.props;
    let query = {company_id: company[0].id};

    dispatch(contactAction.fetch(query)).then(() => {
      dispatch(action.setCompany(company[0]));
      dispatch(action.cleanItems());
    });
  },

  createQuotation(contact, e) {
    e.preventDefault();
    let quo = {company_id: contact.company_id, contact_id: contact.id};
    this.props.dispatch(quoAction.store(quo))
    .then(res => page(`/quotations/${res.payload.id}`) );
  },

  handleSubmitCompany(company) {
    const {dispatch} = this.props;
    dispatch(action.store(company))
    .then(this.handleSubmitCompanyResponse)
  },

  handleSubmitCompanyResponse(actionRes) {
    const {dispatch} = this.props;
    if(actionRes.type == "COMPANIES_STORE") {
      dispatch(action.setCompany(actionRes.payload))
      .then(() => this.setState({ showCompanyForm: false, showContactForm: true }));
    }
  },

  handleSubmitContact(contact) {
    this.props.dispatch(contactAction.store(contact));
  },

  toggleCompanyForm(e) {
    if(e) e.preventDefault();

    this.setState({
      showCompanyForm: !this.state.showCompanyForm
    });
  },

  toggleContactForm(e) {
    if(e) e.preventDefault(); 
    this.setState({showContactForm: !this.state.showContactForm});
  },

  render() {
    const classes = {
      input: "form-control autocomplete",
      results: 'list-group',
      listItem: 'list-group-item',
      token: 'btn btn-primary btn-sm'
    };

    return (
      <div className="col-md-6" style={{float: 'none',margin: '0 auto'}}>
        <div className="col-md-12">
        <div className="panel">
          <div className="panel-body">

            <Autocomplete
              collection={this.props.companies.items}
              search={this.searchCompanies}
              selected={this.storeSelected}
              loading={this.state.loading}
            />

            <button
              className="btn btn-default pull-right btn-sm" 
              onClick={this.toggleCompanyForm}
            >
              Nueva Empresa
            </button>

            <div className={this.state.showCompanyForm ?  'col-sm-12' : 'hidden'}>
              <div className={this.props.companies.errors.length ? "alert alert-danger" : ""}>
                {this.props.companies.errors}
              </div>

               <FormCompany 
                btnStoreText="Guardar" 
                btnCleanText="Cancelar"
                onCancel={this.toggleCompanyForm}
                onSubmit={this.handleSubmitCompany}
              />
            </div>
           
          </div>
        </div>

      <div className="panel">
        <div className="panel-heading"><h5>Empresa: <b>{this.props.companies.company.name}</b></h5></div>
        <div className="panel-body">
            <div className={this.state.showContactForm ?  'col-sm-12' : 'hidden'}>

              <div className={this.props.contacts.errors.length ? "alert alert-danger" : ""}>
                {this.props.contacts.errors}
              </div>

              <FormContact
                company_id={this.props.companies.company.id ? this.props.companies.company.id : null}
                btnText="Guardar"
                onSubmit={this.handleSubmitContact}
                onCancel={this.toggleContactForm}
              />
          </div>

          <button
            onClick={this.toggleContactForm}
            className={this.props.companies.company.id ? "btn btn-default pull-right btn-sm" : "hidden"}
          >
          Nuevo Contacto
          </button>

          <div className="row"></div>
      
        <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Opciones</th>
                </tr>
              </thead>

              <tbody>
                {this.props.contacts.items.map(contact =>
                    <tr key={contact.id} className={(contact.blacklist ? 'blacklist': '')}>
                      <td>{`${contact.name} ${contact.lastname}`}</td>
                      <td>{contact.email}</td>
                      <td><button
                          className="btn btn-primary btn-sm"
                          onClick={this.createQuotation.bind(this, contact)}
                          title={(contact.blacklist ?  'Este usuario esta marcado en una lista negra': '')}
                      >Crear Cotización
                        {
                          contact.blacklist ?
                              <span ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                              : ''
                        }
                      </button>
                      </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
      </div>

      </div>
    );
  }
});

export default connect(store => { 
  return {companies: store.companies, contacts: store.contacts};
})(createPanel);