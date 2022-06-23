import React, { useContext } from 'react';
import ToastContext from '../../context/Toast/ToastContext';

function Toast() {
  const { type, message, visible, resetToast } = useContext(ToastContext);

  const handleCloseClick = e => {
    resetToast();
  };

  return (
    <div className={`toast ${visible ? 'visible ' : ''}${type}`.trim()}>
      <p className='toast__content'>{message}</p>
      <span className='toast__close' onClick={handleCloseClick}>
        <svg>
          <use href='./assets/svg/plus.svg#plus'></use>
        </svg>
      </span>
    </div>
  );
}

export default Toast;
