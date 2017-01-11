import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Select from '../../app/components/form_select';
import sinon from 'sinon';

describe('Select component', () => {
	it('should call function when it changes', () => {
		const onSelectChange = sinon.spy();
		let wrapper = shallow(<Select onSelectChange={onSelectChange}  />);
		wrapper.simulate('change');
		expect(onSelectChange.callCount).toBe(1);
	})

	it('should have options', () => {
		const onSelectChange = sinon.spy();
		const options = [{value: 'nea', label: 'nea'}, {value: 'nea2', label: 'nea2'}];
		let wrapper = shallow(<Select onSelectChange={onSelectChange} options={options}  />);
		expect(wrapper.find('option').children().length).toEqual(options.length);
	})
});
