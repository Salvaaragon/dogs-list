import { Container } from '@material-ui/core';
import styled from 'styled-components';

export const ContentContainer = styled(Container)`
  background-color: ${(props) => props.theme.palette.background.default};
`;
