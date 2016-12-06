import request from 'superagent';
const TYPE = 'REPORTS';
const endpoint = 'api/v1/reports';

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
