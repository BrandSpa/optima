import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
import { QuotationSection } from '../../app/views/quotation/section';
import Promise from 'promise';

describe('Quotation component', () => {
	it('should send mail', () => {
		let mail = {
			mail_recipient_1: 'alejandro@brandspa.com',
      mail_recipient_2: 'alejandro1@brandspa.com'
		};
		let expected = {type: 'QUOTATION_UPDATE', payload: { ...mail }};
		const stubPromise = new Promise( resolve => resolve(expected) ); 
		const store = mockStore({ });
		const dispatch = jest.fn(() => stubPromise);
		const props = { 
			quotations: { quotation: {} }, 
			user: {user: {id: 1}}, 
			activities: {},
			dispatch
		};

		let wrapper = shallow(<QuotationSection params={{id: 1010}} {...props}  />);
		document.body.innerHTML = `<div id="toast_messsage"></div>`;
		let result = wrapper.instance().handleSendMail(mail);
		return result.then(res => {
			return expect(res).toEqual(expected);
		});
	})
});