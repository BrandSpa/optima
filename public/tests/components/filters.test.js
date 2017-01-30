import React from 'react';
import { shallow, mount } from 'enzyme';
import Filters from '../../app/views/quotations/filters';
import Select from '../../app/components/form_select';
import sinon from 'sinon';

describe('quotations filters component', () => {
	it('should change query', () => {
		const onChange = sinon.spy();
		let wrapper = mount(<Filters onChange={onChange} />);
		wrapper.find('input').at(0).simulate('change', {currentTarget: {value: 3030}});
		expect(wrapper.find('input').length).toBe(3);
		expect(wrapper.find('select').length).toBe(5);
		expect(onChange.callCount).toBe(1);
	})

})
  