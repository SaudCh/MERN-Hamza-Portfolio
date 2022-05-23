import BaseProject from '../BaseProject';

import mainImage from './assets/main.jpeg';
import video from './assets/video.webm';
import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';

const features = [
  {
    title: 'Feature 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste. Eligendi, incidunt? Voluptatum est sed molestiae quisquam cupiditate perspiciatis illum.',
  },
  {
    title: 'Feature 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste. Eligendi, incidunt? Voluptatum est sed molestiae quisquam cupiditate perspiciatis illum.',
  },
  {
    title: 'Feature 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste. Eligendi, incidunt? Voluptatum est sed molestiae quisquam cupiditate perspiciatis illum.',
  },
];

const pigeonGame = new BaseProject({
  title: 'Pigeon Fighter Game',
  name: 'Pigeon Fighter Club',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste. Eligendi, incidunt? Voluptatum est sed molestiae quisquam cupiditate perspiciatis illum.',
  mainImage,
  video,
  images: [image1, image2, image3],
  features,
});

export default pigeonGame;
