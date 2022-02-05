import { FC } from 'react';
import assets from '../../assets/assets';
import Div from '../utility/div/Div';
import H1 from '../utility/h1/H1';
import Img from '../utility/img/Img';
import StyledHero, { StyledHeroLink } from './Hero.styled';

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
  'flex-direction': 'column',
  height: '88vh',
  'justify-content': 'center'
};

const Hero: FC = () => {
  return (
    <StyledHero>
      <Div styled={{ ...divStyledProp }}>
        <StyledHeroLink to='products'>
          <Img
            attrs={{ alt: assetsHero.image.alt, src: assetsHero.image.src }}
          />
        </StyledHeroLink>
        <H1 styled={{ 'text-align': 'center' }}>{assetsHero.description}</H1>
      </Div>
    </StyledHero>
  );
};

export default Hero;
