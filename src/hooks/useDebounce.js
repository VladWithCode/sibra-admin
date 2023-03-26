import { useEffect } from 'react';
import { useTimeout } from './useTimeout';

export const useDebounce = (cb, delay, deps) => {
    const { reset, clear } = useTimeout(cb, delay);

    useEffect(reset, [...deps, reset]);
    useEffect(clear, []);
};
