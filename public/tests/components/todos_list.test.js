import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import List from '../../app/views/todos/list';

let todo = {
	id: 1,
  title: '',
  description: '',
  created_at: '2016-08-09 17:48:25',
  expires_time: '17:48:25',
  expires_date: '2016-08-09',
  assigned: {
    name: '',
    lastname: '',
  },
  user: {
    name: '',
    lastname: '',
  },
  tracking: ''
};

describe('component todos List', () => {
	it('should render items uncompleted', () => {
		let todo2 = {...todo, id: 2, completed: 1};
		let todo3 = {...todo, id: 3};
		let todos = [todo, todo2, todo3];
		const wrapper = mount(<List todos={todos} />);
		expect(wrapper.find('tbody').children().length).toBe(2);
	});

	it('should render items completed', () => {
		let todo2 = {...todo, id: 2, completed: 1};
		let todo3 = {...todo, id: 3};
		let todos = [todo, todo2, todo3];
		const wrapper = mount(<List todos={todos} />);
		wrapper.find('.completed').simulate('click');
		expect(wrapper.find('tbody').children().length).toBe(1);
	});

});
