import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {mount, shallow, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import Shopping from '../src/components/Shopping'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shopping />, div);
});

it('should be initialized with an empty array', () => {
  const wrapper = shallow(<Shopping />);
  expect(wrapper.state('cart')).to.have.length(0);
});

it('should get 1 item added to cart when button is pressed', () => {
  const clock = sinon.useFakeTimers(300);
  const wrapper = mount(<Shopping />);
  wrapper.ref('name').get(0).value = 'Steak'; //type steak
  wrapper.ref('category').get(0).value = 'Meat'; //select value from dropdown
  wrapper.find('button').simulate('click');
  

  expect(wrapper.state('cart')).to.have.length(1);
});
