import styled from 'styled-components';

interface StyledHTagProps {
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

const StyledHTag = styled.h3.attrs((props: StyledHTagProps) => ({
  as: props.attrs?.type
}))<StyledHTagProps>`
  color: ${(props) => props.styled?.color};
  font-family: ${(props) => props.styled?.['font-family']};
  font-size: ${(props) => props.styled?.['font-size']};
  margin: ${(props) => props.styled?.margin};
  text-align: ${(props) => props.styled?.['text-align']};
`;

export default StyledHTag;
