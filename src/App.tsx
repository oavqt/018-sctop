import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/header/Header';
import Home from './pages/home/Home';
import StyledApp from './styled/App.styled';

const App: FC = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
