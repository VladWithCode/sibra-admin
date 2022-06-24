import { useContext, useEffect, useState } from 'react';
import { getProjects } from '../../services/ProjectService';
import ProjectContext from './ProjectContext';

const useProjects = ({ id, index } = {}) => {
  const ctx = useContext(ProjectContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!ctx.projects || ctx.projects.length === 0) {
      const _getProjects = async () => {
        const { projects, failed } = await getProjects();

        if (!failed) ctx.setProjects(projects);

        setLoading(false);
      };

      _getProjects();
    }
  }, []);

  useEffect(() => {
    if (typeof id === 'string' && id.length > 0) {
      ctx.setProject(id);
      return;
    }

    if (index > -1) {
      ctx.project = index;
    }
  }, [id, index, ctx.projects]);

  return { ...ctx, loading };
};

export default useProjects;
