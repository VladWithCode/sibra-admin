import React, { useReducer, useState } from 'react';
import { useTimeout } from '../../hooks/useTimeout';
import ToastContext from './ToastContext';
import ToastReducer from './ToastReducer';
import { RESET_TOAST, SET_IS_VISIBLE, SET_MESSAGE, SET_TYPE } from './types';

function ToastProvider({ children }) {
  const initialState = {
    visible: false,
    message: '',
    type: 'info', // 'info' | 'error' | 'warning' | 'success'
  };
  const [delay, setDelay] = useState(0);

  const [state, dispatch] = useReducer(ToastReducer, initialState);

  const { clear } = useTimeout(() => resetToast(), delay);

  const setVisible = (visible, autoHide) => {
    dispatch({ type: SET_IS_VISIBLE, payload: visible });

    if (visible && autoHide) {
      setDelay(3500);
    }
  };

  /**
   * Set the toast type
   * @param {'info' | 'error' | 'warning' | 'success'} type
   */
  const setType = type => {
    dispatch({ type: SET_TYPE, payload: type });
  };

  const setMessage = msg => {
    dispatch({ type: SET_MESSAGE, payload: msg });
  };

  const resetToast = () => {
    clear();
    dispatch({ type: RESET_TOAST, payload: initialState });
  };

  const displaySuccessToast = (msg, autoHide = false) => {
    setType('success');
    setMessage(msg);
    setVisible(true, autoHide);
  };

  const displayErrorToast = (msg, autoHide = false) => {
    setType('error');
    setMessage(msg);
    setVisible(true, autoHide);
  };

  const displayInfoToast = (msg, autoHide = false) => {
    setType('info');
    setMessage(msg);
    setVisible(true, autoHide);
  };

  const displayWarningToast = (msg, autoHide = false) => {
    setType('warning');
    setMessage(msg);
    setVisible(true, autoHide);
  };

  return (
    <ToastContext.Provider
      value={{
        visible: state.visible,
        message: state.message,
        type: state.type,
        setVisible,
        setType,
        setMessage,
        displaySuccessToast,
        displayErrorToast,
        displayInfoToast,
        displayWarningToast,
        resetToast,
      }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
