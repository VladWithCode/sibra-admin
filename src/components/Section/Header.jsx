import React from 'react';

function Header({ heading, children }) {
  return (
    <div className='section__header mb-1'>
      {heading && <h3 className='fs-3 text-gray px-1'>{heading}</h3>}
      {children}
    </div>
  );
}

export default Header;
