'use strict';
import React from 'react';
import List from 'views/quotations/list';
import Activities from 'views/activities/list';
import Todos from 'views/todos/section';
import Graphs from 'views/graphs/section';

const dashboard = React.createClass({
  getInitialState() {
    return {
      user: {}
    }  
  },

  componentDidMount() {
    console.log(localStorage.getItem('user'));
    if(localStorage.getItem('user')) {
      this.setState({user: JSON.parse(localStorage.getItem('user'))});
    }
  },

  render: function() {
    let {user} = this.state;

    return (
      <div>
        <div className="col-md-9">
          <List />
          <Todos user_id={user.id} />
          <Graphs/>
        </div>
        <div className="col-md-3">
          <Activities />
        </div>
      </div>
    );
  }
});

export default dashboard;