import { FC } from 'react';
import StyledH1 from './H1.styled';

interface H1Props {
  styled?: {
    'align-self'?: string;
    color?: string;
    'font-family'?: string;
    'font-size'?: string;
    margin?: string;
  };
}

const H1: FC<H1Props> = (props) => {
  return <StyledH1 styled={{ ...props.styled }}>{props.children}</StyledH1>;
};

export default H1;
