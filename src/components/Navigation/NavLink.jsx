import React from 'react';
import { NavLink as Link } from 'react-router-dom';

function NavLink({ to, children, activeClassName = 'active' }) {
  return (
    <Link
      to={to}
      className={({ isActive }) =>
        'link '.concat(isActive ? activeClassName : '').trim()
      }>
      {children}
    </Link>
  );
}

export default NavLink;
