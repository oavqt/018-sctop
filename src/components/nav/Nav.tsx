import { FC } from 'react';
import NavNavigation from './nav-navigation/NavNavigation';
import NavLogo from './nav-logo/NavLogo';
import StyledNav from './Nav.styled';
import NavCart from './nav-cart/NavCart';
import Section from '../utils/section/Section';

const Nav: FC = () => {
  return (
    <Section>
      <StyledNav>
        <NavLogo />
        <NavNavigation />
        <Section>
          <NavCart />
        </Section>
      </StyledNav>
    </Section>
  );
};

export default Nav;
