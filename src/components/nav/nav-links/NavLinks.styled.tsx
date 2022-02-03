import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  font-size: 1.2rem;
  text-decoration: none;

  &.active {
    color: #cc00ff;
  }
`;

const StyledNavLinks = styled.section.attrs(() => ({
  role: 'navigation-links'
}))`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

export { StyledNavLink };
export default StyledNavLinks;
