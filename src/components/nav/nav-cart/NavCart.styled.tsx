import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavCartLink = styled(NavLink)`
  font-size: 1.2rem;
  text-decoration: none;

  &.active {
    color: #cc00ff;
  }
`;

const StyledNavCart = styled.div.attrs(() => ({
  role: 'nav-cart'
}))`
  margin-left: auto;
  width: 25%;
`;

export { StyledNavCartLink };
export default StyledNavCart;
