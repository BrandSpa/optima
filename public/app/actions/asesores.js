import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'ASESORES';
const endpoint = '/api/v1/asesores';
const rest = restActions(endpoint, TYPE, 'ASESOR');

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

export function setContact(contact) {
	return { type: `${TYPE}_SET_ASESOR`, payload: contact};	
}

export function cleanItems() {
	return { type: `${TYPE}_CLEAN_ITEMS`, payload: []};	
}
