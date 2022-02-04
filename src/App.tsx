import { FC } from 'react';
import Nav from './components/header/Header';
import StyledApp from './styled/App.styled';

const App: FC = () => {
  return (
    <StyledApp>
      <Nav />
    </StyledApp>
  );
};

export default App;
