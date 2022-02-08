import { FC } from 'react';
import Hero from '../../components/hero/Hero';
import KeyInfo from '../../components/keyinfo/KeyInfo';
import StyledHome from './Home.styled';

const Home: FC = () => {
  return (
    <StyledHome>
      <Hero />
      <KeyInfo />
    </StyledHome>
  );
};

export default Home;
