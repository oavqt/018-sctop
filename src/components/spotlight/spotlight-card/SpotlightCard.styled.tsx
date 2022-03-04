import styled from 'styled-components';

interface StyledSpotlightProps {
  styled?: {
    'align-items'?: string;
    display?: string;
    gap?: string;
    'grid-template'?: string;
    'justify-content'?: string;
  };
}

const StyledSpotlightCard = styled.article<StyledSpotlightProps>`
  align-items: ${(props) => props.styled?.['align-items']};
  display: ${(props) => props.styled?.display};
  gap: ${(props) => props.styled?.gap};
  grid-template: ${(props) => props.styled?.['grid-template']};
  justify-content: ${(props) => props.styled?.['justify-content']};
`;

export default StyledSpotlightCard;
