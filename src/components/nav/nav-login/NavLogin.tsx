import { FC } from 'react';
import StyledNavLogin, { StyledNavLoginLink } from './NavLogin.styled';

const NavLogin: FC = () => {
  return (
    <StyledNavLogin>
      <StyledNavLoginLink to='login'>login</StyledNavLoginLink>
    </StyledNavLogin>
  );
};

export default NavLogin;
