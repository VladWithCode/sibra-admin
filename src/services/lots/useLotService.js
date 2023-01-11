import { useQuery } from 'react-query';
import { fetchLots } from './fetchers';
import lotKeys from './lotKeys';

export const useGetLots = ({ projectId, filters }) => {
  if (typeof projectId === 'string' && projectId.length > 0)
    return useQuery(lotKeys.projectList(projectId, filters), fetchLots);

  return useQuery(lotKeys.list(filters), fetchLots);
};

export const useGetLotById = (id) => useQuery(lotKeys.detail(id), fetchLots);
