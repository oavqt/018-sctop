import { FC } from 'react';
import assets from '../../../assets/assets';
import H1 from '../../utils/headings/h1/H1';
import Img from '../../utils/img/Img';
import StyledNavLogo from './NavLogo.styled';

const NavLogo: FC = () => {
  const { name, image } = assets.vlogo;

  return (
    <StyledNavLogo>
      <Img attrs={{ alt: name, src: image }} styled={{ width: '12em' }} />
      <H1>{"le vt'que"}</H1>
    </StyledNavLogo>
  );
};

export default NavLogo;
