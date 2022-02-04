import { FC } from 'react';
import StyledHeaderCart, { StyledHeaderCartLink } from './HeaderCart.styled';

const HeaderCart: FC = () => {
  return (
    <StyledHeaderCart>
      <StyledHeaderCartLink to='cart'>cart</StyledHeaderCartLink>
    </StyledHeaderCart>
  );
};

export default HeaderCart;
