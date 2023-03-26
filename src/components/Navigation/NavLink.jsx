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
                getClassName(
                    'flex items-center justify-start w-full pl-2 hover:text-emerald-500',
                    isActive ? 'text-emerald-500' : 'text-gray-700',
                    pushBot && 'bot'
                )
            }
        >
            {children}
        </Link>
    );
}

NavLink.displayName = 'CustomLink';

export default NavLink;
