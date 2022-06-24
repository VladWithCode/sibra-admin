import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProjectHeading from '../../components/Projects/ProjectHeading';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import BackBtn from '../../components/UI/BackBtn';
import NavigationContext from '../../context/Navigation/NavigationContext';
import useProjects from '../../context/Projects/useProjects';
import DetailsSection from '../../components/Projects/DetailsSection';
import LotsSection from '../../components/Projects/LotsSection';
import StatSection from '../../components/Projects/StatSection';
import FileSection from '../../components/Projects/FileSection';

function Project() {
  const { pid } = useParams();
  const { setLink, forceReset } = useContext(NavigationContext);
  const { projects, project: index } = useProjects({ id: pid });
  const [project, setProject] = useState(projects[index]);

  useEffect(() => {
    if (!project && projects?.length > 0) {
      setProject(projects.find(p => p._id === pid));
    }
  }, [pid, projects, index]);

  return (
    <div className='projectpage ui-screen dark'>
      <ScreenHeader
        heading={<ProjectHeading heading={project?.name} />}></ScreenHeader>
      {(!project && (
        <div
          className='ui-screen__body d-f'
          style={{ '--spin-sz': '7.5rem', '--spin-w': '1rem' }}>
          <div className='ui-spinner'></div>
        </div>
      )) || (
        <div className='ui-screen__body project-details__body --scroll'>
          <DetailsSection project={project} />
          <LotsSection project={project} />
          {false && <StatSection project={project} />}
          <FileSection project={project} />
        </div>
      )}
      <BackBtn to='/projects' onClick={() => forceReset('projects')} />
    </div>
  );
}

export default Project;
