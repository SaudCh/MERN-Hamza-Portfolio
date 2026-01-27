import ProjectCard from './ProjectCard';
import { projectsData } from './data/projectsData';

export default function ProjectsGrid({ isDarkMode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}
