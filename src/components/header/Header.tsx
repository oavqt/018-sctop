import { FC } from 'react';
import HeaderCart from './header-cart/HeaderCart';
import HeaderLogin from './header-login/HeaderLogin';
import HeaderLogo from './header-logo/HeaderLogo';
import HeaderNavigation from './header-navigation/HeaderNavigation';
import Section from '../utils/section/Section';
import StyledHeader from './Header.styled';

const styledHeaderCartLogin = {
  display: 'flex',
  'justify-content': 'flex-end'
};

const HeaderNav: FC = () => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <HeaderNavigation />
      <Section styled={{ ...styledHeaderCartLogin }}>
        <HeaderCart />
        <HeaderLogin />
      </Section>
    </StyledHeader>
  );
};

export default HeaderNav;
