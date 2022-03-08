import { FC } from 'react';
import { Link } from 'react-router-dom';
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
      <Div styled={{ margin: '5em auto' }}>
        {assets.vmobilebanner.image.map((item) => (
          <Link key={uuidv4()} to={'unknown'}>
            <Img
              attrs={{ alt: item.alt, src: item.src }}
              styled={{
                'border-radius': '5em',
                margin: '0 1em',
                transition: 'all ease-out 0.2s',
                hover: {
                  'box-shadow': '0 1rem 1rem 0 #31313133',
                  transform: 'translateY(-0.2rem)'
                }
              }}
            />
          </Link>
        ))}
      </Div>
    </StyledMobileBanner>
  );
};

export default MobileBanner;
