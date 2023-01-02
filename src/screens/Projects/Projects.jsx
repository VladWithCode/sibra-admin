import React from 'react';
import ProjectCard from '../../components/Projects/ProjectCard';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import ProjectMenu from '../../components/Projects/ProjectMenu';
import Screen from '../../components/Screen/Screen';
import { useGetProjects } from '../../requests/projects/useProjectQueries';
import ErrorScreen from '../../components/Screen/ErrorScreen';
import LoadingScreen from '../../components/Screen/LoadingScreen';

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
      <div className="projectpage__listing p-3">
        {data.projects.map((p) => (
          <ProjectCard project={p} key={p._id} />
        ))}
      </div>
      <ProjectMenu />
    </Screen>
  );
}

export default Projects;
