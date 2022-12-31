import { useQuery } from 'react-query';
import projectKeys from './projectKeys';

const fetchProjects = async ({ queryKey }) => {
  const [, , filters] = queryKey;
};

const useProjects = () => {
  return useQuery(projectKeys.list({}), fetchProjects);
};

export default useProjects;
