import styled from 'styled-components';

const StyledKeyInfo = styled.section.attrs(() => ({
  role: 'home-keyinfo'
}))`
  display: grid;
  gap: 2em;
  justify-content: center;
  margin: 15vh auto;
  width: 85%;

  ::before,
  ::after {
    content: '';
    background: #ffd500;
    border-radius: 0.2em;
    border-bottom-left-radius: 100%;
    height: 2em;
    margin: 0 auto;
    width: 50%;
  }
`;

export default StyledKeyInfo;
