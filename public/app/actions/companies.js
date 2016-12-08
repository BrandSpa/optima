import request from 'superagent';
const TYPE = 'COMPANIES';
const endpoint = 'api/v1/companies';

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

export function store(company) {
	return dispatch => {
		return request
		.post(endpoint)
		.send(company)
		.end((err, res) => {
			if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
			return dispatch({ type: `${TYPE}_STORE`, payload: res.body});
		});
	}
}

export function update(company) {
	return dispatch => {
		return request
    .put(`${endpoint}/${company.id}`)
    .send(company)
    .end((err, res) => {
			if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
			return dispatch({ type: `${TYPE}_UPDATE`, payload: res.body});
    });
	}
}

export function setCompany(company) {
	return { type: `${TYPE}_SET_COMPANY`, payload: company};	
}

export function cleanItems() {
	return { type: `${TYPE}_CLEAN_ITEMS`, payload: []};	
}
