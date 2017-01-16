import request from 'axios';
const TYPE = 'REPORTS';
const endpoint = '/api/v1/reports';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint, {params})
      .then(res => dispatch({ type: `${TYPE}_FETCH`, payload: res.data}))
      .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}
