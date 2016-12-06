import request from 'superagent';
const TYPE = 'SERVICES';
const endpoint = 'api/v1/services';

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

export function store(service) {
	return dispatch => {
		return request
		.post(endpoint)
		.send(service)
		.end((err, res) => {
			if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
			return dispatch({ type: `${TYPE}_FETCH`, payload: res.body});
		});
	}
}

export function update(service) {
	return dispatch => {
		return request
    .put(`${endpoint}/${service.id}`)
    .send(service)
    .end((err, res) => {
			if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
			return dispatch({ type: `${TYPE}_UPDATE`, payload: res.body});
    });
	}
}

export function setService(service) {
	return { type: `${TYPE}_SET_SERVICE`, payload: service};	
}
