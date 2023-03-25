import create from 'zustand';
import { useGetLots } from '../../services/lots/useLotService';

const INITIAL_LOTS_STATE = {
  lots: [],
  filters: {
    customer: '',
    lot: '',
    mz: '',
    state: '',
  },
};

const useLotStorage = create(set => ({
  ...INITIAL_LOTS_STATE,

  setLots: lots => {
    set(() => ({ lots }));
  },

  setFilter: (filter, value) => {
    set(() => ({ [filter]: value }));
  },
}));

const useLots = ({ options }) => {
  const { data, isLoading, isError, error } = useGetLots({
    filters: { isListing: options.isListing },
    projectId: options.projectId,
  });
};

export default useLots;
