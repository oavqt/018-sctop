import styled from 'styled-components';

interface StyledImgProps {
  attrs: {
    alt: string;
    src: string;
  };
  styled?: {
    width?: string;
  };
}

const StyledImg = styled.img.attrs((props: StyledImgProps) => ({
  alt: props.attrs.alt,
  src: props.attrs.src
}))<StyledImgProps>`
  height: auto;
  width: ${(props) => (props.styled?.width ? props.styled?.width : '100%')};
`;

export default StyledImg;
