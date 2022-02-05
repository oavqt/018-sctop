import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const StyledMain = styled.createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }

  .root {
    margin: 0 auto;
    width: 90vw;
  }
`;

export default StyledMain;
