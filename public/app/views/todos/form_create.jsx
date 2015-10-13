'use strict';
var React = require('react');
var request = require('superagent');
var DateTimeField = require('react-bootstrap-datetimepicker');
var Select = require('react-select');
var _ = require('lodash');
var moment = require('moment');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      todo: {
        expires_date: moment().format('YYYY-MM-DD'),
        expires_time: moment().format('HH:mm:ss'),
      },
      users: []
    }
  },

  componentDidMount: function() {
    request
    .get('api/v1/users')
    .end(function(err, res) {
      this.setState({users: res.body});
    }.bind(this));
  },

  handleDate: function(date) {
    this.handleChange({
      expires_date: date
    });
  },

   handleTime: function(time) {
    this.handleChange({
      expires_time: moment(time, 'x').format('HH:mm:ss'),
      time: time
    })
  },

  handleContact: function(id) {
    this.handleChange({
      user_id: parseInt(id)
    })
  },

  handleRefs: function() {
    this.handleChange({
      title: React.findDOMNode(this.refs.title).value,
      description: React.findDOMNode(this.refs.description).value
    });
  },

  handleChange: function(data) {
    this.setState({todo: _.extend(this.state.todo, data)});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var trackingId = {};
    if(this.props.trackingId) {
      trackingId = {tracking_id: this.props.trackingId};
    }
    this.props.onSubmit(_.extend(this.state.todo, trackingId));
    this.clean();
  },

  clean: function() {
    this.setState({todo: _.extend(this.state.todo, {
      title: '',
      description: ''
    })});
  },

  render: function() {
    var todo = this.state.todo;
    var contactSelect;
    var contactValue;
    var time;

    var userOptions = this.state.users.map(function(user, i) {
      return {value: user.id, label: user.name +" "+ user.lastname}
    });

    if(todo.user_id) {
      contactSelect = _.findWhere(this.state.users, {id: todo.user_id});
      contactValue = contactSelect.name +" "+ contactSelect.lastname;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <br/>
        <div className="form-group col-md-4">
          <label htmlFor="">Fecha vencimiento</label>
          <DateTimeField
            defaultText="Seleccionar fecha"
            mode="date"
            dateTime={moment().format('YYYY-MM-DD')}
            format="YYYY-MM-DD"
            onChange={this.handleDate}
            value={todo.expires_date}
            />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="">Hora vencimiento</label>
          <DateTimeField
            defaultText="Seleccionar hora"
            mode="time"
            onChange={this.handleTime}
            value={todo.time}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="">Seleccionar o buscar usuario</label>
          <Select
            options={userOptions}
            placeholder="Seleccionar usario"
            onChange={this.handleContact}
            value={contactValue}
          />
        </div>

        <div className="form-group col-md-12">
        <label htmlFor="">Título</label>
          <input
            type="text"
            ref="title"
            className="form-control"
            onChange={this.handleRefs}
            value={todo.title}
            />
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="">descripción</label>
          <textarea
            ref="description"
            rows="2"
            className="form-control"
            onChange={this.handleRefs}
            value={todo.description}
            ></textarea>
        </div>

        <button className="btn btn-primary btn-sm">Guardar</button>
        <a href="#" className="btn btn-default btn-sm pull-right" onClick={this.props.hideForm}>Cerrar</a>
      </form>
    );
  }
});