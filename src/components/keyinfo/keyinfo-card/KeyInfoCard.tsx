import { FC, Fragment, ReactElement, useEffect, useState } from 'react';
import Div from '../../utility/div/Div';
import HTag from '../../utility/htag/HTag';
import Img from '../../utility/img/Img';
import P from '../../utility/p/P';
import StyledKeyInfoCard from './KeyInfoCard.styled';

interface KeyInfoCardProps {
  description: {
    title: string;
    body: string;
  };
  image: {
    alt: string;
    src: string;
  };
  layout: string;
}

const KeyInfoCard: FC<KeyInfoCardProps> = (props) => {
  const [element, setElement] = useState<ReactElement>();

  useEffect(() => {
    switch (props.layout) {
      case 'left': {
        setElement(
          <StyledKeyInfoCard
            styled={{
              'align-items': 'center',
              display: 'flex',
              'justify-content': 'center'
            }}
          >
            <Div styled={{ display: 'flex', 'justify-content': 'center' }}>
              <Img
                attrs={{ alt: props.image.alt, src: props.image.src }}
                styled={{ width: '100%' }}
              />
            </Div>
            <Div styled={{ width: '75%' }}>
              <HTag>{props.description.title}</HTag>
              <P>{props.description.body}</P>
            </Div>
          </StyledKeyInfoCard>
        );
        break;
      }
      case 'right': {
        setElement(
          <StyledKeyInfoCard
            styled={{
              'align-items': 'center',
              display: 'flex',
              'justify-content': 'center'
            }}
          >
            <Div styled={{ width: '75%' }}>
              <HTag>{props.description.title}</HTag>
              <P>{props.description.body}</P>
            </Div>
            <Div styled={{ display: 'flex', 'justify-content': 'center' }}>
              <Img
                attrs={{ alt: props.image.alt, src: props.image.src }}
                styled={{ width: '100%' }}
              />
            </Div>
          </StyledKeyInfoCard>
        );
        break;
      }
      default: {
        setElement(
          <StyledKeyInfoCard
            styled={{
              'align-items': 'center',
              display: 'flex',
              'justify-content': 'center'
            }}
          >
            <Div styled={{ display: 'flex', 'justify-content': 'center' }}>
              <Img
                attrs={{ alt: props.image.alt, src: props.image.src }}
                styled={{ width: '100%' }}
              />
            </Div>
            <Div styled={{ width: '75%' }}>
              <HTag>{props.description.title}</HTag>
              <P>{props.description.body}</P>
            </Div>
          </StyledKeyInfoCard>
        );
      }
    }
  }, [props]);

  return <Fragment>{element}</Fragment>;
};

export default KeyInfoCard;
