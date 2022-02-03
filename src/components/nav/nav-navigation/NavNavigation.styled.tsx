import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavNavigationLink = styled(NavLink)`
  font-size: 1.2rem;
  text-decoration: none;

  &.active {
    color: #cc00ff;
  }
`;

const StyledNavNavigation = styled.div.attrs(() => ({
  role: 'nav-navigation'
}))`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export { StyledNavNavigationLink };
export default StyledNavNavigation;
