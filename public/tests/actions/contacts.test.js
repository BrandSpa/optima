import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as action from '../../app/actions/contacts';
import moxios from 'moxios';
import expect from 'expect';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const TYPE = 'CONTACTS';
const endpoint = 'api/v1/contacts';

describe('contact actions', () => {
	beforeEach(() => {
		moxios.install()
	})

	afterEach(() => {
		moxios.uninstall()
	})
	
	it('should fetch', () => {
		const store = mockStore({});
		const stubResponse = [{id: 2020, name: 'nea'}, {id: 3030, name: 'ale'}];
		const expectedActions = [{type: `${TYPE}_FETCH`, payload: stubResponse}];
		moxios.stubRequest(endpoint, { status: 200, response: stubResponse });

		return store.dispatch(action.fetch())
			.then(() => expect(store.getActions()).toEqual( expectedActions));
	})

	it('should store', () => {
		const store = mockStore({});
		const contact = {id: 2020, name: 'nea'};
		const stubResponse = contact;
		const expectedActions = [{type: `${TYPE}_STORE`, payload: stubResponse}];
		moxios.stubRequest(endpoint, {status: 201, response: stubResponse});
		return store.dispatch(action.store(contact))
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should update', () => {
		const store = mockStore({});
		const contact = {id: 2020, name: 'nea'};
		const stubResponse = contact;
		const expectedActions = [{type: `${TYPE}_UPDATE`, payload: stubResponse}];
		moxios.stubRequest(`${endpoint}/${contact.id}`, {status: 200, response: stubResponse});
		return store.dispatch(action.update(contact))
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})
});
