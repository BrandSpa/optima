import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'COMPANIES';
const endpoint = 'api/v1/companies';
const rest = restActions(endpoint, TYPE, 'COMPANY');

export function fetch(params = {}) {
  return dispatch => {
		 return rest.fetch(params, dispatch);
	}
}

export function store(company) {
	return dispatch => {
		return rest.store(company, dispatch);
	}
}

export function update(company) {
	return dispatch => {
		return rest.update(company, dispatch);
	}
}

export function setCompany(company) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			let action = { type: `${TYPE}_SET_COMPANY`, payload: company};
			dispatch(action);
			return resolve(action);
		});
	
	}
}

export function addContact(company, contact) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			let action = { type: `${TYPE}_ADD_CONTACT`, payload: {company, contact}};
			dispatch(action);
			return resolve(action);
		});
	}
}

export function updateContact(company, contact) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			let action = { type: `${TYPE}_UPDATE_CONTACT`, payload: {company, contact}};
			dispatch(action);
			return resolve(action);
		});
	}
}

export function cleanItems() {
	return { type: `${TYPE}_CLEAN_ITEMS`, payload: []};	
}
