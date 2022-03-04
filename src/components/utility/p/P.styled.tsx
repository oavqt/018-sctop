import styled from 'styled-components';

interface StyledPProps {
  styled?: {
    color?: string;
    'font-family'?: string;
    'font-size'?: string;
    margin?: string;
    'text-align'?: string;
    width?: string;
  };
}

const StyledP = styled.p<StyledPProps>`
  color: ${(props) => props.styled?.color};
  font-family: ${(props) => props.styled?.['font-family']};
  font-size: ${(props) => props.styled?.['font-size']};
  margin: ${(props) => props.styled?.margin};
  text-align: ${(props) => props.styled?.['text-align']};
  width: ${(props) => props.styled?.width};
`;

export default StyledP;
