import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { DataContainerGridProps } from './types';

export const DataContainerGrid = styled(Grid).attrs(
  (props: DataContainerGridProps) => props,
)`
  margin-top: 2rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: white;
  border: solid 1px ${(props) => props.color};
  border-radius: 4px;
`;

export const StatusGrid = styled(Grid)`
  padding-left: 2rem;
  padding-right: 2rem;
`;
