import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import Div from '../utility/div/Div';
import CommendCard from './commend-card/CommendCard';
import StyledCommend from './Commend.styled';

const Commend: FC = () => {
  return (
    <StyledCommend>
      <Div
        styled={{
          'align-items': 'center',
          display: 'flex',
          'flex-wrap': 'wrap',
          'justify-content': 'center'
        }}
      >
        {assets.vcommend.map((item) => (
          <CommendCard key={uuidv4()} {...item} />
        ))}
      </Div>
    </StyledCommend>
  );
};

export default Commend;
