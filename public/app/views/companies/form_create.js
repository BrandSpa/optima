'use strict';
import React from 'react';
import cleanObject from '../../lib/clean_object';
import Select from '../../components/form_select';
import sectors from '../../options/sectors.json';
import cities from '../../options/cities.json';
import clientOptions from "../../options/client_type.json";

const CompaniesForm = React.createClass({
  getInitialState() {
    return {
      company: {}
    }
  },

  componentDidMount() {
    if (this.props.company && Object.keys(this.props.company).length) {
      company = this.props.company;
      this.setState({company});
    }    
  },

  componentWillReceiveProps(props) {
    const {company} = props;

    if(company && Object.keys(company).length) {
      this.setState({company});
    }
  },

  clean(e) {
    e.preventDefault();

    this.setState({company: cleanObject(this.state.company) });
    if(this.props.onCancel) {
      this.props.onCancel();
    }
  },

  handleChange(field, e) {
    const {refs} = this;
    const val = e.currentTarget.value;
    const company = {...this.state.company, [field]: val};
    this.setState({company});
  },

  handleSubmit(e) {
    e.preventDefault();
    const company = this.state.company;
    if(typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(company);
    }
  },

  render() {
    let company = this.state.company;
    let btnCleanText = this.props.btnCleanText || 'limpiar';
    let btnStoreText = this.props.btnStoreText || (<i className="fa fa-chevron-right"></i>);

    return (
     <form onSubmit={e => e.preventDefault() }>
        <div className="row">

         <div className="form-group col-sm-6">
          <input
            className="form-control"
            ref="name"
            onChange={this.handleChange.bind(null, 'name')}
            value={company.name}
            placeholder="Razón social"
          />
         </div>

         <div className="form-group col-sm-6">
          <input
            className="form-control"
            ref="nit"
            onChange={this.handleChange.bind(null, 'nit')}
            value={company.nit}
            placeholder="Nit"
          />
         </div>

         <div className="form-group col-sm-6">
          <Select
            ref="sector"
            options={sectors}
            default="Seleccionar sector"
            onSelectChange={this.handleChange.bind(null, 'sector')}
            value={company.sector}
          />
         </div>

         <div className="form-group col-sm-6">
          <Select
            ref="city"
            options={cities}
            default="Seleccionar ciudad"
            onSelectChange={this.handleChange.bind(null, 'city')}
            value={company.city}
          />
         </div>

        </div>
       <div className="form-group">
       <input
        className="form-control"
          ref="address"
          onChange={this.handleChange.bind(null, 'address')}
          value={company.address}
          placeholder="Dirección"
        />
       </div>

       <div className="row">
         <div className="form-group col-lg-6">
           <input
            className="form-control"
              ref="phone"
              onChange={this.handleChange.bind(null, 'phone')}
              value={company.phone}
              placeholder="Teléfono"
            />
         </div>

         <div className="form-group col-lg-6">
            <input
              className="form-control"
              ref="web"
              onChange={this.handleChange.bind(null, 'web')}
              value={company.web}
              placeholder="Web"
            />
         </div>
       </div>
         <div className="form-group">
             <Select
                 ref="client_type"
                 options={clientOptions}
                 default="Seleccionar tipo de cliente"
                 onSelectChange={this.handleChange.bind(null, 'client_type')}
                 value={company.client_type}
             />
         </div>

        <div className="form-group">
          <textarea
            className="form-control"
            ref="comment"
            onChange={this.handleChange.bind(null, 'comment')}
            value={company.comment}
            placeholder="Comentario"
          />
       </div>



      <button
        className="btn btn-primary btn-sm pull-right"
        onClick={this.handleSubmit}
      >
        {btnStoreText}
      </button>

      <button
        className="btn btn-default btn-sm"
        onClick={this.clean}>
        {btnCleanText}
      </button>
     </form>
    );
  }
});

export default CompaniesForm;