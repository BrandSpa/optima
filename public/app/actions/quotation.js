import request from 'superagent';
const TYPE = 'QUOTATION';
const endpoint = 'api/v1/quotations';

export function fetch(id) {
  return dispatch => {
		  return request
      .get(`${endpoint}/${id}`)
			.query(query)
      .end((err, res) => {
        if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
				return dispatch({ type: `${TYPE}_FETCH`, payload: res.body});
      });
}
