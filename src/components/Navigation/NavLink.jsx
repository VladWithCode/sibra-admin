import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { getClassName } from '../../utils/helpers';

function NavLink({
  to,
  children,
  pushBot = false,
  activeClassName = 'active',
}) {
  return (
    <Link
      to={to}
      className={({ isActive }) =>
        getClassName('flex items-center justify-start w-full pl-4 hover:text-emerald-500', isActive && 'text-emerald-500', pushBot && 'bot')
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
