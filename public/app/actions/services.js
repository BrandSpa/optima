import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'SERVICES';
const endpoint = '/api/v1/services';
const rest = restActions(endpoint, TYPE, 'SERVICE');

export function fetch(params = {}) {
  return dispatch => rest.fetch(params, dispatch);
}

export function store(service) {
	return dispatch => rest.store(service, dispatch);
}

export function update(service) {
	return dispatch => rest.update(service, dispatch);
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

export function cleanItems() {
	return dispatch => {
		return new Promise((resolve, reject) => {
			let action = { type: `${TYPE}_CLEAN_ITEMS`, payload: []};
			dispatch(action);
			return resolve(action);
		});
	}
}



