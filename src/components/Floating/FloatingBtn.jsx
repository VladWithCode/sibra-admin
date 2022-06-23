import React from 'react';
import { getClassName } from '../../utils/helpers';
import Button from '../UI/Button';

function FloatingBtn({ tooltip, className, children, onClick, ...props }) {
  return (
    <Button
      className={getClassName('floating-btn', className)}
      onClick={onClick}
      {...props}>
      {children}
      {tooltip && <span className='floating-btn__tooltip'>{tooltip}</span>}
    </Button>
  );
}

export default FloatingBtn;
