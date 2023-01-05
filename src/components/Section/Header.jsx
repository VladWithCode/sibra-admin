import React from 'react';

function Header({ heading, children }) {
  return (
    <div className="flex items-center justify-between mb-4">
      {heading && <h3 className="text-lg text-gray-500 px-1">{heading}</h3>}
      {children}
    </div>
  );
}

export default Header;
