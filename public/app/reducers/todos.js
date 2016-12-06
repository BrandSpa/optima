const TYPE = 'TODOS';
const initialState = {
	items: [],
	errors: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case `${TYPE}_FETCH`:
			return {
        ...state,
        items: action.payload
      };
		break;

		case `${TYPE}_COMPLETED`:
			let updated = action.payload;

			return {
        ...state,
        items: state.items.map(model => model.id == updated.id ? {...model, ...updated} : model)
      };
		break;

		case `${TYPE}_STORE`:
			console.log(action.payload);

			return {
        ...state,
        items: [action.payload].concat(state.items)
      };
		break;
	
		case `${TYPE}_FAIL`:
			return {
        ...state,
        errors: [action.payload]
      };
		break;
	
		default:
			return state;
		break;
	}
}
