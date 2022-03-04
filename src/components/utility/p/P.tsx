import { FC } from 'react';
import StyledP from './P.styled';

interface PProps {
  styled?: {
    color?: string;
    'font-family'?: string;
    'font-size'?: string;
    margin?: string;
    'text-align'?: string;
    width?: string;
  };
}

const P: FC<PProps> = (props) => {
  return <StyledP styled={{ ...props.styled }}>{props.children}</StyledP>;
};

export default P;
