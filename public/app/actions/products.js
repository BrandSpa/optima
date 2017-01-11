import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'PRODUCTS';
const endpoint = '/api/v1/products';
const rest = restActions(endpoint, TYPE);

export function fetch(params = {}) {
  return dispatch => rest.fetch(params, dispatch);
}

export function store(product) {
	return dispatch => rest.store(product, dispatch);
}

export function update(product) {
	return dispatch => rest.update(product, dispatch);
}

export function remove(id) {
	return dispatch => rest.remove(id, dispatch);
}

export function duplicate(id) {
	return dispatch => {
		return request
		.post(`${endpoint}/${id}/duplicate`)
		.then(res => dispatch({ type: `${TYPE}_STORE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}
