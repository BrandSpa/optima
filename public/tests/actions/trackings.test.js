import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as action from '../../app/actions/trackings';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const TYPE = 'TRACKINGS';
const endpoint = '/api/v1/trackings';

describe('trackings actions', () => {
	beforeEach(() => {
		moxios.install()
	})

	afterEach(() => {
		moxios.uninstall()
	})

	it('should fetch', () => {
		const store = mockStore({});
		const response = [{id: 4505}, {id: 4504}];
		const expectedActions = [{type: `${TYPE}_FETCH`, payload: response}];
		moxios.stubRequest(endpoint, {response});
		return store.dispatch(action.fetch()).then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should store', () => {
		const store = mockStore({});
		const response = {id: 6060};
		const expectedActions = [{type: `${TYPE}_STORE`, payload: response}];
		moxios.stubRequest(endpoint, {response});
		return store.dispatch(action.store(response)).then(() => expect(store.getActions()).toEqual(expectedActions));
	})
})