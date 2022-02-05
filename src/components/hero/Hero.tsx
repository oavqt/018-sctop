import { FC } from 'react';
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
        styled={{
          'align-items': 'center',
          display: 'flex',
          'flex-direction': 'column',
          height: '88vh',
          'justify-content': 'center'
        }}
      >
        <StyledHeroLink to='products'>
          <Img attrs={{ alt: imageObject.name, src: imageObject.image }} />
        </StyledHeroLink>
        <H1 styled={{ 'text-align': 'center' }}>
          {"le vt'que, eum ipsum doloribus nobis enim vel adipisci consectetur"}
        </H1>
      </Div>
    </StyledHero>
  );
};

export default Hero;
