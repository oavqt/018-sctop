import { FC } from 'react';
import StyledNavCart, { StyledNavCartLink } from './NavCart.styled';

const NavCart: FC = () => {
  return (
    <StyledNavCart>
      <StyledNavCartLink to='cart'>cart</StyledNavCartLink>
    </StyledNavCart>
  );
};

export default NavCart;
