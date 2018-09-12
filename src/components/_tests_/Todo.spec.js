import React from 'react';
import Todo from '../Todo';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

test('Todo marks as crossed out when completed', () => {
  const testFunction = () => true;
  const todo = shallow(<Todo onClick={testFunction} completed={true} text="Run tests"/>);

  expect(todo.text()).toEqual('Run tests');

  todo.find('li').simulate('click');

  expect(todo.find('li').prop('style')).
    toHaveProperty('textDecoration', 'line-through');
});

test('Todo marks as none when not completed', () => {
  const testFunction = () => true;
  const todo = shallow(<Todo onClick={testFunction} completed={false} text="Run tests"/>);

  expect(todo.text()).toEqual('Run tests');

  todo.find('li').simulate('click');

  expect(todo.find('li').prop('style')).
  toHaveProperty('textDecoration', 'line-through');
});