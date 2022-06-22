import React, { useContext } from 'react';
import SidebarContext from '../../context/Sidebar/SidebarContext';
import NavLink from './NavLink';

function Sidebar() {
  const { isExpanded } = useContext(SidebarContext);

  return (
    <nav className={isExpanded ? 'expand' : ''}>
      <div className='icons-container'>
        <NavLink to='/'>
          <svg>
            <use href='/assets/svg/home.svg#home'></use>
          </svg>
        </NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;
