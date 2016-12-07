'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/services';
import Form from 'views/services/form_create';
import List from 'views/services/list';


const section = React.createClass({

  getInitialState() {
    return {
      allServices: [],
      service: {
        price_1: '',
        price_2: '',
      },
    }
  },

  componentDidMount() {
   this.fetch();
  },

  componentWillReceiveProps(props) {
    if(props.items.length) {
      this.setState({allServices: props.items});
    }
  },

  fetch() {
    this.props.dispatch(action.fetch());
  },

  handleEdit(service) {
    this.props.dispatch(action.setService(service));
  },

  handleSubmit(service) {
    if(service.id) {
      this.props.dispatch(action.update(service));
    } else {
      this.props.dispatch(action.store(service));
    }
  },

  search(e) {
    let val = e.currentTarget.value;
    let q = new RegExp(val, 'i');
    let services = this.state.services.filter(service => service.title.match(q));
    if(val.length == 0) {
      this.setState({services: this.state.allServices});
    } else {
      this.setState({services});
    }
  },

  clean() {
    this.setState({
      service: cleanObject(this.state.service),
    });
  },

  render: function() {
    return (
      <div>
      <div className="col-md-8">
      <div className="panel">
        <div className="panel-body">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            onChange={this.search}
            />
        </div>
      </div>
      <div className="panel">
        <div className="panel-body">
          <List
            services={this.props.items}
            onEdit={this.handleEdit}
          />
        </div>
      </div>
    </div>

        <div className="col-md-4">
          <div className="panel sidebar__right-fixed">
            <div className="panel-body">
              <Form
                service={this.props.service}
                errors={this.props.errors}
                onSubmit={this.handleSubmit}
                onCancel={this.clean}
              />
            </div>
          </div>

        </div>
      </div>

    );
  }
});

export default connect(store => store.services)(section);