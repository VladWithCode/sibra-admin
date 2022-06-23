import React from 'react';
import { getClassName } from '../../utils/helpers';

function Button({ children, type = 'button', onClick, className, ...props }) {
  return (
    <button
      type={type}
      className={getClassName('btn', className, props.replaceClassName)}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
