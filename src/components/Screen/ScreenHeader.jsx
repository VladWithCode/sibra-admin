import React from 'react';

function ScreenHeader({ heading, children, className }) {
  return (
    <div
      className={'ui-screen__header'.concat(className ? ' ' + className : '')}>
      <h1 className='ui-screen__heading'>{heading}</h1>
      {children && <div className='ui-screen__right'>{children}</div>}
    </div>
  );
}

export default ScreenHeader;
