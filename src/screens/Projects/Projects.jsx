import React, { useContext, useEffect } from 'react';
import ProjectCard from '../../components/Projects/ProjectCard';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import ProjectContext from '../../context/Projects/ProjectContext';
import { useToast } from '../../hooks/useToast';
import { getProjects } from '../../services/ProjectService';
import ProjectMenu from '../../components/Projects/ProjectMenu';

function Projects() {
  const { projects, setProjects } = useContext(ProjectContext);
  const { displayErrorToast } = useToast();

  useEffect(() => {
    const _getProjects = async () => {
      const { projects, failed, toastMessage } = await getProjects();

      if (failed) return displayErrorToast(toastMessage, true);

      setProjects(projects);
    };

    if (!projects || projects.length === 0) _getProjects();
  }, []);

  return (
    <div className='projectpage ui-screen'>
      <ScreenHeader heading='Proyectos'></ScreenHeader>
      <div className='projectpage__listing p-3'>
        {projects.map(p => (
          <ProjectCard project={p} key={p._id} />
        ))}
      </div>
      <ProjectMenu />
    </div>
  );
}

export default Projects;
