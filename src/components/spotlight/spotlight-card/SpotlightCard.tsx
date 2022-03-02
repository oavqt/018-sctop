import { FC, Fragment, ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Div from '../../utility/div/Div';
import HTag from '../../utility/htag/HTag';
import Img from '../../utility/img/Img';
import P from '../../utility/p/P';
import StyledSpotlightCard from './SpotlightCard.styled';

interface SpotlightCardProps {
  description: {
    title: string;
    body: string;
  };
  image: {
    alt: string;
    src: string;
  }[];
  layout: string;
}

const SpotlightCard: FC<SpotlightCardProps> = (props) => {
  const [element, setElement] = useState<ReactElement>();

  useEffect(() => {
    switch (props.layout) {
      case 'spotlight-left': {
        setElement(
          <StyledSpotlightCard>
            <Div>
              {props.image.map((img) => (
                <Img key={uuidv4()} attrs={{ alt: img.alt, src: img.src }} />
              ))}
            </Div>
            <Div>
              <HTag>{props.description.title}</HTag>
              <P>{props.description.body}</P>
            </Div>
          </StyledSpotlightCard>
        );
        break;
      }
      case 'spotlight-multiple': {
        setElement(
          <StyledSpotlightCard>
            <Div>
              {props.image.map((img) => (
                <Img key={uuidv4()} attrs={{ alt: img.alt, src: img.src }} />
              ))}
            </Div>
            <Div>
              <HTag>{props.description.title}</HTag>
              <P>{props.description.body}</P>
            </Div>
          </StyledSpotlightCard>
        );
        break;
      }
      case 'spotlight-right': {
        setElement(
          <StyledSpotlightCard>
            <Div>
              <HTag>{props.description.title}</HTag>
              <P>{props.description.body}</P>
            </Div>
            <Div>
              {props.image.map((img) => (
                <Img key={uuidv4()} attrs={{ alt: img.alt, src: img.src }} />
              ))}
            </Div>
          </StyledSpotlightCard>
        );
        break;
      }
      default: {
        setElement(
          <StyledSpotlightCard>
            <Div>
              {props.image.map((img) => (
                <Img key={uuidv4()} attrs={{ alt: img.alt, src: img.src }} />
              ))}
            </Div>
            <Div>
              <HTag>{props.description.title}</HTag>
              <P>{props.description.body}</P>
            </Div>
          </StyledSpotlightCard>
        );
        break;
      }
    }
  }, [props]);

  return <Fragment>{element}</Fragment>;
};

export default SpotlightCard;
