import { v4 as uuidv4 } from 'uuid';
import vlogo from './images/vlogo.png';

const assets = {
  vlogo: {
    name: 'header-logo',
    id: uuidv4(),
    image: vlogo
  },
  vhero: [
    {
      name: 'home-hero',
      id: uuidv4(),
      image: vlogo
    },
    {
      name: 'home-hero-second',
      id: uuidv4(),
      image: vlogo
    },
    {
      name: 'home-hero-third',
      id: uuidv4(),
      image: vlogo
    },
    {
      name: 'home-hero-fourth',
      id: uuidv4(),
      image: vlogo
    },
    {
      name: 'home-hero-fifth',
      id: uuidv4(),
      image: vlogo
    }
  ]
};

export default assets;
