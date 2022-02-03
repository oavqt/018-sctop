import { FC } from 'react';
import StyledH1 from './H1.styled';

const H1: FC = (props) => {
  return <StyledH1>{props.children}</StyledH1>;
};

export default H1;
