import React from 'react';
import { shallow } from '../enzyme';
import Home from '../components/pages/Home';

let home;

describe('Home component tests', () => {
  beforeAll(() => {
    home = shallow(<Home />);
    
  });
  test('Should render', () => {
    console.log(home.debug());
    expect(home.toBeDefined())
  })
})