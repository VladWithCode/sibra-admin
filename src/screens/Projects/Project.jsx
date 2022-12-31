import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProjectHeading from '../../components/Projects/ProjectHeading';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import BackBtn from '../../components/UI/BackBtn';
import useProjects from '../../context/Projects/useProjects';
import DetailsSection from '../../components/Projects/DetailsSection';
import LotsSection from '../../components/Projects/LotsSection';
import StatSection from '../../components/Projects/StatSection';
import FileSection from '../../components/Projects/FileSection';
import ChargeSection from '../../components/Projects/ChargeSection';
import Screen from '../../components/Screen/Screen';
import useNavigation from '../../context/navigation/useNavigation';

function Project() {
  const { pid } = useParams();
  const resetLink = useNavigation((state) => state.resetLink);
  const { projects, project: index } = useProjects({ id: pid });
  const [project, setProject] = useState(projects[index]);

  useEffect(() => {
    if (!project && projects?.length > 0) {
      setProject(projects.find((p) => p._id === pid));
    }
  }, [pid, projects, index]);

  return (
    <Screen>
      <ScreenHeader
        heading={<ProjectHeading heading={project?.name} />}
      ></ScreenHeader>
      {(!project && (
        <div
          className="ui-screen__body d-f"
          style={{ '--spin-sz': '7.5rem', '--spin-w': '1rem' }}
        >
          <div className="ui-spinner"></div>
        </div>
      )) || (
        <div className="ui-screen__body project-details__body --scroll">
          <DetailsSection project={project} />
          <LotsSection project={project} />
          {false && <StatSection project={project} />}
          <FileSection project={project} />
          <ChargeSection project={project} />
        </div>
      )}
      <BackBtn to="/projects" onClick={() => resetLink('projectsLink')} />
    </Screen>
  );
}

export default Project;
