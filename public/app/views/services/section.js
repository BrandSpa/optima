'use strict';
const React = require('react');
const Form = require('views/services/form_create');
const List = require('views/services/list');
import request from 'superagent';
import _ from 'underscore';
module.exports = React.createClass({

  getInitialState() {
    return {
      allServices: [],
      services: [],
      service: {
        title: '',
        text: '',
        price_1: '',
        price_2: '',
      }
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
        console.log(res.body);
      } else {
        this.setState({
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
        this.setState({service: res.body});
      }
    });
  },

  search(e) {
    let q = new RegExp(e.currentTarget.value, 'i');
    let services = _.filter(this.state.services, service => service.title.match(q));
    if(services.length <= 0) {
      this.setState({services: this.state.allServices});
    } else {
      this.setState({services});
    }


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
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>

        </div>
      </div>

    );
  }
});
