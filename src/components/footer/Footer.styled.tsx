import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledFooterLink = styled(NavLink)`
  color: #313131;
  margin: 0 0.2em;
  text-decoration: none;
`;

export default StyledFooter;
export { StyledFooterLink };
