import React from 'react';
import getClassname from '../../utils/getClassname';

function ScreenBody({ className, children }) {
  return (
    <div
      className={getClassname(
        'pt-8 px-24 grid grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-7 h-screen-body --scroll',
        className
      )}
    >
      {children}
    </div>
  );
}

export default ScreenBody;
