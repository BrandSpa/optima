'use strict';
import React from 'react';
import Item from 'views/todos/item';

export default React.createClass({

  render() {
    let todoNodes = this.props.todos.map((todo, i) => {
      return <Item key={i} todo={todo} onCompleted={this.todoCompleted} />
    });

    return (
        <table className="table">
          <thead>
            <tr>
              <th>Completada</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Creada</th>
              <th>Vencimiento</th>
              <th>De</th>
              <th>Para</th>
              <th>Cotización</th>
            </tr>
          </thead>
          <tbody>
            {todoNodes}
          </tbody>
        </table>
    );
  }
});
