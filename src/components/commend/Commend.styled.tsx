import styled from 'styled-components';

const StyledCommend = styled.section.attrs(() => ({
  role: 'home-commend'
}))`
  display: flex;
  flex-direction: column;
  margin: 15vh auto;

  ::before,
  ::after {
    content: '';
    background: #ffd500;
    border-radius: 0.2em;
    border-bottom-left-radius: 100%;
    height: 2em;
    margin: 2em auto;
    width: 50%;
  }
`;

export default StyledCommend;
