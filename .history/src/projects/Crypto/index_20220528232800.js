import BaseProject from '../BaseProject';

import mainImage from './assets/Crypto.jpeg';
import video from './assets/crypto.webm';
// import image1 from './assets/main.jpeg';
// import image2 from './assets/img2.jpeg';
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
    title: 'Mega Evaluation',
    name: 'Mega Evaluation',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste. Eligendi, incidunt? Voluptatum est sed molestiae quisquam cupiditate perspiciatis illum.',
    mainImage,
    video,
    // images: [image1, image2],
    features,
});

export default nft;
