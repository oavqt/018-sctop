import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHero = styled.section.attrs(() => ({
  role: 'home-hero'
}))``;

const StyledHeroLink = styled(NavLink)`
  text-decoration: none;
`;

export default StyledHero;
export { StyledHeroLink };
