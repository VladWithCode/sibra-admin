import { API_URL } from '../../config/globals';

const paths = {
  list: (filters) => `?search=${filters.search}`,
  detail: (id) => `/${id}`,
};

export const fetchProjects = async ({ queryKey }) => {
  const [, type, params] = queryKey;

  const response = await fetch(API_URL + '/projects' + paths[type](params));
  const data = await response.json();

  if (!response.ok) throw new Error(data.message);

  return data;
};
