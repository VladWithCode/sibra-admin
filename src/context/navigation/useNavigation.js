import create from 'zustand';

const INITIAL_NAVIGATION_STATE = {
    projectsLink: '/projects',
    customersLink: '/customers',
    recordsLink: '/records',
    calendarLink: '/calendar',
    templatesLink: '/templates',
};

const useNavigation = create(set => ({
    ...INITIAL_NAVIGATION_STATE,

    setLink: (name, value) =>
        set(() => ({
            [name]: value,
        })),

    resetLink: name => {
        set(() => ({ [name]: INITIAL_NAVIGATION_STATE[name] }));
    },
}));

export default useNavigation;
