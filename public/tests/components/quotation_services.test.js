import React from 'react';
import { shallow, mount } from 'enzyme';
import Services from '../../app/views/quotation/services';

describe('component quotation service', () => {
	it('should remove a service', () => {
		const services = [{id: 1, title: 'the service title'}];
		const dispatch = jest.fn();
		const wrapper = shallow(
			<Services 
				disabled={false} 
				services={{items: services}} 
				quotations={{services, quotation: {id: 2}}} 
				dispatch={dispatch} 
			/>
		);
		wrapper.find('.quotation-service').at(0).find('.btn').at(1).simulate('click');
		expect(dispatch).toHaveBeenCalledTimes(1);
	})
})
