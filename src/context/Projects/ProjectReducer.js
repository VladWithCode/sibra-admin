import { safeClone } from '../../utils/helpers';
import {
  SET_NEW_PROJECT,
  SET_NEW_PROJECT_FIELD,
  SET_PROJECT,
  SET_PROJECTS,
  SET_PROJECT_FIELD,
} from './types';

const ProjectReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PROJECTS:
      return { ...state, projects: payload };
    case SET_PROJECT:
      return { ...state, project: payload };
    case SET_NEW_PROJECT:
      return { ...state, newProject: payload };

    case SET_PROJECT_FIELD:
      if (state.project < 0) {
        console.log('No project: ' + state.project);
        return state;
      }

      const projects = safeClone(state.projects);
      projects[state.project][payload.field] = payload.value;

      return {
        ...state,
        projects: projects,
      };

    case SET_NEW_PROJECT_FIELD:
      return {
        ...state,
        newProject: {
          ...state.newProject,
          [payload.field]: payload.value,
        },
      };

    default:
      return state;
  }
};

export default ProjectReducer;
