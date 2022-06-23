import React, { useContext, useState } from 'react';
import ProjectHeading from '../../components/Projects/ProjectHeading';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import BackBtn from '../../components/UI/BackBtn';
import ProjectContext from '../../context/Projects/ProjectContext';

function Project() {
  const { projects, project: index } = useContext(ProjectContext);
  const [project, setProject] = useState(projects[index]);

  const { name } = project;

  return (
    <div className='projectpage ui-screen'>
      <ScreenHeader heading={<ProjectHeading heading={name} />}></ScreenHeader>

      <BackBtn />
    </div>
  );
}

export default Project;
