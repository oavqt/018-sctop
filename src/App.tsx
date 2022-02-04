import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/header/Header';
import StyledApp from './styled/App.styled';

const App: FC = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
