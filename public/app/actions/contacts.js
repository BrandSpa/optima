import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'CONTACTS';
const endpoint = 'api/v1/contacts';
const rest = restActions(endpoint, TYPE, 'CONTACT');

export function fetch(params = {}) {
  return dispatch => rest.fetch(params, dispatch);
}

export function store(contact) {
	return dispatch => rest.store(contact, dispatch);
}

export function update(contact) {
	return dispatch => rest.update(contact, dispatch);
}

export function setContact(contact) {
	return { type: `${TYPE}_SET_CONTACT`, payload: contact};	
}
