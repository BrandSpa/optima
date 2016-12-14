import request from 'axios';
const TYPE = 'SERVICES';
const endpoint = 'api/v1/services';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint, {params})
      .then(res => dispatch({ type: `${TYPE}_FETCH`, payload: res.data}))
			.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err}));
	}
}

export function store(service) {
	return dispatch => {
		return request
		.post(endpoint, service)
		.then(res => dispatch({ type: `${TYPE}_STORE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function update(service) {
	return dispatch => {
		return request
    .put(`${endpoint}/${service.id}`, service)
    .end(res => dispatch({ type: `${TYPE}_UPDATE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function setService(service) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			let action = { type: `${TYPE}_SET_SERVICE`, payload: service};
			dispatch(action);
			return resolve(action);
		});
	
	}
}

