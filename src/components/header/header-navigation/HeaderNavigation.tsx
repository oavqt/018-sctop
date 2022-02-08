import { FC } from 'react';
import Section from '../../utility/section/Section';
import Li from '../../utility/ul/li/Li';
import Ul from '../../utility/ul/Ul';
import { v4 as uuidv4 } from 'uuid';
import StyledHeaderNavigation, {
  StyledHeaderNavigationLink
} from './HeaderNavigation.styled';

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
    <Ul
      styled={{
        'align-items': 'center',
        display: 'flex',
        'justify-content': 'space-evenly',
        'list-style': 'none',
        padding: '0'
      }}
    >
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
    <Section styled={{ width: '100%' }}>
      <StyledHeaderNavigation>
        {headerNavigationRoutesLink}
      </StyledHeaderNavigation>
    </Section>
  );
};

export default HeaderNavigation;
