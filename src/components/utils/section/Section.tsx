import { FC } from 'react';
import StyledSection from './Section.styled';

interface SectionProps {
  styled?: {
    display?: string;
    'justify-content'?: string;
    width?: string;
  };
}

const Section: FC<SectionProps> = (props) => {
  return (
    <StyledSection styled={{ ...props.styled }}>{props.children}</StyledSection>
  );
};

export default Section;
