import styled from 'styled-components';

interface StyledImgProps {
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

const StyledImg = styled.img.attrs((props: StyledImgProps) => ({
  alt: props.attrs.alt,
  src: props.attrs.src
}))<StyledImgProps>`
  border-radius: ${(props) => props.styled?.['border-radius']};
  height: auto;
  margin: ${(props) => props.styled?.margin};
  max-width: ${(props) => props.styled?.['max-width']};
  position: ${(props) => props.styled?.position};
  transition: ${(props) => props.styled?.transition};
  width: ${(props) => props.styled?.width};
  z-index: ${(props) => props.styled?.['z-index']};

  :hover {
    box-shadow: ${(props) => props.styled?.hover?.['box-shadow']};
    transform: ${(props) => props.styled?.hover?.transform};
  }
`;

export default StyledImg;
