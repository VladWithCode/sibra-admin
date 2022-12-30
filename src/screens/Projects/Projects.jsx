import React from 'react';
import ProjectCard from '../../components/Projects/ProjectCard';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import ProjectMenu from '../../components/Projects/ProjectMenu';
import useProjects from '../../context/Projects/useProjects';
import Screen from '../../components/Screen/Screen';

function Projects() {
  const { projects, loading } = useProjects();

  return (
    <Screen>
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
    </Screen>
  );
}

export default Projects;
