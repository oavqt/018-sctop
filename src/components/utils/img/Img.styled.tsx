import styled from 'styled-components';

interface StyledImgProps {
  attrs: {
    alt: string;
    src: string;
  };
  styled?: {
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
  position: ${(props) => props.styled?.position};
  width: ${(props) => (props.styled?.width ? props.styled?.width : '100%')};
  z-index: ${(props) => props.styled?.['z-index']};
`;

export default StyledImg;
