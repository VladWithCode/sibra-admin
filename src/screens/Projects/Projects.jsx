import React from 'react';
import ProjectCard from '../../components/Projects/ProjectCard';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import ProjectMenu from '../../components/Projects/ProjectMenu';
import useProjects from '../../context/Projects/useProjects';

function Projects() {
  const { projects, loading } = useProjects();

  return (
    <div className='projectpage ui-screen'>
      <ScreenHeader heading='Proyectos'></ScreenHeader>
      {loading ? (
        <div className='d-f'>
          <div className='ui-spinner'></div>
        </div>
      ) : (
        <div className='projectpage__listing p-3'>
          {projects.map(p => (
            <ProjectCard project={p} key={p._id} />
          ))}
        </div>
      )}
      <ProjectMenu />
    </div>
  );
}

export default Projects;
