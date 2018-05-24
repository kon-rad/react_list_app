import React from 'react'
import {shallow, mount} from 'enzyme'
import { expect } from 'chai';
import Home from '../Home'
import ListFilter from '../components/ListFilter';
import QuoteList from '../components/QuoteList';

describe('Home', () => {
  it('should render without throwing', () => {
    shallow(<Home />)
  })

  it('renders ListFilter', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(ListFilter)).to.have.length(1);
  });


  it('renders QuoteList', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(QuoteList)).to.have.length(1);
  });

})
