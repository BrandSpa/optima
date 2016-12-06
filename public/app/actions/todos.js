import request from 'superagent';
const TYPE = 'TODOS';
const endpoint = 'api/v1/todos';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint)
      .end((err, res) => {
        if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
				return dispatch({ type: `${TYPE}_FETCH`, payload: res.body});
      });
	}
}

export function completed(todo = {}) {
  return dispatch => {
    return request
    .put(`${endpoint}/${todo.id}`)
    .send( {...todo, completed: !todo.completed} )
    .end((err, res) => {
      return dispatch({ type: `${TYPE}_COMPLETED`, payload: res.body});
    });
  }
}

export function store(todo = {}) {
  return dispatch => {
    return request
      .post(endpoint)
      .send(todo)
      .end((err, res) => {
        if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
        return dispatch({ type: `${TYPE}_STORE`, payload: res.body});
      });
  }
}
