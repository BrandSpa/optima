import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as action from '../../app/actions/todos';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const TYPE = 'TODOS';
const endpoint = '/api/v1/todos';

describe('todos actions', () => {
	beforeEach(() => {
  	moxios.install()
  })

  afterEach(() => {
  	moxios.uninstall()
  })

	it('should fetch', () => {
		const store = mockStore({});
		const stubResponse = {id: 6060, title: 'this is a todo'};
		const expectedActions = [{type: `${TYPE}_FETCH`, payload: stubResponse}];
		moxios.stubRequest(endpoint, {status: 200, response: stubResponse});
		return store.dispatch(action.fetch())
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should store', () => {
		const store = mockStore({});
		const stubResponse = {id: 6060, title: 'this is a todo'};
		const expectedActions = [{type: `${TYPE}_STORE`, payload: stubResponse}];
		moxios.stubRequest(endpoint, {status: 200, response: stubResponse});
		return store.dispatch(action.store(stubResponse))
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should completed', () => {
		const store = mockStore({});
		const stubResponse = {id: 6060, title: 'this is a todo', completed: 0};
		const expectedActions = [{type: `${TYPE}_COMPLETED`, payload: stubResponse}];
		moxios.stubRequest(`${endpoint}/${stubResponse.id}`, {status: 200, response: stubResponse});

		return store.dispatch(action.completed(stubResponse))
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})

});
