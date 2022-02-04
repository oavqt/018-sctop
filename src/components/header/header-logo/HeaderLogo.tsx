import { FC } from 'react';
import assets from '../../../assets/assets';
import H1 from '../../utils/headings/h1/H1';
import Img from '../../utils/img/Img';
import Section from '../../utils/section/Section';
import StyledHeaderLogo from './HeaderLogo.styled';

const HeaderLogo: FC = () => {
  const { name, image } = assets.vlogo;

  return (
    <Section>
      <StyledHeaderLogo>
        <Img attrs={{ alt: name, src: image }} styled={{ width: '12em' }} />
        <H1>{"le vt'que"}</H1>
      </StyledHeaderLogo>
    </Section>
  );
};

export default HeaderLogo;
