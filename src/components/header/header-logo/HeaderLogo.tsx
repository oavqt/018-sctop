import { FC } from 'react';
import assets from '../../../assets/assets';
import H1 from '../../utility/h1/H1';
import Img from '../../utility/img/Img';
import Section from '../../utility/section/Section';
import StyledHeaderLogo, { StyledHeaderLogoLink } from './HeaderLogo.styled';

const h1StyledProp = {
  color: '#f5cac3',
  'font-family': "'Shadows Into Light', cursive",
  'font-size': '3rem'
};

const HeaderLogo: FC = () => {
  const { name, image } = assets.vlogo;

  return (
    <Section>
      <StyledHeaderLogo>
        <StyledHeaderLogoLink to={'/'}>
          <Img attrs={{ alt: name, src: image }} styled={{ width: '12em' }} />
        </StyledHeaderLogoLink>
        <H1 styled={{ ...h1StyledProp }}>{"le vt'que"}</H1>
      </StyledHeaderLogo>
    </Section>
  );
};

export default HeaderLogo;
