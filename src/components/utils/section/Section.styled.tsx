import styled from 'styled-components';

interface StyledSectionProps {
  styled?: {
    width?: string;
  };
}

const StyledSection = styled.section<StyledSectionProps>`
  width: ${(props) => (props.styled?.width ? props.styled?.width : '100%')};
`;

export default StyledSection;
