import React from 'react';
import ProjectCard from '../../components/Projects/ProjectCard';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import ProjectMenu from '../../components/Projects/ProjectMenu';
import Screen from '../../components/Screen/Screen';
import { useGetProjects } from '../../services/projects/useProjectQueries';
import ErrorScreen from '../../components/Screen/ErrorScreen';
import LoadingScreen from '../../components/Screen/LoadingScreen';
import ScreenBody from '../../components/Screen/ScreenBody';

function Projects() {
  const { data, isLoading, isError } = useGetProjects({});

  if (isError)
    return (
      <ErrorScreen
        error={{
          message: 'Ocurrio un error al recuperar el proyecto solicitado',
        }}
      />
    );

  if (isLoading) return <LoadingScreen />;

  return (
    <Screen>
      <ScreenHeader heading="Proyectos"></ScreenHeader>
      <ScreenBody className="auto-rows-[15rem]" maxCols={3}>
        {data.projects.map((p) => (
          <ProjectCard project={p} key={p._id} />
        ))}
      </ScreenBody>
      <ProjectMenu />
    </Screen>
  );
}

export default Projects;
