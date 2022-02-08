import { FC } from 'react';
import assets from '../../../assets/assets';
import HTag from '../../utility/htag/HTag';
import Img from '../../utility/img/Img';
import Section from '../../utility/section/Section';
import StyledHeaderLogo, { StyledHeaderLogoLink } from './HeaderLogo.styled';

const h1StyledProp = {
  color: '#f5cac3',
  'font-family': "'Shadows Into Light', cursive",
  'font-size': '3rem'
};

const HeaderLogo: FC = () => {
  const { alt, src } = assets.vlogo.image;

  return (
    <Section>
      <StyledHeaderLogo>
        <StyledHeaderLogoLink to={'/'}>
          <Img attrs={{ alt: alt, src: src }} styled={{ width: '12em' }} />
        </StyledHeaderLogoLink>
        <HTag styled={{ ...h1StyledProp }}>{"le vt'que"}</HTag>
      </StyledHeaderLogo>
    </Section>
  );
};

export default HeaderLogo;
