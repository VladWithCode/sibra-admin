import { API_URL } from '../../config/globals';

const paths = {
  list: (filters) =>
    `?name=${filters.name}&project=${filters.project}&sortBy=${filters.sort}`,
  detail: (id) => `/${id}`,
};

export const fetchCustomers = async ({ queryKey }) => {
  const [_ctx, type, params] = queryKey;

  const response = await fetch(API_URL + '/customers' + paths[type](params));
  const data = await response.json();

  if (!response.ok) throw new Error(data.message);

  return data;
};
