import { FC } from 'react';
import StyledNavLinks, { StyledNavLink } from './NavLinks.styled';

const NavLinks: FC = () => {
  return (
    <StyledNavLinks>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='products'>Products</StyledNavLink>
      <StyledNavLink to='about'>About</StyledNavLink>
      <StyledNavLink to='contact'>Contact</StyledNavLink>
    </StyledNavLinks>
  );
};

export default NavLinks;
