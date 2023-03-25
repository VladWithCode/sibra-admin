import { useMutation, useQuery } from 'react-query';
import { API_URL } from '../../config/globals';
import customerKeys from './customerKeys';
import { fetchCustomers } from './fetchers';

export const useGetCustomers = ({ name, project, sort }) => {
  return useQuery(customerKeys.list({ name, project, sort }), fetchCustomers);
};

export const useGetCustomerById = id => {
  return useQuery(customerKeys.detail(id), fetchCustomers);
};

/**
 * File upload service
 */
export const usePutFile = ({ customerId, fileName, file }) => {
  const mutateFn = async () => {
    const fd = new FormData();

    fd.append('file', file);
    fd.append('fileName', fileName);

    const response = await fetch(API_URL + `/customers/${customerId}/file`, {
      method: 'PUT',
      body: fd,
    });
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  };

  return useMutation(customerKeys.files(), mutateFn);
};
