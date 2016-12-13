import request from 'axios';
const TYPE = 'ACTIVITIES';
const endpoint = 'api/v1/activities';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint, {params})
      .then(res => dispatch({ type: `${TYPE}_FETCH`, payload: res.data}))
			.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err}));
	}
}

export function store(activity = {}) {
  return dispatch => {
		  return request
      .post(endpoint, activity)
      .then(res => dispatch({ type: `${TYPE}_STORE`, payload: res.data}))
		  .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}
