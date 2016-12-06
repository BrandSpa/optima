const TYPE = 'SERVICES';
const initialState = {
	items: [],
	errors: [],
	service: {}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case `${TYPE}_FETCH`:
			return {
        ...state,
        items: action.payload
      };
		break;

			case `${TYPE}_SET_SERVICE`:
			return {
        ...state,
        service: action.payload
      };
		break;

		case `${TYPE}_STORE`:
			return {
        ...state,
				service: {},
        items: [action.payload].concat(state.items)
      };
		break;

		case `${TYPE}_UPDATE`:
			let updated = action.payload;
			
			return {
        ...state,
				service: {},
				items: state.items.map(model => model.id == updated.id ? {...model, ...updated} : model)
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
