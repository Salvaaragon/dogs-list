import theme from '@Styles/theme';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import CustomSelect from '.';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_LABEL = 'testing-label';
const EXAMPLE_PLACEHOLDER = 'testing-placeholder';
const EXAMPLE_OPTIONS = [
  { value: '1', text: 'a' },
  { value: '2', text: 'b' },
];
const EXAMPLE_ONCHANGE_RETURN_STRING = 'Value has been changed';
const EXAMPLE_ONCHANGE = () => EXAMPLE_ONCHANGE_RETURN_STRING;

describe('CustomSelect component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CustomSelect
          label={EXAMPLE_LABEL}
          placeholder={EXAMPLE_PLACEHOLDER}
          options={EXAMPLE_OPTIONS}
          onChange={EXAMPLE_ONCHANGE}
          value="2"
        />
      </ThemeProvider>,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(CustomSelect).props();

        expect(wrapperProps.label).toEqual(EXAMPLE_LABEL);
        expect(wrapperProps.placeholder).toEqual(EXAMPLE_PLACEHOLDER);
        expect(wrapperProps.options[0].value).toEqual('1');
        expect(wrapperProps.options[1].text).toEqual('b');
        expect(wrapperProps.value).toEqual('2');
        expect(wrapperProps.onChange('Call Funtion')).toEqual(
          EXAMPLE_ONCHANGE_RETURN_STRING,
        );
      });
    });
  });
});
