import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import { StyledHeroLink } from '../hero/Hero.styled';
import Div from '../utility/div/Div';
import Img from '../utility/img/Img';
import P from '../utility/p/P';
import StyledFooter, { StyledFooterLink } from './Footer.styled';

const footerRoutes = {
  primary: [
    {
      description: 'quod reprehenderit',
      path: 'unknown'
    },
    {
      description: 'quod reprehenderit',
      path: 'unknown'
    },
    {
      description: 'quod reprehenderit',
      path: 'unknown'
    },
    {
      description: 'quod reprehenderit',
      path: 'unknown'
    },
    {
      description: 'quod reprehenderit',
      path: 'unknown'
    }
  ],
  secondary: [
    {
      description: 'non autem vel corrupti',
      path: 'unknown'
    },
    {
      description: 'non autem vel corrupti',
      path: 'unknown'
    },
    {
      description: 'non autem vel corrupti',
      path: 'unknown'
    },
    {
      description: 'non autem vel corrupti',
      path: 'unknown'
    },
    {
      description: 'non autem vel corrupti',
      path: 'unknown'
    }
  ]
};

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Div styled={{ display: 'flex', 'flex-direction': 'column' }}>
        <Div>
          {footerRoutes.primary.map((item) => (
            <StyledFooterLink key={uuidv4()} to={item.path}>
              {item.description}
            </StyledFooterLink>
          ))}
        </Div>
        <Div>
          {footerRoutes.secondary.map((item) => (
            <StyledFooterLink key={uuidv4()} to={item.path}>
              {item.description}
            </StyledFooterLink>
          ))}
        </Div>
        <Div>
          <P>© All rights reserved by Oav</P>
        </Div>
      </Div>
      <Div styled={{ display: 'flex' }}>
        {assets.vfootersocial.map((item) => (
          <StyledHeroLink key={uuidv4()} to={item.path}>
            <Img attrs={{ alt: item.alt, src: item.src }} />
          </StyledHeroLink>
        ))}
      </Div>
    </StyledFooter>
  );
};

export default Footer;
