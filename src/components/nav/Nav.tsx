import { FC } from 'react';
import NavLogo from './nav-logo/NavLogo';
import StyledNav from './Nav.styled';

const Nav: FC = () => {
  return (
    <StyledNav>
      <NavLogo />
    </StyledNav>
  );
};

export default Nav;
