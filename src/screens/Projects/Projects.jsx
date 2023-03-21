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
  const { data, isLoading, isError, error } = useGetProjects({});

  if (isError) return <ErrorScreen error={error} />;

  if (isLoading) return <LoadingScreen />;

  return (
    <Screen>
      <ScreenHeader heading="Proyectos"></ScreenHeader>
      <ScreenBody className="auto-rows-[15rem] lg:grid-cols-3">
        {data.projects && data.projects?.length !== 0 ? (
          data.projects.map(p => <ProjectCard project={p} key={p._id} />)
        ) : (
          <p className="text-center text-3xl text-zinc-400 col-span-3 my-auto">
            No se encontraron proyectos registrados
          </p>
        )}
      </ScreenBody>
      <ProjectMenu />
    </Screen>
  );
}

export default Projects;
