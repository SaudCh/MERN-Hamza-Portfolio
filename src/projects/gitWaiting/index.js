import BaseProject from '../BaseProject';

import mainImage from './assets/gitWaiting.jpeg';
import video from './assets/gitwaiting.webm';
// import image1 from './assets/image1.jpg';
// import image2 from './assets/image2.jpg';
// import image3 from './assets/image3.jpg';
// import image4 from './assets/image4.jpg';

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

const nft = new BaseProject({
  title: 'Git Waiting',
  name: 'Git Waiting',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste. Eligendi, incidunt? Voluptatum est sed molestiae quisquam cupiditate perspiciatis illum.',
  mainImage,
  video,
  // images: [image1, image2, image3, image4],
  features,
});

export default nft;
