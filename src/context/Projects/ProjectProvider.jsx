import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import {
  SET_NEW_PROJECT,
  SET_NEW_PROJECT_FIELD,
  SET_PROJECT,
  SET_PROJECTS,
  SET_PROJECT_FIELD,
} from './types';

function ProjectProvider({ children }) {
  const initialState = {
    projects: [],
    project: -1,
    newProject: {},
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const setProjects = projects => {
    if (!projects || projects.length === 0) return;

    dispatch({ type: SET_PROJECTS, payload: projects });
  };

  const setProject = id => {
    const projectIndex = state.customers.findIndex(c => id === c._id);

    dispatch({ type: SET_PROJECT, payload: projectIndex });
  };

  const setProjectField = (field, value) => {
    dispatch({ type: SET_PROJECT_FIELD, payload: { field, value } });
  };

  const setNewProject = newProject => {
    dispatch({ type: SET_NEW_PROJECT, payload: newProject });
  };

  const setNewProjectField = (field, value) => {
    dispatch({ type: SET_NEW_PROJECT_FIELD, payload: { field, value } });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        newProject: state.newProject,
        setProjects,
        setProject,
        setProjectField,
        setNewProject,
        setNewProjectField,
      }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
