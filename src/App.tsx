import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Nav from './components/header/Header';
import MobileBanner from './components/mobile/mobile-banner/MobileBanner';
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
        <MobileBanner />
        <Footer />
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
