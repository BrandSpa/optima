'use strict';
import React from 'react';
import _ from 'underscore';
import request from 'superagent';
import Form from 'views/services/form_create';
import List from 'views/services/list';
import updateItem from 'lib/update_item';
import cleanObject from 'lib/clean_object';

module.exports = React.createClass({

  getInitialState() {
    return {
      allServices: [],
      services: [],
      service: {
        price_1: '',
        price_2: '',
      },
      errors: []
    }
  },

  componentDidMount() {
    this.fetch();
  },

  fetch() {
    request
    .get('/api/v1/services')
    .end((err, res) => {
      if(err) return console.log(err.body);
      let services = res.body;
      this.setState({
        services: services,
        allServices: services,
      });
    });
  },

  handleEdit(service) {
    this.setState({service});
  },

  handleSubmit(service) {
    if(service.id) {
      this.update(service);
    } else {
      this.store(service);
    }
  },

  store(service) {
    request
    .post('/api/v1/services')
    .send(service)
    .end((err, res) => {
      if(err) {
        return this.setState({errors: res.body});
      } else {
        this.setState({
          service: cleanObject(res.body),
          errors: [],
          services: [res.body].concat(this.state.services)
        })
      }

    })
  },

  update(service) {
    request
    .put(`/api/v1/services/${service.id}`)
    .send(service)
    .end((err, res) => {
      if(err) {
        console.log(res.body);
      } else {
        this.setState({
          services: updateItem(this.state.services, res.body, 'id'),
          errors: []
        });
      }
    });
  },

  search(e) {
    let val = e.currentTarget.value;
    let q = new RegExp(val, 'i');
    let services = _.filter(this.state.services, service => service.title.match(q));
    if(val.length == 0) {
      this.setState({services: this.state.allServices});
    } else {
      this.setState({services});
    }
  },

  clean() {
    this.setState({
      service: cleanObject(this.state.service),
      errors: []
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
            services={this.state.services}
            onEdit={this.handleEdit}
          />
        </div>
      </div>
    </div>

        <div className="col-md-4">
          <div className="panel sidebar__right-fixed">
            <div className="panel-body">
              <Form
                service={this.state.service}
                errors={this.state.errors}
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
