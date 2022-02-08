import styled from 'styled-components';

interface StyledDivProps {
  styled?: {
    'align-items'?: string;
    animation?: string;
    display?: string;
    'flex-direction'?: string;
    height?: string;
    'justify-content'?: string;
    'text-align'?: string;
    width?: string;
  };
}

const StyledDiv = styled.div<StyledDivProps>`
  align-items: ${(props) => props.styled?.['align-items']};
  animation: ${(props) => props.styled?.animation};
  display: ${(props) => props.styled?.display};
  flex-direction: ${(props) => props.styled?.['flex-direction']};
  height: ${(props) => props.styled?.height};
  justify-content: ${(props) => props.styled?.['justify-content']};
  text-align: ${(props) => props.styled?.['text-align']};
  width: ${(props) => props.styled?.width};
`;

export default StyledDiv;
