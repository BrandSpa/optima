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

  componentWillReceiveProps(props) {
    this.setState({todos: props.todos});
  },

  toggleCompleted() {
    this.setState({completed: !this.state.completed});
  },

  render() {
    let todoNodes = this.state.todos.map((todo, i) => {

      if(todo.completed == this.state.completed) {
        return <Item key={i} todo={todo} onCompleted={this.props.onCompleted} />
      }

      if(todo.completed == null && this.state.completed == false) {
        return <Item key={i} todo={todo} onCompleted={this.props.onCompleted} />
      }
    });

    return (
      <div className="col-md-12">
        <div className="btn-group">
          <button
            className="btn btn-primary btn-xs"
            disabled={!this.state.completed}
            onClick={this.toggleCompleted}>
            Sin completar
          </button>
          <button
            className="btn btn-primary btn-xs"
            disabled={this.state.completed}
            onClick={this.toggleCompleted}>
            completadas
          </button>
        </div>

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
