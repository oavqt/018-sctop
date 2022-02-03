import { FC } from 'react';
import NavLinks from './nav-links/NavLinks';
import NavLogo from './nav-logo/NavLogo';
import StyledNav from './Nav.styled';

const Nav: FC = () => {
  return (
    <StyledNav>
      <NavLogo />
      <NavLinks />
    </StyledNav>
  );
};

export default Nav;
