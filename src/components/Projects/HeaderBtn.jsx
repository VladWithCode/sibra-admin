import React from 'react';
import { getClassName } from '../../utils/helpers';
import Button from '../UI/Button';

function HeaderBtn({ children, className, onClick, ...props }) {
  return (
    <Button
      className={getClassName(
        'section__btn btn--info btn--right mr-2 --round',
        className
      )}
      onClick={onClick}
      {...props}>
      {children}
    </Button>
  );
}

export default HeaderBtn;
