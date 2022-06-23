import { makeServerRequest } from '../utils/helpers';

export const getProjects = async () => {
  const { projects, status, message, error } = await makeServerRequest(
    '/projects'
  );

  if (status !== 'OK') {
    error && console.error(error);
    return {
      projects: null,
      failed: true,
      toastMessage: message || error.message,
    };
  }

  return { projects, failed: false, toastMessage: null };
};
