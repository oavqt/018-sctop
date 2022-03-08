import { FC } from 'react';
import StyledImg from './Img.styled';

interface ImgProps {
  attrs: {
    alt: string;
    src: string;
  };
  styled?: {
    'border-radius'?: string;
    hover?: {
      'box-shadow'?: string;
      transform?: string;
    };
    margin?: string;
    'max-width'?: string;
    position?: string;
    transition?: string;
    width?: string;
    'z-index'?: string;
  };
}

const Img: FC<ImgProps> = (props) => {
  return <StyledImg attrs={{ ...props.attrs }} styled={{ ...props.styled }} />;
};

export default Img;
