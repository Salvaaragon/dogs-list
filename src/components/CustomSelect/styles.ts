import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import styled from 'styled-components';

export const CustomFormControl = styled(FormControl)`
  width: 100%;
`;

export const CustomInputLabel = styled(InputLabel)`
  color: ${(props) => props.theme.palette.primary.dark};
  font-family: Raleway Bold;
  font-size: 1.5rem;
`;

export const CustomSelector = styled(Select)`
  background-color: white;
  font-family: Raleway;

  &:not(.empty) {
    text-transform: capitalize;
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  font-family: Raleway;

  &:not(.empty) {
    text-transform: capitalize;
  }
`;
