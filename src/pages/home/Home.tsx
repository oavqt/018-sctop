import { FC } from 'react';
import Hero from '../../components/hero/Hero';
import StyledHome from './Home.styled';

const Home: FC = () => {
  return (
    <StyledHome>
      <Hero />
    </StyledHome>
  );
};

export default Home;
