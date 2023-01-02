import { useQuery } from 'react-query';
import { API_URL } from '../../config/globals';
import projectKeys from './projectKeys';

const fetchProjects = async ({ queryKey }) => {
  const [, , filters] = queryKey;

  const response = await fetch(API_URL + `/projects?search=${filters.search}`);
  const data = await response.json();

  if (!response.ok) throw new Error(data.message);

  return data;
};

export const useGetProjects = ({ search }) => {
  return useQuery(projectKeys.list({ search }), fetchProjects);
};

export const useGetProjectById = (id) => {
  return useQuery(projectKeys.detail(id), async ({ queryKey }) => {
    const response = await fetch(API_URL + `/projects/${queryKey[2]}`);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  });
};
