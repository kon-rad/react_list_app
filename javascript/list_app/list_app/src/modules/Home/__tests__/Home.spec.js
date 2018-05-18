import React from 'react'
import {shallow} from 'enzyme'
import Home from '../Home'

describe('Home', () => {
  it('should render without throwing', () => {
    shallow(<Home />)
  })


  it('will set the src on the img element', () => {
    const brand = shallow(<Brand imagePath="path/to/image" />)

    expect(brand.find('img').html()).to.equal(
      '<img class="ref-Brand-img" src="path/to/image"/>'
    )
  })

  // it should render search by game/movie quotes toggle
  t.is(wrapper.find('input').length, 2);

  // it should render input filter by quote text

})
