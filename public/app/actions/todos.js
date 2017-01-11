import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'TODOS';
const endpoint = 'api/v1/todos';
const rest = restActions(endpoint, TYPE, 'TODO');

export function fetch(params = {}) {
  return dispatch => rest.fetch(params, dispatch);
}

export function store(todo = {}) {
  return dispatch => rest.store(todo, dispatch);
}

export function completed(todo = {}) {
  return dispatch => {
    return request
    .put(`${endpoint}/${todo.id}`, {...todo, completed: !todo.completed})
    .then(res => dispatch({ type: `${TYPE}_COMPLETED`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err}));
  }
}

export function sendMail(id) {
  return dispatch => {
    return request
      .post(`${endpoint}/${id}/sendmail`)
      .then(res => dispatch({ type: `${TYPE}_SENT`, payload: res.data}))
      .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
  }
}

