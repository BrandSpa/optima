'use strict';
import React from 'react';
import * as action from '../../actions/asesores';
import * as quoAction from '../../actions/quotations';
import Select from '../../components/form_select';
import clearObject from '../../lib/clean_object';

const Asesores = React.createClass({

  getInitialState() {
    return {
      showForm: false,
      contact: {},
      form: {
        name
      }
    }
  },
  componentDidMount() {
    this.props.dispatch(action.fetch())
  },

  handleInputChange(event) {
    this.setState({form : {name: event.target.value}});
  },

  handleSave() {
    // console.log('here', this.props);
    this.props.dispatch(action.store(this.state.form)).then( res => {
      this.toggleShowForm()
    })
  },

  changeAsesor(e) {
    let id = e.currentTarget.value;
     this.props.changeAsesor(id);
   },

  toggleShowForm() {
    this.setState({showForm: !this.state.showForm, form : {name: ''}})
  },

  render() {
    
    return (
      <div className="panel">
        <div className="panel-body">
          <button 
              className="btn btn-primary btn-sm" 
              onClick={this.toggleShowForm}
            >
            Agregar asesor
          </button>
          {
            this.state.showForm ? 
              <div className="form-group" style={{marginTop: "2rem"}}>
                <div className="row">
                  <div className="col-xs-12">
                    <input type="text" className="form-control" placeholder="Nombre" onKeyUp={this.handleInputChange} placeholder="Nombre asesor"/>
                  </div>
                  <hr />
                  <div className="col-xs-12" style={{marginTop: "2rem"}}>
                    <button className="btn btn-default btn-sm pull-left" onClick={this.toggleShowForm}>Cancelar</button>
                    <button className="btn btn-primary btn-sm pull-right" onClick={this.handleSave}>Guardar</button>
                  </div>
                </div>            
              </div>
            : null
          }
          {
            this.props.asesores.items.length > 0 ?
            <div className="form-group">
              <hr />
              <select className="form-control" onChange={this.changeAsesor}>
                <option>Seleccionar asesor</option>
                {
                  this.props.asesores.items.map( asesor => {
                    return <option key={asesor.id} value={asesor.id} selected={this.props.solicitud.asesor_id === asesor.id}>{asesor.name}</option>
                  })
                }
              </select>
            </div>
            : <div>No hay asesores creados</div>
          }
          
        </div>
      </div>
    );
  }
});

export default Asesores;