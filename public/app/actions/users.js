import request from 'axios';
const TYPE = 'USERS';
const endpoint = '/api/v1/users';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint, {params})
      .then(res => dispatch({ type: `${TYPE}_FETCH`, payload: res.data}))
			.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err}));
	}
}
