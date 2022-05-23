import Carousel from 'react-multi-carousel';
import Features from './Features';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 564 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 564, min: 0 },
    items: 1,
  },
};

const ProjectDetails = ({ project }) => {
  return (
    <div className="mt-10">
      <h3 className="text-primary col-span-2 text-center font-bold ">
        {project.title}
      </h3>

      <div className="width-full mt-6 aspect-video overflow-hidden rounded-md bg-gray-400 md:mx-10 lg:mx-32">
        {project.video ? (
          <video
            className="h-full w-full object-cover"
            controls
            controlsList="nodownload noremoteplayback"
            src={project.video}
            autoPlay
            muted
          />
        ) : (
          <img
            className="h-full w-full object-cover"
            src={project.mainImage}
            alt={project.name}
          />
        )}
      </div>

      {project.images?.length > 0 && (
        <Carousel
          responsive={responsive}
          infinite
          containerClass="mt-12 md:mx-4 lg:mx-16"
        >
          {project.images.map((image) => (
            <div className="px-4 md:px-8">
              <div className="relative overflow-hidden rounded-3xl bg-gray-400 px-16 py-32 shadow-md">
                <img
                  src={image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </Carousel>
      )}

      <Features features={project.features} />
    </div>
  );
};

export default ProjectDetails;
