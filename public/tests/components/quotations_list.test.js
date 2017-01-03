import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import ListTable from '../../app/views/quotations/list_table';

let quotation = {
      id: 1, 
      status: '', 
      rethink_from: null, 
      advisor: '',
      client_type: '', 
      type: '',
      created_at: '', 
      priority: 1, 
      user: {}, 
      company: {},
      contact: {},
			todos: []
		};

describe('component quotations ListTable', () => {
	it('should render items', () => {
		let quotation2 = {...quotation, id: 2};
		let quotation3 = {...quotation, id: 3};
		let quotations = [quotation, quotation2, quotation3];
		const wrapper = mount(<ListTable quotations={quotations} />);
		expect(wrapper.find('tbody').children().length).toBe(3);
	});
});
