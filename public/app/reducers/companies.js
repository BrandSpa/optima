import cleanObject from 'lib/clean_object';
const TYPE = 'COMPANIES';
const initialState = {
	items: [],
	errors: [],
	company: {}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case `${TYPE}_FETCH`:
			return {
        ...state,
        items: action.payload
      };
		break;

			case `${TYPE}_SET_COMPANY`:
			return {
        ...state,
        company: action.payload
      };
		break;

		case `${TYPE}_STORE`:
			return {
        ...state,
				company: {},
        items: [action.payload].concat(state.items)
      };
		break;

		case `${TYPE}_UPDATE`:
			let updated = action.payload;
			
			return {
        ...state,
				company: {},
				items: state.items.map(model => model.id == updated.id ? {...model, ...updated} : model)
      };
		break;

		case `${TYPE}_CLEAN_ITEMS`:
			return {
        ...state,
				items: []
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
