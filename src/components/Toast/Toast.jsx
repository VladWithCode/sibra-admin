import React, { useContext } from 'react';
import ToastContext from '../../context/Toast/ToastContext';
import useToast from '../../hooks/context/toast/useToast';
import { getClassName } from '../../utils/helpers';

function Toast() {
  const { message, type, isActive } = useToast((state) => state);
  const { resetToast } = useContext(ToastContext);

  const handleCloseClick = (e) => {
    resetToast();
  };

  return (
    <div className={getClassName('toast', isActive && 'visible', type)}>
      <p className="toast__content">{message}</p>
      <span className="toast__close" onClick={handleCloseClick}>
        <svg>
          <use href="./assets/svg/plus.svg#plus"></use>
        </svg>
      </span>
    </div>
  );
}

export default Toast;
