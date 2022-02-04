import styled from 'styled-components';

interface StyledH1Props {
  styled?: {
    'align-self'?: string;
    color?: string;
    'font-family'?: string;
    'font-size'?: string;
    margin?: string;
  };
}

const StyledH1 = styled.h1<StyledH1Props>`
  align-self: ${(props) => props.styled?.['align-self']};
  color: ${(props) => props.styled?.color};
  font-family: ${(props) => props.styled?.['font-family']};
  font-size: ${(props) => props.styled?.['font-size']};
  margin: ${(props) => (props.styled?.margin ? props.styled?.margin : '0')};
`;

export default StyledH1;
