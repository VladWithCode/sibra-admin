import React, { useContext } from 'react';
import SidebarContext from '../../context/Sidebar/SidebarContext';
import Navigation from '../Navigation/Navigation';

function Sidebar() {
  const { isExpanded } = useContext(SidebarContext);

  return (
    <nav className={isExpanded ? 'expand' : ''}>
      <Navigation />
    </nav>
  );
}

export default Sidebar;
