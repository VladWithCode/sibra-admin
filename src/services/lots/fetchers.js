import { API_URL } from '../../config/globals';

const getFiltersString = (filters) => {
  return new URLSearchParams(filters).toString();
};

const paths = {
  list: (filters) => `?${getFiltersString(filters)}`,
  detail: (id) => `/${id}`,
  project: (pid, filters) => `/per-project/${pid}?${getFiltersString(filters)}`,
};

export const fetchLots = async ({ queryKey }) => {
  const [_ctx, type, ...params] = queryKey;

  const response = await fetch(API_URL + '/lots' + paths[type](...params));
  const data = await response.json();

  if (!response.ok) throw new Error(data.message);

  return data;
};
