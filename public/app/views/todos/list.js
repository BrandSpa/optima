'use strict';
import React from 'react';
import Item from 'views/todos/item';

export default React.createClass({
  getInitialState() {
    return {
      todos: [],
      completed: false
    }
  },

  toggleCompleted() {
    this.setState({completed: !this.state.completed});
  },
  
  filterByClient(e) {

  },

  render() { 
  
    let todoNodes = this.props.todos.map((todo, i) => {

      if(todo.completed == this.state.completed) {
        return <Item key={i} todo={todo} onCompleted={this.props.onCompleted} />
      }

      if(todo.completed == null && this.state.completed == false) {
        return <Item key={i} todo={todo} onCompleted={this.props.onCompleted} />
      }
    });

    return (
      <div className="col-md-12">
      <hr/>
        <div className="btn-group">
          <button
            className="btn btn-default btn-xs"
            disabled={!this.state.completed}
            onClick={this.toggleCompleted}>
            Sin completar
          </button>

          <button
            className="btn btn-default btn-xs"
            disabled={this.state.completed}
            onClick={this.toggleCompleted}>
            Completadas
          </button>
        </div>

        <div className="row">
          <div className="form-group col-md-6 pull-right">
            <input
              type="text"
              placeholder="Filtrar por cliente" 
              className="form-control" 
              onChange={this.filterByClient}
            />
          </div>
        </div>
        
        <hr/>
        
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Descripción</th>
                <th>Creada</th>
                <th>Vencimiento</th>
                <th>De</th>
                <th>Para</th>
                <th>Cliente</th>
                <th>Cotización</th>
                <th>Completada</th>
              </tr>
            </thead>
            <tbody>
              {todoNodes}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});
