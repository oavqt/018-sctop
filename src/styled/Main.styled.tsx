import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const StyledMain = styled.createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }

  @keyframes --fade-in-out {
    0% {
      opacity: 0;
    }
    25%,
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .root {
    margin: 0 auto;
    width: 90vw;
  }
`;

export default StyledMain;
