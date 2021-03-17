import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { StatusInfoGridProps } from './types';

export const StatusInfoGrid = styled(Grid).attrs(
  (props: StatusInfoGridProps) => props,
)`
  border: solid 1px ${(props) => props.color};
  border-radius: 4px;
`;

export const IconGrid = styled(Grid)`
  padding-top: 2rem;
  padding-bottom: 0.25rem;
`;

export const TextGrid = styled(Grid)`
  padding: 0.25rem 2rem 2rem;
`;
