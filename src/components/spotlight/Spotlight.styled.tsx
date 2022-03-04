import styled from 'styled-components';

const StyledSpotlight = styled.section.attrs(() => ({
  role: 'home-spotlight'
}))`
  display: flex;
  flex-direction: column;
  gap: 5em;

  ::before,
  ::after {
    content: '';
    background: #ffd500;
    border-radius: 50%;
    height: 2em;
    margin: 0 auto;
    width: 2em;
  }
`;

export default StyledSpotlight;
