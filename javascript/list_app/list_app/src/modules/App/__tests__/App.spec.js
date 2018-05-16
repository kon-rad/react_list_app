import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { App } from '../App';
import styles from '../App.css';


test('renders properly', t => {
  const wrapper = shallow(
    <App />
  );

});
