import create from 'zustand';

const SIDEBAR_INITIAL_STATE = {
    isExpanded: false,
};

const useSidebar = create(set => ({
    ...SIDEBAR_INITIAL_STATE,

    setIsExpanded: isExpanded => set(() => ({ isExpanded: isExpanded })),

    toggleIsExpanded: () => set(state => ({ isExpanded: !state.isExpanded })),
}));

export default useSidebar;
