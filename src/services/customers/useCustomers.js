import { useQuery } from 'react-query';
import customerKeys from './customerKeys';
import { fetchCustomers } from './fetchers';

export const useGetCustomers = ({ name, project, sort }) => {
  return useQuery(customerKeys.list({ name, project, sort }), fetchCustomers);
};

export const useGetCustomerById = (id) => {
  return useQuery(customerKeys.detail(id), fetchCustomers);
};
