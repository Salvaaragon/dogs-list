import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CustomImage from '.';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_SRC = 'example-src';

describe('CustomImage component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(<CustomImage src={EXAMPLE_SRC} />);
    describe('Component props', () => {
      it('Component props values', () => {
        expect(wrapper.find(CustomImage).props().src).toEqual(EXAMPLE_SRC);
      });
    });
  });
});
