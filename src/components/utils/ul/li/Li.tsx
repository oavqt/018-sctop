import { FC } from 'react';
import StyledLi from './Li.styled';

const Li: FC = (props) => {
  return <StyledLi>{props.children}</StyledLi>;
};

export default Li;
