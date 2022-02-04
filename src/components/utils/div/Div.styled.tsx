import styled from 'styled-components';

interface StyledDivProps {
  styled?: {
    'align-items'?: string;
    display?: string;
    'justify-content'?: string;
    width?: string;
  };
}

const StyledDiv = styled.div<StyledDivProps>`
  align-items: ${(props) =>
    props.styled?.['align-items'] ? props.styled?.['align-items'] : 'center'};
  display: ${(props) =>
    props.styled?.display ? props.styled?.display : 'block'};
  justify-content: ${(props) =>
    props.styled?.['justify-content']
      ? props.styled?.['justify-content']
      : 'center'};
  width: ${(props) => (props.styled?.width ? props.styled?.width : '100%')};
`;

export default StyledDiv;
