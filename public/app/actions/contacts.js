import request from 'superagent';
const TYPE = 'CONTACTS';
const endpoint = 'api/v1/contacts';

export function fetch(query = {}) {
  return dispatch => {
		  return request
      .get(endpoint)
			.query(query)
      .end((err, res) => {
        if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
				return dispatch({ type: `${TYPE}_FETCH`, payload: res.body});
      });
	}
}

export function store(contact) {
	return dispatch => {
		return request
		.post(endpoint)
		.send(contact)
		.end((err, res) => {
			if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
			return dispatch({ type: `${TYPE}_STORE`, payload: res.body});
		});
	}
}

export function update(contact) {
	return dispatch => {
		return request
    .put(`${endpoint}/${contact.id}`)
    .send(contact)
    .end((err, res) => {
			if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
			return dispatch({ type: `${TYPE}_UPDATE`, payload: res.body});
    });
	}
}

export function setContact(contact) {
	return { type: `${TYPE}_SET_CONTACT`, payload: contact};	
}
