import styled from 'styled-components';

interface StyledImgProps {
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

const StyledImg = styled.img.attrs((props: StyledImgProps) => ({
  alt: props.attrs.alt,
  src: props.attrs.src
}))<StyledImgProps>`
  height: auto;
  margin: ${(props) => props.styled?.margin};
  max-width: ${(props) => props.styled?.['max-width']};
  position: ${(props) => props.styled?.position};
  width: ${(props) => props.styled?.width};
  z-index: ${(props) => props.styled?.['z-index']};
`;

export default StyledImg;
