import React from 'react';
import { getClassName } from '../../utils/helpers';

function Button({ children, type = 'button', onClick, className, ...props }) {
  return (
    <button
      type={type}
      className={getClassName(
        'text-base cursor-pointer m-auto',
        className,
        props.replaceClassName
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
