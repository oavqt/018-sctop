import { v4 as uuidv4 } from 'uuid';
import vlogo from './images/vlogo.png';
import vhero from './images/vhero.png';
import vhero1 from './images/vhero1.png';
import vhero2 from './images/vhero2.png';
import vhero3 from './images/vhero3.png';
import vmobilebannerapple from './images/vapple.png';
import vmobilebanneraplay from './images/vplay.png';
import vfootergithub from './images/vgithub.png';
import vfooterlinkedin from './images/vlinkedin.png';
import vfootertwitter from './images/vtwitter.png';
import vfooterinstagram from './images/vinstagram.png';
import vfooterfacebook from './images/vfacebook.png';

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
        { alt: 'home-spotlight-last', id: uuidv4(), src: vhero3 },
        { alt: 'home-spotlight-last', id: uuidv4(), src: vhero3 }
      ],
      layout: 'spotlight-image'
    }
  ],
  vcommend: [
    {
      author: { name: "le'quibusdam,", title: "le'esquape" },
      description: {
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: { alt: 'home-keyinfo', id: uuidv4(), src: vhero }
    },
    {
      author: { name: "le'quibusdam,", title: "le'esquape" },
      description: {
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: { alt: 'home-keyinfo-first', id: uuidv4(), src: vhero1 }
    },
    {
      author: { name: "le'quibusdam,", title: "le'esquape" },
      description: {
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: { alt: 'home-keyinfo-second', id: uuidv4(), src: vhero3 }
    },
    {
      author: { name: "le'quibusdam,", title: "le'esquape" },
      description: {
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: { alt: 'home-keyinfo', id: uuidv4(), src: vhero }
    },
    {
      author: { name: "le'quibusdam,", title: "le'esquape" },
      description: {
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: { alt: 'home-keyinfo-first', id: uuidv4(), src: vhero1 }
    },
    {
      author: { name: "le'quibusdam,", title: "le'esquape" },
      description: {
        body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
      },
      image: { alt: 'home-keyinfo-second', id: uuidv4(), src: vhero3 }
    }
  ],
  vmobilebanner: {
    description: {
      title:
        "le vt'que, veatae, quibusdam. quod reprehenderit cupiditate non autem vel corrupti?",
      body: "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
    },
    image: [
      { alt: 'home-mobile-apple', id: uuidv4(), src: vmobilebannerapple },
      { alt: 'home-mobile-android', id: uuidv4(), src: vmobilebanneraplay }
    ]
  },
  vfootersocial: [
    { alt: 'footer-github', id: uuidv4(), path: 'unknown', src: vfootergithub },
    {
      alt: 'footer-linkedin',
      id: uuidv4(),
      path: 'unknown',
      src: vfooterlinkedin
    },
    {
      alt: 'footer-twitter',
      id: uuidv4(),
      path: 'unknown',
      src: vfootertwitter
    },
    {
      alt: 'footer-instagram',
      id: uuidv4(),
      path: 'unknown',
      src: vfooterinstagram
    },
    {
      alt: 'footer-facebook',
      id: uuidv4(),
      path: 'unknown',
      src: vfooterfacebook
    }
  ]
};

export default assets;
