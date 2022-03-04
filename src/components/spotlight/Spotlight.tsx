import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import SpotlightCard from './spotlight-card/SpotlightCard';
import StyledSpotlight from './Spotlight.styled';

const Spotlight: FC = () => {
  return (
    <StyledSpotlight>
      {assets.vspotlight.map((item) => (
        <SpotlightCard key={uuidv4()} {...item} />
      ))}
    </StyledSpotlight>
  );
};

export default Spotlight;
