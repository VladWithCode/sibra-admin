import create from 'zustand';

const TOAST_INITIAL_STATE = {
    message: '',
    type: 'message',
    isActive: false,
};

const useToast = create(set => ({
    ...TOAST_INITIAL_STATE,

    setMessage: message => {
        set(() => ({ message }));
    },

    setIsActive: isActive => {
        set(() => ({ isActive }));
    },

    displayToast: message => {
        set(() => ({ message, type: 'message', isActive: true }));
    },

    displayErrorToast: message => {
        set(() => ({ message, type: 'error', isActive: true }));
    },

    displayWarnToast: message => {
        set(() => ({ message, type: 'warn', isActive: true }));
    },

    reset: () => set(() => TOAST_INITIAL_STATE),
}));

export default useToast;
