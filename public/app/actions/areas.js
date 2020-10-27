import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'AREAS';
const endpoint = '/api/v1/areas';
const rest = restActions(endpoint, TYPE, 'AREA');

export function fetch(params = {}) {
  return dispatch => rest.fetch(params, dispatch);
}

export function store(contact) {
	console.log('here', rest);
	return dispatch => rest.store(contact, dispatch);
}

export function update(contact) {
	return dispatch => rest.update(contact, dispatch);
}

export function setArea(contact) {
	return { type: `${TYPE}_SET_AREA`, payload: contact};	
}

export function cleanItems() {
	return { type: `${TYPE}_CLEAN_ITEMS`, payload: []};	
}
