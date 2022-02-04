import { FC } from 'react';
import StyledDiv from './Div.styled';

interface DivProps {
  styled?: {
    'align-items'?: string;
    display?: string;
    'justify-content'?: string;
    width?: string;
  };
}

const Div: FC<DivProps> = (props) => {
  return <StyledDiv styled={{ ...props.styled }}>{props.children}</StyledDiv>;
};

export default Div;
