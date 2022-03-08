import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import CommendCard from './commend-card/CommendCard';
import StyledCommend from './Commend.styled';

const Commend: FC = () => {
  return (
    <StyledCommend>
      {assets.vcommend.map((item) => (
        <CommendCard key={uuidv4()} {...item} />
      ))}
    </StyledCommend>
  );
};

export default Commend;
