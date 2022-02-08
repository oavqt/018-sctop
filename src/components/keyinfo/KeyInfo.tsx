import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import KeyInfoCard from './keyinfo-card/KeyInfoCard';
import StyledKeyInfo from './KeyInfo.styled';

const KeyInfo: FC = () => {
  return (
    <StyledKeyInfo>
      {assets.vcard.map((card) => (
        <KeyInfoCard key={uuidv4()} {...card} />
      ))}
    </StyledKeyInfo>
  );
};

export default KeyInfo;
