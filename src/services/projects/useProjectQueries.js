import { useQuery } from 'react-query';
import { fetchProjects } from './fetchers';
import projectKeys from './projectKeys';

export const useGetProjects = ({ search }) => {
    return useQuery(projectKeys.list({ search }), fetchProjects);
};

export const useGetProjectById = id => {
    return useQuery(projectKeys.detail(id), fetchProjects);
};
