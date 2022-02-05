import { FC } from 'react';
import StyledUl from './Ul.styled';

interface UlProps {
  styled?: {
    'align-items'?: string;
    display?: string;
    'justify-content'?: string;
    'list-style'?: string;
    width?: string;
  };
}

const Ul: FC<UlProps> = (props) => {
  return <StyledUl styled={{ ...props.styled }}>{props.children}</StyledUl>;
};

export default Ul;
