import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (cb, delay) => {
  const cbRef = useRef(cb);
  const timerRef = useRef();

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  const set = useCallback(() => {
    timerRef.current = setTimeout(() => cbRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timerRef.current && clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};
