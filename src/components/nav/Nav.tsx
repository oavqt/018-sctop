import { FC } from 'react';
import NavNavigation from './nav-navigation/NavNavigation';
import NavLogo from './nav-logo/NavLogo';
import StyledNav from './Nav.styled';
import NavCart from './nav-cart/NavCart';
import Section from '../utils/section/Section';
import NavLogin from './nav-login/NavLogin';

const styledNavCartLogin = {
  display: 'flex',
  'justify-content': 'flex-end'
};

const Nav: FC = () => {
  return (
    <Section>
      <StyledNav>
        <NavLogo />
        <NavNavigation />
        <Section styled={{ ...styledNavCartLogin }}>
          <NavCart />
          <NavLogin />
        </Section>
      </StyledNav>
    </Section>
  );
};

export default Nav;
