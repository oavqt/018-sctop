import { FC } from 'react';
import StyledImg from './Img.styled';

interface ImgProps {
  attrs: {
    alt: string;
    src: string;
  };
  styled?: {
    margin?: string;
    'max-width'?: string;
    position?: string;
    width?: string;
    'z-index'?: string;
  };
}

const Img: FC<ImgProps> = (props) => {
  return <StyledImg attrs={{ ...props.attrs }} styled={{ ...props.styled }} />;
};

export default Img;
