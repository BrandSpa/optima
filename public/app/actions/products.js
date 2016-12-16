import request from 'axios';
const TYPE = 'PRODUCTS';
const endpoint = '/api/v1/products';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint, {params})
      .then(res => dispatch({ type: `${TYPE}_FETCH`, payload: res.data}))
      .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function store(product) {
	return dispatch => {
		return request
		.post(endpoint, product)
		.then(res => dispatch({ type: `${TYPE}_STORE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function update(product) {
	return dispatch => {
		return request
		.put(`${endpoint}/${product.id}`, product)
		.then(res => dispatch({ type: `${TYPE}_UPDATE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function remove(id) {
	return dispatch => {
		return request
		.delete(`${endpoint}/${id}`)
		.then(res => dispatch({ type: `${TYPE}_REMOVE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function duplicate(id) {
	return dispatch => {
		return request
		.post(`${endpoint}/${id}/duplicate`)
		.then(res => dispatch({ type: `${TYPE}_STORE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}
