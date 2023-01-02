import React from 'react';
import { getClassName } from '../../utils/helpers';

function Screen({ classname, children }) {
  return (
    <div
      className={getClassName('relative block w-full h-full pl-12', classname)}
    >
      {children}
    </div>
  );
}

export default Screen;
