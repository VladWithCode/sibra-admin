import React, { useState } from 'react';
import { getClassName } from '../../utils/helpers';
import FloatingBtn from './FloatingBtn';

function FloatingMenu({ children, className, ...props }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={getClassName('floating-menu', className).concat(
        !show ? ' hide' : ''
      )}
      {...props}>
      <div className='floating-menu__toggler'>
        <FloatingBtn
          onClick={() => setShow(!show)}
          className='projectpage__floating-btn btn--success btn--round p-2'
          tooltip='Menu'>
          <svg>
            <use href='./assets/svg/plus.svg#plus'></use>
          </svg>
        </FloatingBtn>
      </div>
      <div className='floating-menu__actions'>{children}</div>
    </div>
  );
}

export default FloatingMenu;
