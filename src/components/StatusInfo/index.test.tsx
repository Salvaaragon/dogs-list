import { Check } from '@material-ui/icons';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import StatusInfo from '.';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_COLOR = 'testing-color';
const EXAMPLE_ICON = Check;
const EXAMPLE_TEXT = 'testing-text';

describe('StatusInfo component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <StatusInfo
        color={EXAMPLE_COLOR}
        Icon={EXAMPLE_ICON}
        text={EXAMPLE_TEXT}
      />,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(StatusInfo).props();

        expect(wrapperProps.color).toEqual(EXAMPLE_COLOR);
        expect(wrapperProps.Icon).toEqual(EXAMPLE_ICON);
        expect(wrapperProps.text).toEqual(EXAMPLE_TEXT);
      });
    });
  });
});
