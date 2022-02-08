import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import useImageRotation from '../../state/hooks/image-rotation/image-rotation';
import Div from '../utility/div/Div';
import H1 from '../utility/h1/H1';
import Img from '../utility/img/Img';
import StyledHero, { StyledHeroLink } from './Hero.styled';

const Hero: FC = () => {
  const [imageObject] = useImageRotation(assets.vhero);

  return (
    <StyledHero>
      <Div
        key={uuidv4()}
        styled={{
          'align-items': 'center',
          animation: '--fade-in-out 12s ease-in-out',
          display: 'flex',
          height: '100%'
        }}
      >
        <StyledHeroLink to='products'>
          <Img
            attrs={{ alt: imageObject.name, src: imageObject.image }}
            styled={{ width: '100%' }}
          />
        </StyledHeroLink>
        <H1>{imageObject.description}</H1>
      </Div>
      <Div>
        <H1 styled={{ 'text-align': 'center' }}>
          {"le vt'que, eum ipsum doloribus nobis enim vel adipisci consectetur"}
        </H1>
      </Div>
    </StyledHero>
  );
};

export default Hero;
