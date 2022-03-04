import { v4 as uuidv4 } from 'uuid';
import vlogo from './images/vlogo.png';
import vhero from './images/vhero.png';
import vhero1 from './images/vhero1.png';
import vhero2 from './images/vhero2.png';
import vhero3 from './images/vhero3.png';

const assets = {
  vlogo: {
    description: { title: "le vt'que, veatae, quibusdam" },
    image: { id: uuidv4(), src: vlogo, alt: 'header-logo' }
  },
  vhero: [
    {
      description: { title: "le vt'que, veatae, quibusdam" },
      image: { alt: 'home-hero', id: uuidv4(), src: vlogo }
    },
    {
      description: { title: "le vt'que, veatae, quibusdam" },
      image: { alt: 'home-hero-second', id: uuidv4(), src: vhero }
    },
    {
      description: { title: "le vt'que, veatae, quibusdam" },
      image: { alt: 'home-hero-third', id: uuidv4(), src: vhero1 }
    },
    {
      description: { title: "le vt'que, veatae, quibusdam" },
      image: { alt: 'home-hero-fourth', id: uuidv4(), src: vhero2 }
    },
    {
      description: { title: "le vt'que, veatae, quibusdam" },
      image: { alt: 'home-hero-fifth', id: uuidv4(), src: vhero3 }
    }
  ],
  vcard: [
    {
      description: {
        title:
          "le vt'que, veatae, quibusdam. quod reprehenderit cupiditate non autem vel corrupti?",
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: { alt: 'home-keyinfo', id: uuidv4(), src: vhero },
      layout: 'right'
    },
    {
      description: {
        title:
          "le vt'que, veatae, quibusdam. quod reprehenderit cupiditate non autem vel corrupti?",
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: { alt: 'home-keyinfo-first', id: uuidv4(), src: vhero1 },
      layout: 'left'
    },
    {
      description: {
        title:
          "le vt'que, veatae, quibusdam. quod reprehenderit cupiditate non autem vel corrupti?",
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: { alt: 'home-keyinfo-second', id: uuidv4(), src: vhero3 },
      layout: 'right'
    }
  ],
  vspotlight: [
    {
      description: {
        title:
          "le vt'que, veatae, quibusdam. quod reprehenderit cupiditate non autem vel corrupti?",
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: [
        { alt: 'home-spotlight-first', id: uuidv4(), src: vhero },
        { alt: 'home-spotlight-first', id: uuidv4(), src: vhero },
        { alt: 'home-spotlight-first', id: uuidv4(), src: vhero },
        { alt: 'home-spotlight-first', id: uuidv4(), src: vhero }
      ],
      layout: 'spotlight-multiple-left'
    },
    {
      description: {
        title:
          "le vt'que, veatae, quibusdam. quod reprehenderit cupiditate non autem vel corrupti?",
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: [
        { alt: 'home-spotlight-multiple-first', id: uuidv4(), src: vhero1 },
        { alt: 'home-spotlight-multiple-second', id: uuidv4(), src: vhero1 },
        { alt: 'home-spotlight-multiple-third', id: uuidv4(), src: vhero1 },
        { alt: 'home-spotlight-multiple-first', id: uuidv4(), src: vhero1 },
        { alt: 'home-spotlight-multiple-second', id: uuidv4(), src: vhero1 },
        { alt: 'home-spotlight-multiple-third', id: uuidv4(), src: vhero1 }
      ],
      layout: 'spotlight-multiple-center'
    },
    {
      description: {
        title:
          "le vt'que, veatae, quibusdam. quod reprehenderit cupiditate non autem vel corrupti?",
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: [
        { alt: 'home-spotlight-last', id: uuidv4(), src: vhero3 },
        { alt: 'home-spotlight-last', id: uuidv4(), src: vhero3 }
      ],
      layout: 'spotlight-single-right'
    }
  ]
};

export default assets;
