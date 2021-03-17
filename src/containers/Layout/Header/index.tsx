import React from 'react';
import { HeaderContainer } from './styles';
import Topbar from './Topbar';

const Header: React.FC = () => {
  return (
    <HeaderContainer maxWidth={false} disableGutters>
      <Topbar />
    </HeaderContainer>
  );
};

export default Header;
