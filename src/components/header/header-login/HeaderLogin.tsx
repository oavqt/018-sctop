import { FC } from 'react';
import StyledHeaderLogin, { StyledHeaderLoginLink } from './HeaderLogin.styled';

const HeaderLogin: FC = () => {
  return (
    <StyledHeaderLogin>
      <StyledHeaderLoginLink to='login'>login</StyledHeaderLoginLink>
    </StyledHeaderLogin>
  );
};

export default HeaderLogin;
