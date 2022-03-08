import { FC } from 'react';
import Div from '../../utility/div/Div';
import HTag from '../../utility/htag/HTag';
import Img from '../../utility/img/Img';
import P from '../../utility/p/P';
import StyledCommendCard from './CommendCard.styled';

interface CommendCardProps {
  author: {
    name: string;
    title: string;
  };
  description: {
    body: string;
  };
  image: {
    alt: string;
    src: string;
  };
}

const CommendCard: FC<CommendCardProps> = (props) => {
  return (
    <StyledCommendCard>
      <Div>
        <P>{props.description.body}</P>
      </Div>
      <Div>
        <HTag>{props.author.name}</HTag>
        <P>{props.author.title}</P>
      </Div>
      <Img attrs={{ alt: props.image.alt, src: props.image.src }} />
    </StyledCommendCard>
  );
};

export default CommendCard;
