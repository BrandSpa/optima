'use strict';
import React from 'react';
import Item from './item';

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
            className="btn btn-default btn-xs completed"
            disabled={this.state.completed}
            onClick={this.toggleCompleted}>
            Completadas
          </button>
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
