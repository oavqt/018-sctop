import styled from 'styled-components';

interface StyledH1Props {
  styled?: {
    color?: string;
    'font-family'?: string;
    'font-size'?: string;
    'text-align'?: string;
  };
}

const StyledH1 = styled.h1<StyledH1Props>`
  color: ${(props) => props.styled?.color};
  font-family: ${(props) => props.styled?.['font-family']};
  font-size: ${(props) => props.styled?.['font-size']};
  text-align: ${(props) => props.styled?.['text-align']};
`;

export default StyledH1;
