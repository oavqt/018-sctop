import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import useImageRotation from '../../state/hooks/image-rotation/image-rotation';
import Div from '../utility/div/Div';
import HTag from '../utility/htag/HTag';
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
          height: '100%',
          'justify-content': 'center',
          width: '100%'
        }}
      >
        <StyledHeroLink to='products'>
          <Img
            attrs={{ alt: imageObject.image.alt, src: imageObject.image.src }}
            styled={{ width: '100%' }}
          />
        </StyledHeroLink>
        <HTag attrs={{ type: 'h2' }} styled={{ 'font-size': '2rem' }}>
          {imageObject.description.title}
        </HTag>
      </Div>
      <Div>
        <HTag attrs={{ type: 'h1' }} styled={{ 'text-align': 'center' }}>
          {
            "le vt'que, quos porro accusantium dicta debitis, veniam, doloremque, sint tenetur cum natus iste?"
          }
        </HTag>
      </Div>
    </StyledHero>
  );
};

export default Hero;
