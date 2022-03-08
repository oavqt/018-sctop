import styled from 'styled-components';

interface StyledImgProps {
  attrs: {
    alt: string;
    src: string;
  };
  styled?: {
    position?: string;
    'max-width'?: string;
    width?: string;
    'z-index'?: string;
  };
}

const StyledImg = styled.img.attrs((props: StyledImgProps) => ({
  alt: props.attrs.alt,
  src: props.attrs.src
}))<StyledImgProps>`
  height: auto;
  position: ${(props) => props.styled?.position};
  max-width: ${(props) => props.styled?.['max-width']};
  width: ${(props) => props.styled?.width};
  z-index: ${(props) => props.styled?.['z-index']};
`;

export default StyledImg;
