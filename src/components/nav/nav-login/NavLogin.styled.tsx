import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLoginLink = styled(NavLink)`
  font-size: 1.2rem;
  text-decoration: none;

  &.active {
    color: #cc00ff;
  }
`;

const StyledNavLogin = styled.div.attrs(() => ({
  role: 'nav-login'
}))`
  margin: 0 0.5em;
`;

export { StyledNavLoginLink };
export default StyledNavLogin;
