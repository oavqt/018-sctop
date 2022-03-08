import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../../assets/assets';
import Div from '../../utility/div/Div';
import HTag from '../../utility/htag/HTag';
import Img from '../../utility/img/Img';
import P from '../../utility/p/P';
import StyledMobileBanner from './MobileBanner.styled';

const MobileBanner: FC = () => {
  return (
    <StyledMobileBanner>
      <Div>
        <HTag>{assets.vmobilebanner.description.title}</HTag>
        <P>{assets.vmobilebanner.description.body}</P>
      </Div>
      <Div>
        {assets.vmobilebanner.image.map((item) => (
          <Img key={uuidv4()} attrs={{ alt: item.alt, src: item.src }} />
        ))}
      </Div>
    </StyledMobileBanner>
  );
};

export default MobileBanner;
