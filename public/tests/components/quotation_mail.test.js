import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import Mail from '../../app/views/quotation/mails';
import Promise from 'promise';

describe('quotation mail component', () => {
	it('simulates click events', () => {
		const stubPromise = new Promise((resolve) => resolve()); 
		const showMail = true;
		const handleShowMail = sinon.spy();
		const handleSaveMail = sinon.spy();
		const handleSendMail = sinon.stub().returns(stubPromise);
		const quotation = {};

		let wrapper = shallow(
			<Mail
        show={showMail}
        onClose={handleShowMail}
        quotation={quotation}
        onSaveMail={handleSaveMail}
        onSendMail={handleSendMail}
			/>
		);

		wrapper.find('.mail-save').simulate('click');
		wrapper.find('.mail-send').simulate('click');
		wrapper.find('.mail-close').simulate('click');

		expect(handleSaveMail.callCount).toBe(1);
		expect(handleSendMail.callCount).toBe(1);
		expect(handleShowMail.callCount).toBe(1);
	})
});