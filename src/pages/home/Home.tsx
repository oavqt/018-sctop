import { FC } from 'react';
import Commend from '../../components/commend/Commend';
import Hero from '../../components/hero/Hero';
import KeyInfo from '../../components/keyinfo/KeyInfo';
import Spotlight from '../../components/spotlight/Spotlight';
import StyledHome from './Home.styled';

const Home: FC = () => {
  return (
    <StyledHome>
      <Hero />
      <KeyInfo />
      <Spotlight />
      <Commend />
    </StyledHome>
  );
};

export default Home;
