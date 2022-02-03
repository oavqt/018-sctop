import { FC } from 'react';
import Section from '../../utils/section/Section';
import StyledNavNavigation, {
  StyledNavNavigationLink
} from './NavNavigation.styled';

const NavNavigation: FC = () => {
  return (
    <Section>
      <StyledNavNavigation>
        <StyledNavNavigationLink to='/'>home</StyledNavNavigationLink>
        <StyledNavNavigationLink to='products'>
          products
        </StyledNavNavigationLink>
        <StyledNavNavigationLink to='about'>about</StyledNavNavigationLink>
        <StyledNavNavigationLink to='contact'>contact</StyledNavNavigationLink>
      </StyledNavNavigation>
    </Section>
  );
};

export default NavNavigation;
