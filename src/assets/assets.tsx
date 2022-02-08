import { v4 as uuidv4 } from 'uuid';
import vlogo from './images/vlogo.png';
import vhero from './images/vhero.png';
import vhero1 from './images/vhero1.png';
import vhero2 from './images/vhero2.png';
import vhero3 from './images/vhero3.png';

const assets = {
  vlogo: {
    description: "le vt'que, veatae, quibusdam",
    name: 'header-logo',
    id: uuidv4(),
    image: vlogo
  },
  vhero: [
    {
      description: "le vt'que, veatae, quibusdam",
      name: 'home-hero',
      id: uuidv4(),
      image: vlogo
    },
    {
      description: "le vt'que, veatae, quibusdam",
      name: 'home-hero-second',
      id: uuidv4(),
      image: vhero
    },
    {
      description: "le vt'que, veatae, quibusdam",
      name: 'home-hero-third',
      id: uuidv4(),
      image: vhero1
    },
    {
      description: "le vt'que, veatae, quibusdam",
      name: 'home-hero-fourth',
      id: uuidv4(),
      image: vhero2
    },
    {
      description: "le vt'que, veatae, quibusdam",
      name: 'home-hero-fifth',
      id: uuidv4(),
      image: vhero3
    }
  ]
};

export default assets;
