import request from 'axios';
const TYPE = 'TODOS';
const endpoint = 'api/v1/todos';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint, {params})
      .then(res => dispatch({ type: `${TYPE}_FETCH`, payload: res.data}))
			.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err}));
	}
}

export function completed(todo = {}) {
  return dispatch => {
    return request
    .put(`${endpoint}/${todo.id}`, {...todo, completed: !todo.completed})
    .then(res => dispatch({ type: `${TYPE}_COMPLETED`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err}));
  }
}

export function store(todo = {}) {
  return dispatch => {
    return request
    .post(endpoint, todo)
    .then(res => dispatch({ type: `${TYPE}_STORE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err}));
  }
}
