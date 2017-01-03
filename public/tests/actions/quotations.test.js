import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as action from '../../app/actions/quotations';
import moxios from 'moxios';
import expect from 'expect';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const TYPE = 'QUOTATIONS';
const endpoint = 'api/v1/quotations';

describe('quotations async actions', () => {
	 beforeEach(function () {
      moxios.install()
    })

    afterEach(function () {
      moxios.uninstall()
    })

	it('should fetch', () => {
		const store = mockStore({ quotations: { items: [] } });
		const stubResponse = [{id: 12929}, {id: 12323}];
		const expectedActions = [{ type: `${TYPE}_FETCH`, payload: stubResponse}];
		
		moxios.stubRequest(endpoint, {
      status: 200,
      response: stubResponse
    });

		return store.dispatch(action.fetch())
			.then(() => {
				expect(store.getActions()).toEqual( expectedActions);
			});
	})

	it('should get one', () => {
		const store = mockStore({ quotations: { quotation: {} } });
		const stubResponse = {id: 12929};
		const id = 12929;
		const expectedActions = { type: 'QUOTATIONS_SET_QUOTATION', payload: { id } };
		
		moxios.stubRequest(`${endpoint}/${id}`, {
      status: 200,
      response: stubResponse
    });

		return store.dispatch(action.fetchOne(id))
			.then((res) => {
				expect(store.getActions()).toEqual([expectedActions]);
			});
	})

	it('should store', () => {
		const store = mockStore({ quotations: { quotation: {} } });
		const stubResponse = {company_id: 1212, contact_id: 2020};
		const expectedActions = { type: `${TYPE}_STORE`, payload: stubResponse };
		
		moxios.stubRequest(endpoint, {
      status: 201,
      response: stubResponse
    });

		return store.dispatch(action.store(stubResponse))
			.then((res) => {
				expect(store.getActions()).toEqual([expectedActions]);
			});
	})

	it('should update', () => {
		const store = mockStore({ quotations: { quotation: {} } });
		const stubResponse = {id: 3450, company_id: 1212, contact_id: 2020};
		const expectedActions = { type: `${TYPE}_SET_QUOTATION`, payload: stubResponse };
		
		moxios.stubRequest(`${endpoint}/${stubResponse.id}`, {
      status: 201,
      response: stubResponse
    });

		return store.dispatch(action.update(stubResponse.id, stubResponse))
			.then((res) => {
				expect(store.getActions()).toEqual([expectedActions]);
			});
	})

	it('should send email', () => {
		const store = mockStore({ quotations: { quotation: {} } });
		const stubResponse = {id: 3450, company_id: 1212, contact_id: 2020};
		const expectedActions = { type: `${TYPE}_SET_QUOTATION`, payload: stubResponse };
		
		moxios.stubRequest(`${endpoint}/${stubResponse.id}/sendmail`, {
      status: 200,
      response: stubResponse
    });

		return store.dispatch(action.sendMail(stubResponse.id, stubResponse))
			.then((res) => {
				expect(store.getActions()).toEqual([expectedActions]);
			});
	})

	it('should fetch services associated', () => {
		const store = mockStore({quotations: {services: [] }});
		const quotationId = 40302;
		const stubResponse = [{id: 3030, id: 3131}];
		const actionsExpected = { type: `${TYPE}_FETCH_SERVICES`, payload: stubResponse};

		moxios.stubRequest(`${endpoint}/${quotationId}/services`, {
      status: 200,
      response: stubResponse
    });

		return store.dispatch(action.fetchServices(quotationId))
		.then(() => {
			expect(store.getActions()).toEqual([actionsExpected]);	
		});

	})

	it('should store service', () => {
		const store = mockStore({quotations: {services: [] }});
		const quotationId = 40302;
		const stubResponse = {id: 4040};
		const expectedActions = {type: `${TYPE}_ADD_SERVICE`, payload: stubResponse};

		moxios.stubRequest(`${endpoint}/${quotationId}/services`, {
			status: 200,
      response: stubResponse
		});

		return store.dispatch(action.storeService(quotationId))
			.then(() => {
				expect(store.getActions()).toEqual([expectedActions]);
			});
	})

	it('should remove service', () => {
		const store = mockStore({});
		const id = 5656;
		const quotationId = 34345;
		const stubResponse = {id};
		const expectedActions = {type: `${TYPE}_REMOVE_SERVICE`, payload: {id}};
		
		moxios.stubRequest(`api/v1/services/${id}?quotation_id=${quotationId}`, {
			status: 200,
      response: stubResponse
		});

		return store.dispatch(action.removeService(id, quotationId))
		.then(() => {
			expect(store.getActions()).toEqual([expectedActions]);
		});
	})

});
