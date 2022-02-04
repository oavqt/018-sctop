import { FC } from 'react';
import Div from '../utils/div/Div';
import H1 from '../utils/h1/H1';
import Img from '../utils/img/Img';
import StyledHero from './Hero.styled';

const assetsHero = {
  description:
    "le vt'que, eum ipsum doloribus nobis enim vel adipisci consectetur, dignissimos animi quisquam vero incidunt ratione?",
  image: {
    alt: 'hero-img',
    src: 'placeholder'
  }
};

const Hero: FC = () => {
  return (
    <StyledHero>
      <Div>
        <H1>{assetsHero.description}</H1>
        <Img attrs={{ alt: assetsHero.image.alt, src: assetsHero.image.src }} />
      </Div>
    </StyledHero>
  );
};

export default Hero;
