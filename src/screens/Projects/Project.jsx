import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProjectHeading from '../../components/Projects/ProjectHeading';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import BackBtn from '../../components/UI/BackBtn';
import DetailsSection from '../../components/Projects/DetailsSection';
import LotsSection from '../../components/Projects/LotsSection';
import StatSection from '../../components/Projects/StatSection';
import FileSection from '../../components/Projects/FileSection';
import ChargeSection from '../../components/Projects/ChargeSection';
import Screen from '../../components/Screen/Screen';
import useNavigation from '../../context/navigation/useNavigation';
import { useGetProjectById } from '../../services/projects/useProjectQueries';
import ErrorScreen from '../../components/Screen/ErrorScreen';
import LoadingScreen from '../../components/Screen/LoadingScreen';
import ScreenBody from '../../components/Screen/ScreenBody';

function Project() {
  const { pid } = useParams();
  const resetLink = useNavigation((state) => state.resetLink);
  const { isLoading, isError, data } = useGetProjectById(pid);

  if (isError)
    return (
      <ErrorScreen
        error={{
          message: 'Ocurrio un error al recuperar el proyecto solicitado',
        }}
      />
    );

  if (isLoading) return <LoadingScreen />;

  const { project } = data;

  return (
    <Screen>
      <ScreenHeader
        heading={<ProjectHeading heading={project.name} />}
      ></ScreenHeader>
      <ScreenBody maxCols={2}>
        <DetailsSection project={project} />
        <LotsSection project={project} />
        {false && <StatSection project={project} />}
        <FileSection files={project.files} />
        <ChargeSection projectId={project._id} charges={project.extraCharges} />
      </ScreenBody>
      <BackBtn to="/projects" onClick={() => resetLink('projectsLink')} />
    </Screen>
  );
}

export default Project;
