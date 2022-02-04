import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderCartLink = styled(NavLink)`
  font-size: 1.2rem;
  text-decoration: none;

  &.active {
    color: #cc00ff;
  }
`;

const StyledHeaderCart = styled.div.attrs(() => ({
  role: 'banner-cart'
}))`
  margin: 0 0.5em;
`;

export { StyledHeaderCartLink };
export default StyledHeaderCart;
