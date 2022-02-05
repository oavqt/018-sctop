import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderNavigation = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const StyledHeaderNavigationLink = styled(NavLink)`
  font-size: 1.2rem;
  text-decoration: none;

  &.active {
    color: #00eeff;
  }
`;

export default StyledHeaderNavigation;
export { StyledHeaderNavigationLink };
