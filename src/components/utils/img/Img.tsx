import { FC } from 'react';
import StyledImg from './img.styled';

interface ImgProps {
  attrs: {
    alt: string;
    src: string;
  };
  styled?: {
    width?: string;
  };
}

const Img: FC<ImgProps> = (props) => {
  return <StyledImg attrs={{ ...props.attrs }} styled={{ ...props.styled }} />;
};

export default Img;
