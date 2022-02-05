import { FC } from 'react';
import HeaderCart from './header-cart/HeaderCart';
import HeaderLogin from './header-login/HeaderLogin';
import HeaderLogo from './header-logo/HeaderLogo';
import HeaderNavigation from './header-navigation/HeaderNavigation';
import Section from '../utility/section/Section';
import StyledHeader from './Header.styled';

const HeaderNav: FC = () => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <HeaderNavigation />
      <Section styled={{ display: 'flex', 'justify-content': 'flex-end' }}>
        <HeaderCart />
        <HeaderLogin />
      </Section>
    </StyledHeader>
  );
};

export default HeaderNav;
