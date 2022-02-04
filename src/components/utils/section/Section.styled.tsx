import styled from 'styled-components';

interface StyledSectionProps {
  styled?: {
    display?: string;
    'justify-content'?: string;
    width?: string;
  };
}

const StyledSection = styled.section<StyledSectionProps>`
  display: ${(props) => props.styled?.display};
  justify-content: ${(props) => props.styled?.['justify-content']};
  width: ${(props) => (props.styled?.width ? props.styled?.width : '100%')};
`;

export default StyledSection;
