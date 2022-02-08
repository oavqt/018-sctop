import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHero = styled.section.attrs(() => ({
  role: 'home-hero'
}))`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: center;
`;

const StyledHeroLink = styled(NavLink)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
`;

export default StyledHero;
export { StyledHeroLink };
