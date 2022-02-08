import { FC } from 'react';
import StyledDiv from './Div.styled';

interface DivProps {
  styled?: {
    'align-items'?: string;
    animation?: string;
    display?: string;
    'flex-direction'?: string;
    height?: string;
    'justify-content'?: string;
    'text-align'?: string;
    width?: string;
  };
}

const Div: FC<DivProps> = (props) => {
  return <StyledDiv styled={{ ...props.styled }}>{props.children}</StyledDiv>;
};

export default Div;
