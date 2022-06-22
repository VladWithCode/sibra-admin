import React, { useContext } from 'react';
import SidebarContext from '../../context/Sidebar/SidebarContext';
import Navigation from '../Navigation/Navigation';
import Toggler from '../Navigation/Toggler';

function Sidebar() {
  const { isExpanded, toggleIsExpanded } = useContext(SidebarContext);

  return (
    <nav className={'sidebar'.concat(isExpanded ? ' expand' : '')}>
      <Navigation />
      <Toggler onClick={() => toggleIsExpanded()} />
    </nav>
  );
}

export default Sidebar;
