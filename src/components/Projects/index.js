import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import ProjectDetails from './ProjectDetails';
import projects from '../../projects';

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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="container mx-auto py-6 px-8 sm:px-12">
      <h3 className="text-primary  col-span-2 text-center text-xl font-bold md:text-left">
        Projects
      </h3>
      <Carousel responsive={responsive} infinite containerClass="mt-10">
        {projects.map((project) => (
          <div className=" px-4 md:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-gray-400 px-28 py-40 shadow-md">
              <img
                src={project.mainImage}
                alt={project.name}
                className="absolute inset-0 h-full w-full cursor-pointer object-cover"
                onClick={() => setSelectedProject(project)}
              />
            </div>
            <p className="text-center">{project.title}</p>
          </div>
        ))}
      </Carousel>

      {selectedProject && <ProjectDetails project={selectedProject} />}
    </section>
  );
};

export default Projects;
