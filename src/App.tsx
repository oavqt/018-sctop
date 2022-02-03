import { FC } from 'react';
import Nav from './components/nav/Nav';
import StyledApp from './styled/App.styled';

const App: FC = () => {
  return (
    <StyledApp>
      <Nav />
    </StyledApp>
  );
};

export default App;
