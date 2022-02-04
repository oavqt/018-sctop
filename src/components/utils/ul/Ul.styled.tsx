import styled from 'styled-components';

interface StyledUlProps {
  styled?: {
    'align-items'?: string;
    display?: string;
    'justify-content'?: string;
    'list-style'?: string;
    width?: string;
  };
}

const StyledUl = styled.ul<StyledUlProps>`
  align-items: ${(props) =>
    props.styled?.['align-items'] ? props.styled?.['align-items'] : 'center'};
  display: ${(props) =>
    props.styled?.display ? props.styled?.display : 'block'};
  justify-content: ${(props) =>
    props.styled?.['justify-content']
      ? props.styled?.['justify-content']
      : 'center'};
  list-style: ${(props) =>
    props.styled?.['list-style'] ? props.styled?.['list-style'] : 'none'};
  width: ${(props) => (props.styled?.width ? props.styled?.width : '100%')};
`;

export default StyledUl;
