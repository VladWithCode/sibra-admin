import React from 'react';
import getClassname from '../../utils/getClassname';

function ScreenBody({ className, children, ...props }) {
  return (
    <div
      className={getClassname(
        'py-5 px-8 grid grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-7 lg:grid-cols-3 h-screen-body --scroll',
        className
      )}
    >
      {children}
    </div>
  );
}

export default ScreenBody;
