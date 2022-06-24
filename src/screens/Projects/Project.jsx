import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProjectHeading from '../../components/Projects/ProjectHeading';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import BackBtn from '../../components/UI/BackBtn';
import ProjectContext from '../../context/Projects/ProjectContext';
import useProjects from '../../context/Projects/useProjects';
import { useToast } from '../../hooks/useToast';

function Project() {
  const { pid } = useParams();
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
        <div className='ui-screen__body project-details__body'>
          <div className='ui-card --shadow'></div>
          <div className='ui-card --shadow'></div>
        </div>
      )}
      <BackBtn />
    </div>
  );
}

export default Project;
