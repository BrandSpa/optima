import request from 'axios';
const TYPE = 'CONTACTS';
const endpoint = 'api/v1/contacts';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint, {params})
      .then(res => dispatch({ type: `${TYPE}_FETCH`, payload: res.data}))
			.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err}));
	}
}

export function store(contact) {
	return dispatch => {
		return request
		.post(endpoint, contact)
		.then(res => dispatch({ type: `${TYPE}_STORE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function update(contact) {
	return dispatch => {
		return request
    .put(`${endpoint}/${contact.id}`, contact)
    .then(res => dispatch({ type: `${TYPE}_UPDATE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function setContact(contact) {
	return { type: `${TYPE}_SET_CONTACT`, payload: contact};	
}
