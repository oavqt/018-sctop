import { FC } from 'react';
import Section from '../../utils/section/Section';
import Li from '../../utils/ul/li/Li';
import Ul from '../../utils/ul/Ul';
import { v4 as uuidv4 } from 'uuid';
import StyledHeaderNavigation, {
  StyledHeaderNavigationLink
} from './HeaderNavigation.styled';

const ulStyledProp = {
  'align-items': 'center',
  display: 'flex',
  'justify-content': 'space-evenly',
  'list-style': 'none'
};

const headerNavigationRoutes = [
  {
    description: 'home',
    path: '/'
  },
  {
    description: 'products',
    path: 'products'
  },
  {
    description: 'about',
    path: 'about'
  },
  {
    description: 'contact',
    path: 'contact'
  }
];

const HeaderNavigation: FC = () => {
  const headerNavigationRoutesLink = (
    <Ul styled={{ ...ulStyledProp }}>
      {headerNavigationRoutes.map((route) => {
        return (
          <Li key={uuidv4()}>
            <StyledHeaderNavigationLink to={route.path}>
              {route.description}
            </StyledHeaderNavigationLink>
          </Li>
        );
      })}
    </Ul>
  );

  return (
    <Section>
      <StyledHeaderNavigation>
        {headerNavigationRoutesLink}
      </StyledHeaderNavigation>
    </Section>
  );
};

export default HeaderNavigation;
