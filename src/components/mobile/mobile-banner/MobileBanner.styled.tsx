import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMobileBanner = styled.section.attrs(() => ({
  role: 'home-mobile-banner'
}))`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15vh;
`;

export default StyledMobileBanner;
