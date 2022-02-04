import { FC } from 'react';
import assets from '../../assets/assets';
import Div from '../utils/div/Div';
import H1 from '../utils/h1/H1';
import Img from '../utils/img/Img';
import StyledHero from './Hero.styled';

const { name, image } = assets.vhero;

const assetsHero = {
  description:
    "le vt'que, eum ipsum doloribus nobis enim vel adipisci consectetur",
  image: {
    alt: name,
    src: image
  }
};

const divStyledProp = {
  'align-items': 'center',
  display: 'flex',
  height: '88vh',
  'justify-content': 'center'
};

const Hero: FC = () => {
  return (
    <StyledHero>
      <Div styled={{ ...divStyledProp }}>
        <H1 styled={{ 'align-self': 'flex-end', margin: '1em' }}>
          {assetsHero.description}
        </H1>
        <Img
          attrs={{ alt: assetsHero.image.alt, src: assetsHero.image.src }}
          styled={{ position: 'absolute', 'z-index': '-1' }}
        />
      </Div>
    </StyledHero>
  );
};

export default Hero;
