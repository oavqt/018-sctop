import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderLogo = styled.div.attrs(() => ({
  role: 'banner-logo'
}))`
  align-items: center;
  display: flex;
`;

const StyledHeaderLogoLink = styled(NavLink)``;

export default StyledHeaderLogo;
export { StyledHeaderLogoLink };
