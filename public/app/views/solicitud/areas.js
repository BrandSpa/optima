'use strict';
import React from 'react';
import * as action from '../../actions/areas';

const Areas = React.createClass({

  getInitialState() {
    return {
      showForm: false,
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
    console.log('here', this.props);
    this.props.dispatch(action.store(this.state.form)).then( res => {
      this.toggleShowForm()
    })
  },

  changeArea(e) {
    let id = e.currentTarget.value;
     this.props.changeArea(id);
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
            Agregar area
          </button>
          {
            this.state.showForm ? 
              <div className="form-group" style={{marginTop: "2rem"}}>
                <div className="row">
                  <div className="col-xs-12">
                    <input type="text" className="form-control" placeholder="Nombre" onKeyUp={this.handleInputChange} placeholder="Nombre area"/>
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
            this.props.areas && this.props.areas.items.length > 0 ?
            <div className="form-group">
              <hr />
              <select className="form-control" onChange={this.changeArea}>
                <option>Seleccionar area</option>
                {
                  this.props.areas.items.map( area => {
                    return <option key={area.id} value={area.id} selected={this.props.solicitud.area_id === area.id}>{area.name}</option>
                  })
                }
              </select>
            </div>
            : <div>No hay areas creadas</div>
          }
          
        </div>
      </div>
    );
  }
});

export default Areas;