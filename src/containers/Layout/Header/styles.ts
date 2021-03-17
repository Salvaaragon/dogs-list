import { Container } from '@material-ui/core';
import styled from 'styled-components';

export const HeaderContainer = styled(Container)`
  background-color: ${(props) => props.theme.palette.primary.light};
`;
