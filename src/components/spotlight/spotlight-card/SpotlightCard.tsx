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
      case 'spotlight-multiple-left': {
        setElement(
          <StyledSpotlightCard
            styled={{
              'align-items': 'center',
              display: 'grid',
              'justify-content': 'center',
              gap: '2em',
              'grid-template': '1fr / repeat(2, 1fr)'
            }}
          >
            <Div
              styled={{
                'align-items': 'center',
                display: 'grid',
                'justify-content': 'center',
                'grid-template': '1fr / repeat(2, 1fr)'
              }}
            >
              {props.image.map((img) => (
                <Img
                  key={uuidv4()}
                  attrs={{ alt: img.alt, src: img.src }}
                  styled={{ width: '25em' }}
                />
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
      case 'spotlight-multiple-center': {
        setElement(
          <StyledSpotlightCard
            styled={{
              display: 'grid',
              'justify-content': 'center',
              gap: '2em'
            }}
          >
            <Div
              styled={{
                display: 'flex',
                'flex-wrap': 'wrap',
                'justify-content': 'center'
              }}
            >
              {props.image.map((img) => (
                <Img
                  key={uuidv4()}
                  attrs={{ alt: img.alt, src: img.src }}
                  styled={{ width: '25em' }}
                />
              ))}
            </Div>
            <Div>
              <HTag styled={{ 'text-align': 'center' }}>
                {props.description.title}
              </HTag>
              <P
                styled={{
                  margin: 'auto',
                  'text-align': 'center',
                  width: '50%'
                }}
              >
                {props.description.body}
              </P>
            </Div>
          </StyledSpotlightCard>
        );
        break;
      }
      case 'spotlight-single-right': {
        setElement(
          <StyledSpotlightCard
            styled={{
              'align-items': 'center',
              display: 'grid',
              gap: '2em',
              'grid-template': '1fr / repeat(2, 1fr)',
              'justify-content': 'center'
            }}
          >
            <Div>
              <HTag>{props.description.title}</HTag>
              <P>{props.description.body}</P>
            </Div>
            <Div styled={{ display: 'flex' }}>
              {props.image.map((img) => (
                <Img
                  key={uuidv4()}
                  attrs={{ alt: img.alt, src: img.src }}
                  styled={{ width: '25em' }}
                />
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
