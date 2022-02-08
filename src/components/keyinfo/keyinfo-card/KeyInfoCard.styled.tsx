import styled from 'styled-components';

interface StyledKeyInfoCardProps {
  styled?: {
    'align-items'?: string;
    animation?: string;
    display?: string;
    'flex-direction'?: string;
    height?: string;
    'justify-content'?: string;
    width?: string;
  };
}

const StyledKeyInfoCard = styled.article<StyledKeyInfoCardProps>`
  align-items: ${(props) => props.styled?.['align-items']};
  animation: ${(props) => props.styled?.animation};
  display: ${(props) => props.styled?.display};
  flex-direction: ${(props) => props.styled?.['flex-direction']};
  height: ${(props) => props.styled?.height};
  justify-content: ${(props) => props.styled?.['justify-content']};
  width: ${(props) => props.styled?.width};
`;

export default StyledKeyInfoCard;
