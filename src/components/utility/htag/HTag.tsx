import { FC } from 'react';
import StyledHTag from './HTag.styled';

interface HTagProps {
  attrs?: {
    type?: string;
  };
  styled?: {
    color?: string;
    'font-family'?: string;
    'font-size'?: string;
    margin?: string;
    'text-align'?: string;
  };
}

const HTag: FC<HTagProps> = (props) => {
  return (
    <StyledHTag attrs={{ ...props.attrs }} styled={{ ...props.styled }}>
      {props.children}
    </StyledHTag>
  );
};

export default HTag;
